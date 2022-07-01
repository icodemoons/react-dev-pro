export default function News({ title, abstract, section, media, byline }) {
  return (
    <div className="m-10 mx-auto flex w-full flex-wrap bg-gray-100  from-white/10 via-gray-400/20  to-white/20 p-10 shadow-md shadow-neutral-500 backdrop-blur-xl hover:bg-gradient-to-r md:flex-nowrap md:space-x-6 lg:w-5/6">
      <div className="float-left mt-3 text-left text-sm text-gray-800 md:w-1/2">
        <h2 className="mb-3 border-b-2 text-xl  uppercase ">{title}</h2>

        <p className="float-left my-1 text-lg font-light">{abstract}</p>
        <div className="">
          <p className=" float-left my-3  mb-5 text-xs font-light">
            {byline} | Section | {section}
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div>
          {media && media.length > 0 && (
            <img
              src={
                media[0]["media-metadata"].find(
                  (img) => img.format === "mediumThreeByTwo440"
                ).url
              }
              alt=""
              className="w-full rounded-lg   object-scale-down sm:col-span-2 sm:h-60   lg:col-span-6   "
              loading="lazy"
            />
          )}
        </div>
      </div>
    </div>
  );
}
