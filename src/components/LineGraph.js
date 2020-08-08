import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { buildChartData, options } from '../util';
// import styles from "./LineGraph.module.css";


function LineGraph({ casesType = 'cases' }) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
        .then((response) => {return response.json()})
        .then((data_json) => {
          console.log("data_json >> ", data_json);  
          const chartData = buildChartData(data_json, "cases");
          setData(chartData);
          console.log("chartData", chartData);
        });
    };
    fetchData();
  }, [casesType]);

  return (
    <div>
        <h1>graph here</h1>
      {data?.length > 0 && (
        <Line
          options={options}
          data={{
            datasets: [
              {
                data: data,
                backgroundColor: "rgba(204, 16, 52, 0.5)",
                borderColor: "#CC1034",
              },
            ],
          }}
        />
      )}
    </div>
  );
}

export default LineGraph;
