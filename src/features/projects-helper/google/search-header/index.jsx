import { XIcon, MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import Avatar from "../avatar";
import HeaderOptions from "../header-options";

export default function SearchHeader({ query, setQuery }) {
  return (
    <header className="sticky top-0 mx-auto w-full items-center justify-between p-6 px-3 sm:pl-[5] md:pl-[14%] lg:pl-52">
      <div>
        <div className="mt-4 flex w-full max-w-2xl items-center rounded-full border border-gray-700 shadow-gray-700 bg-white px-6 py-3 pl-8   focus-within:shadow-lg hover:shadow-xl text-xl  sm:max-w-xl lg:max-w-xl">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            name="search"
            className="flex w-full pl-8 "
            type="text"
          />

          <XIcon
            onClick={(event) => setQuery((event.target.value = ""))}
            className="h-5 transform cursor-pointer text-gray-500 transition duration-100 hover:scale-125 sm:mr-3"
          />
          <MicrophoneIcon className="mr-3 hidden h-5 border-l-2 border-gray-300 pl-4  text-blue-500 sm:inline-flex" />
          <SearchIcon
            hidden
            type="submit"
            className="hidden h-5 text-blue-500 sm:inline-flex"
          />
          <button hidden type="submit">
            Search
          </button>
          <Avatar
            url="https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif"
            className="ml-auto cursor-pointer"
          />
        </div>

        <div className="flex flex-auto underline">
          <HeaderOptions />
        </div>
      </div>
    </header>
  );
}
