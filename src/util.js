import React from "react";
//Library for number formating
import numeral from "numeral";
// Circle and Popup from leaflet
import { Circle, Popup } from "react-leaflet";

//Sorting and array in ascending order
export const sortData = (data) => {
  return [...data].sort((a, b) => (a.cases > b.cases ? -1 : 1));
};

//Build chart data extracted from API
export const buildChartData = (data, casesType = "cases") => {
  const chartData = [];
  let lastDataPoint;
  if (data) {
    for (let date in data[casesType]) {
      if (lastDataPoint) {
        const newDataPoint = {
          x: date,
          y: data[casesType][date] - lastDataPoint,
        };
        chartData.push(newDataPoint);
      }
      lastDataPoint = data[casesType][date];
    }
  }
  return chartData;
};

//color dictionary (OBJECT)
export const casesTypeColors = {
         cases: {
           hex: "#CC1034",
           border: "#CC1034",
           fill: "rgba(251, 65, 65, 0.7)",
           multiplier: 800,
         },
         recovered: {
           hex: "#7DD71D",
           border: "#7DD71D",
           fill: "rgba(125, 215, 29, 0.7)",
           multiplier: 1200,
         },
         deaths: {
           hex: "#FB4443",
           border: "#FB4443",
           fill: "rgba(251, 65, 65, 0.7)",
           multiplier: 2000,
         },
       };

//Graph display options
export const options = {
         legend: {
           display: false,
         },
         elements: {
           line: {
            //  fill: false,
           },
           point: {
             radius: 0,
           },
         },
         maintainAspectRatio: false,
         tooltips: {
           mode: "index",
           intersect: false,
           callbacks: {
             label: function (tooltipItem, data) {
               return numeral(tooltipItem.value).format("+0.0");
             },
           },
         },
         scales: {
           fontColor: "#f3f2f8",
           xAxes: [
             {
               type: "time",
               time: {
                 format: "MM/DD/YY",
                 tooltipFormat: "ll",
               },
             },
           ],
           yAxes: [
             {
               //  stacked: true,
             },
             {
               gridLines: {
                 display: false,
               },
               ticks: {
                 callbacks: function (value, index, values) {
                   return numeral(value).format("0a");
                 },
               },
             },
           ],
         },
       };



//Draw circles on the map with interactive tooltips
export const showDataOnMap = (data, casesType) =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.3}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className="popup__container">
          <div
            className="popup__flag"
            style={{
              backgroundImage: `url(${country.countryInfo.flag})`, 
              //  backgroundSize: "cover",
              //  height: "25px",
              //  width: "35px",
            }}
          ></div>
          <div className="popup__name">{country.country}</div>
          <div className="popup__confirmed">
            Confirmed: {numeral(country.cases).format(0.0)}
          </div>
          <div className="popup__recovered">
            Recovered: {numeral(country.recovered).format(0.0)}
          </div>
          <div className="popup__fatalities">
            Fatalities: {numeral(country.deaths).format(0.0)}
          </div>
        </div>
      </Popup>
    </Circle>
  ));

export const prettyPrintStat = (stat) => {
  return stat ? `+${numeral(stat).format("0.0a")}` : "+0";
};
  