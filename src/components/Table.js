import React from "react";
import styles from "./Table.module.css";
import numeral from 'numeral';


function Table({ countries }) {
  console.log('countries from TABLE >>>>', countries);
  return (
    <div className={styles.table}>
      <table>
        <tr>
          <th>Country</th>
          <th>Active</th>
          <th>Deaths</th>
          <th>Recovered</th>
          <th>Total Cases</th>
        </tr>
        {countries.map(({ country, cases, active, deaths, recovered}) => {
          return (
            <tr key={country}>
              <td>{country}</td>
              <td>{active}</td>
              <td>{deaths}</td>
              <td>{recovered}</td>
              <td>
                <strong>{numeral(cases).format(0.0)}</strong>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Table;

