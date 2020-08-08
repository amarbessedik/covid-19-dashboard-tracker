import React, { useState, useEffect } from "react";
import "./App.css";
import {
  FormControl,
  MenuItem,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import InfoBox from "./components/InfoBox";
import Map from "./components/Map";
import Table from "./components/Table";
import LineGraph from "./components/LineGraph";
import { sortData } from "./util";

function App() {
  //local state about countries
  const [countries, setCountries] = useState([]);
  //Track which country is selected
  const [country, setCountry] = useState("worldwide");
  //Country info
  const [countryInfo, setCountryInfo] = useState({});
  //Table data
  const [tableData, setTableData] = useState([]);

  //This code runs once when the code is loaded and not again after
  useEffect(() => {
    const getTotalsWorldwide = async () => {
      await fetch("https://disease.sh/v3/covid-19/all")
        .then((response) => response.json())
        .then((data) => {
          setCountryInfo(data);
          //  console.log("worldwideInfo >>>> ", countryInfo);
        });
    };
    getTotalsWorldwide();
  }, []);

  //This code runs once when the code is loaded and not again after
  useEffect(() => {
    const getCountries = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country, //United States, Algeria, United Kingdom
            value: country.countryInfo.iso2, //US, DZ, UK
            id: country.countryInfo._id,
          }));

          const sortedData = sortData(data);
          setTableData(sortedData);
          setCountries(countries);
        });
    };
    getCountries();
  }, []);

  const onCountryChange = async (e) => {
    e.preventDefault();
    const countryCode = e.target.value;

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
      });
  };

  return (
    <div className="app">
      <div className="app_left">
        <div className="app__header">
          {/* header -> title & select input dropdown*/}
          <h1>COVID-19 DASHBOARD TRACKER</h1>
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem key="0" value="worldwide">
                Worldwide
              </MenuItem>
              {
                /* loop through all countries and display each as an option */
                countries.map((country) => {
                  return (
                    <MenuItem key={country.id} value={country.value}>
                      {country.name}
                    </MenuItem>
                  );
                })
              }
            </Select>
          </FormControl>
        </div>

        {/* 3 info boxes for different statistics */}
        <div className="info__stats">
          <InfoBox
            title="Infected"
            cases={countryInfo.todayCases}
            total={countryInfo.cases}
          />
          <InfoBox
            title="Recovered"
            cases={countryInfo.todayRecovered}
            total={countryInfo.recovered}
          />
          <InfoBox
            title="Fatalities"
            cases={countryInfo.todayDeaths}
            total={countryInfo.deaths}
          />
        </div>
        {/* map */}
        <Map />
      </div>
      <Card className="app__right">
        <CardContent>
          {/* country table */}
          <h3>Live Cases by Country</h3>
          <Table countries={tableData} />
          {/* graph */}
          <h3>Worldwide New Cases</h3>
          <LineGraph />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
