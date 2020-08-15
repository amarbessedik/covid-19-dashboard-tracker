import React from "react";
import { prettyPrintStat } from "../util";
import LineGraphButton from "../components/LineGraphButton";
import styles from "./LineGraphButtons.module.css";

function LineGraphButtons({
  countryInfo: {
    todayCases,
    cases,
    todayRecovered,
    recovered,
    todayDeaths,
    deaths,
  },
  casesType,
  setCasesType,
}) {

  return (
    <div className={styles.lineGraph__buttons}>
      <LineGraphButton
        color='blue'
        active={casesType === "cases"}
        isBlue={true}
        onClick={(e) => setCasesType("cases")}
        title="Infected"
        cases={prettyPrintStat(todayCases)}
        total={prettyPrintStat(cases)}
      />
      <span></span>
      <LineGraphButton
        color='green'
        active={casesType === "recovered"}
        isGreen={true}
        onClick={(e) => setCasesType("recovered")}
        title="Recovered"
        cases={prettyPrintStat(todayRecovered)}
        total={prettyPrintStat(recovered)}
      />
      <span></span>
      <LineGraphButton
        color='red'
        active={casesType === "deaths"}
        isRed={true}
        onClick={(e) => setCasesType("deaths")}
        title="Fatalities"
        cases={prettyPrintStat(todayDeaths)}
        total={prettyPrintStat(deaths)}
      />
    </div>
  );
}

export default LineGraphButtons;
