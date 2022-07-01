import HeaderOption from "./header-option";

import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";

export default function HeaderOptions({}) {
  return (
    <>
      <div className="flex w-full justify-self-start pt-5 text-sm text-gray-700 sm:pl-10 lg:justify-start lg:space-x-36 lg:text-base">
        <div className="flex space-x-6">
          <HeaderOption Icon={SearchIcon} title="ALL" />
          <HeaderOption Icon={PhotographIcon} title="Images" />
          <HeaderOption Icon={PlayIcon} title="Videos" />
          <HeaderOption Icon={NewspaperIcon} title="News" />
          <HeaderOption Icon={MapIcon} title="Maps" />
          <HeaderOption Icon={DotsVerticalIcon} title="More" />
        </div>
      </div>
    </>
  );
}
