
export default function Temp({ temp_f, feelslike_f }) {
  return (
    <div className="my-4 mx-auto flex w-3/6  text-center ">
      <div className="flex-grow">
        <div className="mx-auto  inline-flex w-full justify-evenly space-x-2 whitespace-nowrap hover:underline">
          <div className="flex-shrink font-bold ">Temp:</div>
          <div className=" underline">{temp_f}</div>
          <div className="flex-shrink">Feels like:</div>
          <div className="underline">{feelslike_f}</div>
        </div>
      </div>
    </div>
  );
}
