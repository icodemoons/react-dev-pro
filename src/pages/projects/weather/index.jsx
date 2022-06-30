import { useState, useEffect } from "react";
import Link from "next/link";
import Section from "@/features/section";
import Container from "@/features/container";

const weatherApiUrlKey = process.env.NEXT_PUBLIC_WEATHER_KEY;
const astroApiUrlKey = process.env.NEXT_PUBLIC_ASTRO_KEY;

export default function Weather({}) {
  
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
            <Link href={"/projects"}>
              <img href="/projects" src="/images/back.png" className="w-20" />
            </Link>
          </span>
          <div className="first-line: m:max-w-5xl mx-auto rounded-xl bg-blue-200  p-10  text-black md:max-w-xl">
            <div className=" mx-auto text-center">
              <p className="lg:text-2xl text-2xl ">
                Check that weather before you go outside! 
              </p>

              <div className="m-5 flex flex-col  items-center justify-center whitespace-pre text-center text-lg font-medium">
                <img src="/images/projects/city.png" className="w-20" />
                {location.name}, {location.country}
              </div>

              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type in your search"
                className="border-300-red h-10 items-center rounded-2xl border border-r text-center text-lg text-black shadow-2xl shadow-slate-600 md:max-w-lg"
              />
            </div>

            <div className="my-4 mx-auto flex w-3/6  text-center ">
              <div className="flex-grow">
                <div className="mx-auto  inline-flex w-full justify-evenly space-x-2 whitespace-nowrap hover:underline">
                  <div className="flex-shrink font-bold ">Temp:</div>
                  <div className=" underline">{weather.temp_f }</div>
                  <div className="flex-shrink">Feels like:</div>
                  <div className="underline">{weather.feelslike_f}</div>
                </div>

                <div className="flex space-x-2 to-stone-900 hover:underline   "></div>
              </div>
            </div> 
            <hr />

            <div className="my-2 flex items-center justify-center space-x-3">
              <div className="hover:underline ">
                <span className="text-yellow-200  hover:underline  ">
                  <img src="/images/projects/sunrise.png" className="w-20" />
                </span>
                {moon.sunrise}
              </div>
              <div>
                {" "}
                <span className=" text-yellow-600 ">
                  <img src="/images/projects/sunset.png" className="w-20" />{" "}
                </span>{" "}
                {moon.sunset}
              </div>
              <div>
                {" "}
                <span className=" text-yellow-600 ">
                  <img src="/images/projects/moon.png" className="w-20" />
                </span>
                {moon.moonrise}
              </div>
            </div>
          </div>
        </Section>
      </Container>
    </>
  );
}
