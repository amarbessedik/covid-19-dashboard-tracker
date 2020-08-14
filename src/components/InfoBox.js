import React from "react";
import styles from "./InfoBox.module.css";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
} from "@material-ui/core";

function InfoBox({
  active,
  isBlue,
  isRed,
  isGreen,
  title,
  cases,
  total,
  ...props
}) {
  return (
    <Card
      isRed={isRed}
      isGreen={isGreen}
      onClick={props.onClick}
      className={` ${styles.infoBox} 
                   ${
                     active &&
                     ((isBlue && styles.infoBox__blue) ||
                       (isGreen && styles.infoBox__green) ||
                       (isRed && styles.infoBox__red))
                   }`}
    >
      <CardActionArea>
        <CardContent className={styles.infoBox__content}>
          {/* Title */}
          <Typography className={styles.infoBox__title} color="textSecondary">
            {title}
          </Typography>
          {/* Number cases numeral(country.cases).format(0.0)*/}
          <h2
            className={`${
              (isBlue && styles.blue) ||
              (isGreen && styles.green) ||
              (isRed && styles.red)
            }`}
          >
            {cases}
          </h2>
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
