import React, { useState, useEffect } from 'react';
import styles from './News.module.css';
import Article from './Article';


//newsapi.org
const API_KEY = `69a95ac9df454ecabc9968c21fbe901c`;
const url =
  `http://newsapi.org/v2/everything?` +
  `q=${'coronavirus'||'covid-19'}&` +
  `from=2020-08-12&` +
  `sortBy=popularity&` +
  `apiKey=${API_KEY}`;

function News() {
    const[newsArticles, setNewsArticles] = useState([]);
    
    useEffect(()=>{
        const fetchNewsArticles = async () =>{
            await fetch(url)
            .then(response => response.json())
            .then(data =>{
                setNewsArticles(data.articles);
            })
        };
        fetchNewsArticles();
    },[]);
    
    console.log("new articles: >>>> ", newsArticles);

    return (
        <div className={styles.article__list}>
            {newsArticles.map((article, i) =>(
                <Article key={i} article={article}/>
            ))}
        </div>
    )
}

export default News
