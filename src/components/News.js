import React, { useState, useEffect } from "react";
import styles from "./News.module.css";
import Article from "./Article";

//newsapi.org
const API_KEY = `69a95ac9df454ecabc9968c21fbe901c`;
const url =
  `http://newsapi.org/v2/everything?` +
  `q=${"coronavirus" || "covid-19"}&` +
  `from=${new Date().toLocaleDateString()}&` +
  `sortBy=popularity&` +
  `apiKey=${API_KEY}`;

function News() {
  const [newsArticles, setNewsArticles] = useState([]);
  const [featuredNewsArticle, setFeaturedNewsArticle] = useState(0);

  useEffect(() => {
    const fetchNewsArticles = async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setNewsArticles(data.articles);
        });
    };
    fetchNewsArticles();
  }, []);

  console.log("newsArticles >>> ", newsArticles);

  const handleClick = (index) => {
    setFeaturedNewsArticle(index);
  };

  return (
    <div className={styles.news__container}>
      <div className={styles.featured__article}>
        <h1>Featured Article</h1>

        {newsArticles.length ? (
          <p>{newsArticles[featuredNewsArticle].author}</p>
        ) : (
          "Uknown"
        )}
           <p style={{marginBottom: '25px'}}>{new Date().toLocaleDateString()}</p>

        {newsArticles.length ? (
          <Article height={600} article={newsArticles[featuredNewsArticle]} />
        ) : null}
      </div>
      <div style={{ textAlign: "center", textTransform: "uppercase" }}>
        <h3 style={{margin: '50px 0', color: '#777', textTransform: 'uppercase'}}>Discover News Article List</h3>
        <div className={styles.article__list}>
          {
          newsArticles.map((article, i) => {
              if(i !== featuredNewsArticle){
                  return <div
                    className={styles.sidebar__article}
                    onClick={() => {
                      handleClick(i);
                    }}
                  >
                    <Article key={i} article={article} />
                  </div>;
              }
                return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default News;
