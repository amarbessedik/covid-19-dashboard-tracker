import React from "react";
import styles from "./Table.module.css";
import numeral from "numeral";

function Table({ countries }) {
  // console.log('countries from TABLE >>>>', countries);
  return (
    <div className={styles.table__outer__container}>
      <div className={styles.table__inner__container}>
        <div className={styles.table}>
          <table>
            <tr>
              <th>Location</th>
              <th>Active</th>
              <th>Deaths</th>
              <th>Recovered</th>
              <th>Total Cases</th>
            </tr>

            {countries.map(
              ({
                country,
                cases,
                active,
                deaths,
                recovered,
                countryInfo: { flag },
              }) => {
                return (
                  <tr key={country}>
                    <td className={styles.flag}>
                      {" "}
                      <img src={flag} alt="flag" /> <span>{country}</span>
                    </td>
                    <td>{numeral(active).format(0.0)}</td>
                    <td>{numeral(deaths).format(0.0)}</td>
                    <td>{numeral(recovered).format(0.0)}</td>
                    <td>
                      <strong style={{ color: "rgb(8, 201, 169)" }}>
                        {numeral(cases).format(0.0)}
                      </strong>
                    </td>
                  </tr>
                );
              }
            )}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
