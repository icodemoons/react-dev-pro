import { useState, useEffect } from "react";
import Section from "@/features/section";
import Container from "@/features/container";
import ListItem from "@/features/list-items";
import Location from "./location";
import Moon from "./moon";
import Temp from "./temp";

// const weatherApiUrlKey = process.env.NEXT_PUBLIC_WEATHER_KEY;
const weatherApiUrlKey = "32423a0f1606a4205a9fa5b43ee4944a";
// const astroApiUrlKey = process.env.NEXT_PUBLIC_ASTRO_KEY;
const astroApiUrlKey = "d21c77de239846ce87c184106212107";

export default function Weather() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState({});
  const [moon, setMoon] = useState([]);

  const weatherApiUrl = `https://api.weatherapi.com/v1/current.json?key=${weatherApiUrlKey}&q=${query}&aqi=no`;
  const astroApiUrl = `https://api.weatherapi.com/v1/astronomy.json?key=${astroApiUrlKey}&q=${query}&dt=2021-09-07`;

  function getWeather() {
    fetch(weatherApiUrl)
      .then((res) => res.json())
      .then((json) => {
        if (json.error) return;
        setWeather(json.current);
        setLocation(json.location);
      });
  }

  function getAstro() {
    fetch(astroApiUrl)
      .then((res) => res.json())
      .then((json) => {
        if (json.error) return;
        setMoon(json.astronomy.astro);
      });
  }

  useEffect(() => {
    getWeather();
    getAstro();
  }, [query]);

  return (
    <>
      <Container>
        <Section title="Weather">
          <span className="text-yellow-600 ">
            <a href={"/projects"}>
              <img href="/projects" src="/images/back.png" className="w-20" />
            </a>
          </span>

          <div className="first-line: m:max-w-5xl mx-auto rounded-xl bg-blue-200  p-10  text-black md:max-w-xl">
            <div className=" mx-auto text-center">
              <p className="text-2xl lg:text-4xl ">
                Check that weather before you go outside!
              </p>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type in your search"
                className="border-300-red h-10 items-center rounded-2xl border border-r text-center text-lg text-black shadow-2xl shadow-slate-600 md:max-w-lg"
              />
            </div>

            <ListItem
            id="1"
              items={location}
              render={(location) => (
                <Location
                  name={location.name}
                  country={location.country}
                />
              )}
            />
            <ListItem
            id="2"
              items={weather}
              render={(weather) => (
                <Temp
                  temp_f={weather.temp_f}
                  feelslike_f={weather.feelslike_f}
                />
              )}
            />
            <hr />

            <ListItem
            id="3"
              items={moon}
              render={(moon) => (
                <Moon
                  sunrise={moon.sunrise}
                  moonrise={moon.moonrise}
                  sunset={moon.sunset}
                />
              )}
            />
          </div>
        </Section>
      </Container>
    </>
  );
}
