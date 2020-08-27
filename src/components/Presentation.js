import React from 'react';
import styles from './Presentation.module.css';

const Presentation = () => {
    return (
      <div id="about" className={styles.app__about__data}>
        <h3>
          Data obtained from{" "}
          <a className={styles.about__link} href="https://www.disease.sh">
            Open Disease Data
          </a>
        </h3>
        <h4>It changes constantly </h4>
        <p>
          Reported cases might not reflect some cases while they are being
          reported. This data is being outsourced from{" "}
          <a
            className={styles.about__link}
            href="https://github.com/CSSEGISandData/COVID-19"
          >
            Johns Hopkins University
          </a>
          ,{" "}
          <a
            className={styles.about__link}
            href="https://github.com/nytimes/covid-19-data"
          >
            the New York Times
          </a>
          ,{" "}
          <a
            className={styles.about__link}
            href="https://www.worldometers.info/coronavirus/"
          >
            Worldometers
          </a>
          , and{" "}
          <a
            className={styles.about__link}
            href="https://github.com/ActiveConclusion/COVID19_mobility"
          >
            Apple reports
          </a>{" "}
          to give you a comprehensive view of the data.
        </p>
        <h4>Different data sources?</h4>
        <p>
          There are various sources that are tracking and aggregating
          coronavirus data. They update at different times and may have
          different ways of gathering data.
        </p>
      </div>
    );
}

export default Presentation;
