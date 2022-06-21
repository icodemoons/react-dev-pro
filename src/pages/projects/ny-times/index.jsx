import { useState } from "react";

import ApiResults from "@/features/projects/ny-times/api-results";
import News from "@/features/projects/ny-times/news";
import Book from "@/features/projects/ny-times/book";

import Container from "@/features/container";

import Link from "@/ui/link";

const NY_NEWS_API_KEY = process.env.NEXT_PUBLIC_NY_NEWS_API_KEY;
const NY_BOOKS_API_KEY = process.env.NEXT_PUBLIC_NY_BOOKS_API_KEY;

export default function NyTimes({}) {
  const [type, setType] = useState("articles");

  function renderType() {
    switch (type) {
      case "news":
        return (
          <ApiResults
            apiUrl={`https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${NY_NEWS_API_KEY}`}
            renderItem={(results) => <News {...results} />}
            searchProp="title"
            renderJson={(json) => json.results}
          />
        );
      case "books":
        return (
          <ApiResults
            apiUrl={`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${NY_BOOKS_API_KEY}`}
            searchProp="title"
            renderItem={(book) => <Book {...book} />}
            renderJson={(json) => json.results.books}
          />
        );
      default:
        console.log("Sorry, we are out of " + type + ".");
        return "";
    }
  }

  return (
    <>
      <Container className=" text-black">
        <div className="flex flex-wrap ">
          <span className="mt-10">
            <Link href="/projects">
              <img src="/images/back.png" className="w-20" />
            </Link>
          </span>

          <div className="mx-auto mt-10 flex w-full text-center">
            <div className="w-full">
              <div className=" text-center text-2xl text-black md:text-2xl ">
                <img
                  className="mx-auto w-1/2 lg:w-2/6"
                  src="/images/projects/nyt-slim.png"
                />
              </div>
            </div>
          </div>

          <div className="mx-auto mt-10 flex w-full text-center lg:w-1/2  lg:p-0">
            <div className="mx-auto w-1/2 hover:bg-slate-700  ">
              <img
                src="/images/projects/books.png"
                onClick={() => setType("books")}
              />
            </div>

            <div className="mx-auto w-1/2 hover:bg-slate-700  ">
              <img
                className="hover:invert"
                src="/images/news.png"
                searchProp=""
                onClick={() => setType("news")}
              />
            </div>
          </div>

          <div className="flex w-full items-center  ">{renderType(type)}</div>
        </div>
      </Container>
    </>
  );
}
