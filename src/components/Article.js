import React from "react";
import styles from "./Article.module.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Share } from "@material-ui/icons";

function Article({ article: { urlToImage, url, description, title } }) {
  return (
    <Card className={styles.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="News Article"
          height="300"
          image={urlToImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "baseline",
        }}
      >
        <Button variant="outlined" size="small" color="primary">
          <a style={{ textDecoration: "none" }} href={url} target="_blank">
            Learn More
          </a>
        </Button>
        {
          <a style={{ textDecoration: "none" }} href={url} target="_blank">
            <Share variant = 'outlined' size="small" style={{padding: '0'}}/>
          </a>
        }
      </CardActions>
    </Card>
  );
}

export default Article;
