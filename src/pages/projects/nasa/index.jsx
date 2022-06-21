import { useEffect, useState } from "react";
import NasaCard from "@/features/projects/nasa/nasa-card";
import Container from "@/features/container";
import Link from "@/ui/link";
import Section from "@/features/section";

const NASA_API_KEY = process.env.NEXT_PUBLIC_NASA_API_KEY;

const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&count=5`;

export default function NasaInfo({}) {
  const [nasaArticles, setNasaArticles] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(async () => {
    const res = await fetch(apiUrl);
    const json = await res.json();
    setNasaArticles(json);
  }, []);

  return (
    <>
      <Container>
        <Section title="NASA">
          <div className="flex">
            <div className="grid gap-4 bg-white">
              <span className="mt-10">
                <Link href="/projects">
                  <img src="/images/back.png" className="w-20" />
                </Link>
              </span>

              <div className="mx-auto flex w-full max-w-2xl justify-center p-20 text-center lg:max-w-7xl">
                <img
                  className="hover:saturate-400 h-20 transition  delay-300 duration-500  hover:-translate-y-40 hover:skew-y-6 hover:-hue-rotate-90 "
                  src="https://www.nasa.gov/sites/default/files/thumbnails/image/s75-31690.jpeg"
                />
              </div>
              <div className=" mx-auto  w-full text-center">
                <img
                  className=" mx-auto text-center lg:w-1/6"
                  src="https://apod.nasa.gov/apod/image/0307/gravityearth2_grace.gif"
                />

                <p className="mt-16 text-lg">
                  Below are images selected from NASA's Image of the Day
                  website.
                </p>
                {nasaArticles.map((article) => (
                  <figure class="shadowtext-white my-8 items-center rounded-xl p-2 py-3 px-6">
                    <NasaCard {...article} />
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </Container>
    </>
  );
}
