import { useEffect, useState } from "react";
import Head from "next/head";
import Container from "@/features/container";
import SearchHeader from "@/features/projects/google/search-header";
import SearchResults from "@/features/projects/google/search-results";
import Link from "@/ui/link";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
const CONTEXT_KEY = process.env.NEXT_PUBLIC_GOOGLE_CONTEXT_KEY;

export default function GoogleSearchPage({}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(async () => {
    if (query.length < 3) return;
    const res = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${query}`,
      {
        method: "GET",
      }
    );
    const json = await res.json();
    setResults(json.items);
  }, [query]);

  return (
    <>
      {" "}
      <Container>
        <Head>
          <title>{query} - Google Search Results</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Link href="/projects">
          <img src="/images/back.png" className="mt-10 w-20" />
        </Link>

        <div className="mx-auto max-w-2xl px-4 pt-12 sm:px-6 lg:max-w-5xl ">
          <div class="object-center text-center">
            <div>
              <img
                className=" mx-auto w-1/2 object-center sm:w-1/3 lg:w-1/5"
                src="/images/projects/gsvg.png"
              />
            </div>
          </div>
          <h2 className="text mt-10 text-center text-4xl  font-extrabold tracking-tight sm:text-2xl md:text-2xl ">
            Try your search now with instant results
          </h2>
          <p className=" text mt-10 text-center text-lg font-extrabold    tracking-tight sm:text-lg md:text-2xl "></p>
          <br />

          <SearchHeader query={query} setQuery={setQuery} />
        </div>
        <div className=" mx-auto text-center  text-xl ">
          You search results for :{" "}
          <p className=" mt-2  border-black py-4 text-2xl  tracking-tight">
            {query}
          </p>
          <div className=" mx-auto w-full ">
            {results.map((result) => (
              <div className="border 	">
                <SearchResults {...result} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
