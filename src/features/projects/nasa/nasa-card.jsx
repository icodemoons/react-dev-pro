function StarSvg() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="text-violet-600 "
    >
      <path d="M9.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.784-.57-.381-1.81.587-1.81H7.03a1 1 0 00.95-.69L9.05 3.69z" />
    </svg>
  );
}

export default function NasaCard({
  abstract
}) {
  return (
    <>
      <div className="my-2 flex w-full flex-wrap p-2  shadow-md md:flex-nowrap md:space-x-6 md:rounded-sm md:border md:p-16">
        <div className="w-full md:w-1/2">
          <div>
            <img className="w-full" src={hdurl} />
          </div>
          <div className="mt-2 flex w-full flex-row">
            <div className="flex items-center space-x-1 text-xs font-light">
              <StarSvg />
              <div>Image Courtesy of NASA</div>
              <div>{date}</div>
            </div>
          </div>
        </div>

        <div className="text-justify text-sm text-gray-800 md:w-1/2">
          <h2 className="my-2 border-b-2 text-2xl  uppercase">{title}</h2>

          <p>{explanation}</p>

          <p>{copyright}</p>
        </div>
      </div>
    </>
  );
}
