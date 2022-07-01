
export default function Location({ name, country }) {
    return (
      <div className="my-4 mx-auto flex w-3/6  text-center ">
        <div className="m-5 flex flex-col  items-center justify-center whitespace-pre text-center text-lg font-medium">
         <img src="/images/projects/city.png" className="w-20" />
            {name}, {country}
        </div>
      </div>
    );
  }
  