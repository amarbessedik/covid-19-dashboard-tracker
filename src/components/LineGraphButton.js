import React from "react";
import styles from "./LineGraphButton.module.css";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";

function LineGraphButton({
  color,
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
    <Button
      variant="outlined"
      color="default"
      isRed={isRed}
      isGreen={isGreen}
      isBlue={isBlue}
      onClick={props.onClick}
      className={`
                   ${
                     active &&
                     ((isBlue && styles.blue) ||
                       (isGreen && styles.green) ||
                       (isRed && styles.red))
                   }`}
    >
      {title}
    </Button>
  );
}

export default LineGraphButton;
