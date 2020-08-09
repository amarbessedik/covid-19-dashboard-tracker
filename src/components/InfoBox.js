import React from "react";
import styles from "./InfoBox.module.css";
import { Card, CardContent, Typography } from "@material-ui/core";
import numeral from 'numeral';

function InfoBox({ title, cases, total }) {
  return (
    <Card className={styles.infoBox}>
      <CardContent className={styles.infoBox__content}>
        {/* Title */}
        <Typography className={styles.infoBox__title} color="textSecondary">
          {title}
        </Typography>
        {/* Number cases numeral(country.cases).format(0.0)*/}
        <h2 className={styles.infoBox__cases}>{numeral(cases).format(0.0)}</h2>
        {/* Total of cases */}
        <Typography className={styles.infoBox__total} color="textSecondary">
          {numeral(total).format(0.0)} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
