import React from "react";
import styles from "./Table.module.css";
import LineGraph from './LineGraph';
import numeral from 'numeral';


function Table({ countries }) {
  return (
    <div className={styles.table}>
      <table>
        <tr>
          <th>Country</th>
          <th>Trendings from last 120 days</th>
          <th>Total # of cases</th>
        </tr>
        {countries.map(({ country, cases}) => {
          return (
            <tr key={country}>
              <td>{country}</td>
              <td>
                <LineGraph location={country} />
              </td>
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

// {
//   countries.map(({ country, cases }) => {
//     return (
//       <tr key={country}>
//         <td>{country}</td>
//         <td>
//           <strong>{cases}</strong>
//         </td>
//       </tr>
//     );
//   });
// }
