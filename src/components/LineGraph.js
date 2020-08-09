import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { buildChartData, options } from "../util";
// import styles from "./LineGraph.module.css";
//buildChartDatasets

const caseTypes = ['cases', 'recovered', 'deaths'];

function LineGraph({height = 90, width = 200, location = 'all', casesType = "cases" }) {
  const [data, setData] = useState({});
  // const [datasets, setDatasets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://disease.sh/v3/covid-19/historical/${location}?lastdays=90`
      )
        .then((response) => {
          return response.json();
        })
        .then((data_json) => {
          // let prepared_json = data_json.timeline? data_json.timeline : data_json;
          // let chartDatasets = [];
          
          // for(let i = 0; i < caseTypes.length; i++){
          //   //  setDatasets({...buildChartData(prepared_json, caseType)});
          //   const tmp = buildChartData(prepared_json, caseTypes[i]);
          //   chartDatasets.push(tmp);
          // }

          // setDatasets(chartDatasets);


          const chartData = data_json.timeline
            ? buildChartData(data_json.timeline)
            : buildChartData(data_json);
          setData(chartData);
        });
    };
    fetchData();
  }, [casesType, location]);

  // console.log("chartDatasets >>>> ", data);

  const _datasets = [
    {
      data: data,
      backgroundColor: "rgba(204, 16, 52, 0.5)",
      borderColor: "#CC1034",
    },
  ];

  return (
    <div>
      {data?.length > 0 && (
        <Line
          width={width}
          height={height}
          options={options}
          data={{
            datasets: _datasets,
          }}
        />
      )}
    </div>
  );
}

export default LineGraph;
