import React from "react";
import styles from "./InfoBox.module.css";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
} from "@material-ui/core";

function InfoBox({ title, cases, total, ...props }) {
  return (
    <Card onClick={props.onClick} className={styles.infoBox}>
      <CardActionArea>
        <CardContent className={styles.infoBox__content}>
          {/* Title */}
          <Typography className={styles.infoBox__title} color="textSecondary">
            {title}
          </Typography>
          {/* Number cases numeral(country.cases).format(0.0)*/}
          <h2 className={styles.infoBox__cases}>{cases}</h2>
          {/* Total of cases */}
          <Typography className={styles.infoBox__total} color="textSecondary">
            {total} Total
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default InfoBox;
