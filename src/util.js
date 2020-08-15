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
           hex: "#062BD1",
           border: "#CC1034",
           fill: "rgba(3, 22, 197, 0.5)",
           multiplier: 1000,
         },
         recovered: {
           hex: "rgb(61, 235, 191)",
           border: "#7DD71D",
           fill: "rgba(61, 235, 191, 0.5)",
           multiplier: 1000,
         },
         deaths: {
           hex: "#FB4443",
           border: "#FB4443",
           fill: "rgba(251, 65, 65, 0.5)",
           multiplier: 1500,
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
             fillOpacity={0.5}
             color={casesTypeColors[casesType].border}
             fillColor={casesTypeColors[casesType].fill}
             radius={
               Math.sqrt(country[casesType]) *
               casesTypeColors[casesType].multiplier
             }
           >
             <Popup>
               <div className="popup__container">
                 <div className="popup__header">
                   <div
                     className="popup__flag"
                     style={{
                       backgroundImage: `url(${country.countryInfo.flag})`,
                     }}
                   ></div>
                   <div className="popup__name">{country.country}</div>
                 </div>
                 <div className="date__updated">
                   {new Date(country.updated).toDateString()}
                 </div>
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
