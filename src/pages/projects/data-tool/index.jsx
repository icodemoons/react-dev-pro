import DataTable from "@/ui/data-table";
import { useState } from "react";
import data from "/src/data/people.json";
import Link from "next/link";
export default function DataTool() {
  const [query, setQuery] = useState("");
console.log(data);
  return (
    <>
      <div className="min-height justfiy-center container mx-auto mt-16 w-full content-center ">
        <Link href="/projects">
          <img src="/images/back.png" className="mt-10 w-20" />
        </Link>
        <div> </div>
        <div className="mx-auto  flex w-2/6 flex-wrap bg-fixed pt-10 md:w-2/6 lg:w-1/6  ">
          <img
            src="/images/owl.png"
            alt=""
            className="mx-auto w-full"
            loading="lazy"
          />
        </div>
        <div>
          <p className=" mx-auto mt-10 mb-10  w-full  text-center text-xl text-black md:text-3xl ">
            Search and filter through your rolodex of contacts
          </p>
          <br />
        </div>
       

    <DataTable query={query} setQuery={setQuery} rows={data} />
      </div>
    </>
  );
}
