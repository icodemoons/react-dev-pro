import Container from "@/features/container";

export default function AboutMyArt({}) {
  return (
    <>
      <Container>
        <div className="delay-800  flex bg-indigo-600 p-10  ">
          <div className="mx-auto grid max-w-4xl grid-cols-1 lg:max-w-5xl lg:grid-cols-2 lg:gap-x-20">
            <div className="col-start-1 col-end-3 row-start-1 grid gap-4 sm:mb-6 sm:grid-cols-4 lg:col-start-2 lg:row-span-6 lg:row-end-6 lg:mb-8 lg:gap-6">
              <img
                src="/images/art.jpg"
                alt=""
                className="h-60 w-full rounded-lg bg-fixed object-cover sm:col-span-2 sm:h-52 lg:col-span-full"
                loading="lazy"
              />
              <img
                src="/images/2dance.png"
                alt=""
                className="hidden h-52 w-full rounded-lg bg-fixed object-cover sm:col-span-2 sm:block md:col-span-1 lg:col-span-2 lg:row-start-2 lg:h-32"
                loading="lazy"
              />
              <img
                src="/images/owl.png"
                alt=""
                className="hidden h-52 w-full rounded-lg bg-fixed object-cover text-white md:block lg:col-span-2 lg:row-start-2 lg:h-32"
                loading="lazy"
              />
            </div>

            <div className=" flex flex-grow text-xl text-white ">
              <p className="mt-10 text-2xl tracking-wide lg:m-0">
                <span className="delay text-2xl tracking-wide  duration-1000  hover:text-ellipsis hover:text-yellow-400 md:text-3xl lg:text-4xl">
                  I believe we all are here for to live the fullest and
                  brightest life we allow ourselves.{" "}
                </span>{" "}
                <br /> <br />
                <span className="delay text-2xl tracking-wide duration-1000  hover:text-ellipsis md:text-3xl lg:text-3xl">
                  {" "}
                  My mission in life is to enrich people with positive energy
                  and creativity. I bring 8+ years of a unique mixture of soft /
                  technical skills and a fluid approach to problem-solving.{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
