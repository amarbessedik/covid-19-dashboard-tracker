import React from "react";
import styles from "./Article.module.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ShareButtons from "./ShareButtons";
import Link from "@material-ui/core/Link";

function Article({
  height = 150,
  article: { urlToImage, url, content, title },
}) {
  return (
    <Card className={styles.card}>
      <Link style={{ textDecoration: "none" }} href={url} target="_blank">
        <CardActionArea>
          <CardMedia
            component="img"
            alt="News Article"
            height={height}
            image={urlToImage}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              style={{ color: "#33c5ee" }}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {content}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <ShareButtons />
      </CardActions>
    </Card>
  );
}

export default Article;
