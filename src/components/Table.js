import React from "react";
import styles from "./Table.module.css";
import LineGraph from './LineGraph';


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
                <strong>{cases}</strong>
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
