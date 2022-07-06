import Container from "@/features/container";
export default function Book({
  title,
  description,
  book_image,
  author,
  book_image_height,
}) {
  return (
    <>
      <Container>
        <div className="m-10 mx-auto flex w-full flex-wrap bg-gray-100  bg-gradient-to-bl from-white/20  via-gray-300/20 to-white/20 p-10 shadow-md  shadow-neutral-500  hover:bg-gradient-to-l md:flex-nowrap md:space-x-6 lg:w-5/6">
          <div className="float-left mt-3 text-left text-sm text-gray-800 md:w-1/2">
            <h2 className="mb-3 border-b-2 text-xl  uppercase ">{title}</h2>

            <p className="float-left my-1 text-lg font-light">{description}</p>
            <div className="">
              <p className=" float-left my-3  mb-5 text-xs font-light">
                By {author} | Get it here{" "}
                <span className="rounded-lg bg-blue-200 p-1 hover:bg-blue-500 hover:text-yellow-400">
                  Amazon
                </span>
              </p>
            </div>
          </div>
          <div className="mt-3 md:w-1/2 ">
            <div className="flex">
              <img
                height={book_image_height}
                className="lg:float-center w-full object-center px-5 md:w-full lg:w-3/6"
                loading="lazy"
                src={book_image}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
