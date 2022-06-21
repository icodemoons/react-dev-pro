import Container from "@/features/container";

export default function Welcome({}) {
  return (
    <>
      <Container>
        <div className="impact-theroy mb-20 mx-auto flex h-screen items-center justify-center bg-black">
          <div className="text-center">
          
            <p className="pb-5 text-2xl text-white lg:text-5xl ">
              {" "}
              Welcome to my Portfolio
            </p>

            <p className="pt-5 text-2xl text-white  lg:text-3xl   ">
              Cover Letter |{" "}
              <a className="hover:text-indigo-600" href="/experience">
                Resume
              </a>{" "}
            </p>


            <p className="text-2xl pt-10 text-white lg:text-4xl "> Thank you </p>
          </div>
        </div>
      </Container>
    </>
  );
}
