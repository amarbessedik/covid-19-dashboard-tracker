import React from "react";
import styles from "./Table.module.css";

function Table({ countries }) {
  return (
    <div className={styles.table}>
      {countries.map(({ country, cases }) => {
        return (
          <tr key={country}>
            <td>{country}</td>
            <td>
              <strong>{cases}</strong>
            </td>
          </tr>
        );
      })}
    </div>
  );
}

export default Table;
