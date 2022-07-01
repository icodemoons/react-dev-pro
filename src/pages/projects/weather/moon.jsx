
export default function Moon({ moonrise, sunrise, sunset }) {
    return (
        <div className="my-2 flex items-center justify-center space-x-3">
        <div className="hover:underline ">
          <span className="text-yellow-200  hover:underline  ">
            <img src="/images/projects/sunrise.png" className="w-20" />
          </span>
          {sunrise}
        </div>
        <div>
          {" "}
          <span className=" text-yellow-600 ">
            <img src="/images/projects/sunset.png" className="w-20" />{" "}
          </span>{" "}
          {sunset}
        </div>
        <div>
          {" "}
          <span className=" text-yellow-600 ">
            <img src="/images/projects/moon.png" className="w-20" />
          </span>
          {moonrise}
        </div>
      </div>
    );
  }
  