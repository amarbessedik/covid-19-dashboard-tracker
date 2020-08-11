import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { buildChartData, options } from "../util";
// import styles from "./LineGraph.module.css";
//buildChartDatasets

function LineGraph({
  height = 220,
  width = 360,
  location = "all",
  casesType = "cases",
}) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://disease.sh/v3/covid-19/historical/${location}?lastdays=180`
      )
        .then((response) => {
          return response.json();
        })
        .then((data_json) => {
          const chartData = data_json.timeline
            ? buildChartData(data_json.timeline, casesType)
            : buildChartData(data_json, casesType);
          setData(chartData);
        });
    };
    fetchData();
  }, [casesType, location]);

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
