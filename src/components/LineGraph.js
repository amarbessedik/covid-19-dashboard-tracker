import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { buildChartData, options } from "../util";
// import styles from "./LineGraph.module.css";

function LineGraph({height = 90, width = 200, location = 'all', casesType = "cases" }) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://disease.sh/v3/covid-19/historical/${location}?lastdays=120`
      )
        .then((response) => {
          return response.json();
        })
        .then((data_json) => {
          const chartData = data_json.timeline
            ? buildChartData(data_json.timeline)
            : buildChartData(data_json);
          setData(chartData);
        });
    };
    fetchData();
  }, [casesType, location]);

  const datasets = [
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
            datasets: datasets,
          }}
        />
      )}
    </div>
  );
}

export default LineGraph;
