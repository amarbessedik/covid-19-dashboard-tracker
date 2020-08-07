import React from "react";
import styles from "./InfoBox.module.css";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, total }) {
  return (
    <Card className={styles.infoBox}>
      <CardContent>
        {/* Title */}
        <Typography className={styles.infoBox__title} color="textSecondary">
          {title}
        </Typography>
        {/* Number cases */}
        <h2 className={styles.infoBox__cases}>{cases}</h2>
        {/* Total of cases */}
        <Typography className={styles.infoBox__total} color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
