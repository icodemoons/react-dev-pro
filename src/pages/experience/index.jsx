import Container from "@/features/container";
import Section from "@/features/section";
import Pill from "@/ui/pill";

export default function Experience({}) {
  return (
    <>

        <div className="absolute -z-50 mt-16 mb-8 overflow-hidden lg:mx-20 md:mx-10  shadow-xl shadow-gray-200 sm:rounded-lg">
          <div className=" rounded-lg bg-indigo-600 px-4 py-5 text-white  sm:px-6">
            <span className="float-left mt-1 max-w-2xl text-base text-yellow-400"></span>
            <h3 className="rounded-full text-base font-medium leading-6 text-white transition-colors">
              My
            </h3>
            <p className="rounded-full text-base font-medium leading-6 text-white transition-colors">
              Work History
            </p>

            <p className="max-w-2xl text-base text-yellow-400">
              Past to Present
            </p>
          </div>

          <div className="">
            <dl>
              <div className=" px-4  py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-ellipsis text-base font-medium text-black"></dt>
                <dd className="mt-1 bg-slate-100 text-base  text-black sm:col-span-2 sm:mt-0"></dd>
              </div>
              <div className=" bg-slate-100  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-lg font-medium text-black">
                  Application for
                </dt>
                <dd className="mt-1 text-base text-black sm:col-span-2 sm:mt-0">
                  Front-end Developer
                </dd>
              </div>
              <div className="bg-slate-100  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-base font-medium text-black"></dt>
                <dd className="mt-1 text-base text-black   sm:col-span-2 sm:mt-0"></dd>
              </div>
              <div className="bg-slate-100  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-base font-medium text-black ">
                  Salary expectation
                </dt>
                <dd className="mt-1 text-base text-black blur-sm hover:blur-none sm:col-span-2 sm:mt-0">
                  $A Healthy Amount.
                </dd>
              </div>
              <div className="grid  bg-slate-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-base font-medium text-black ">Skills</dt>
                <dd className="mt-1 inline-block flex-wrap justify-between  space-x-2 p-5 sm:col-span-2 sm:inline-flex md:inline-block">
                  <Pill>React</Pill>
                  <Pill>Javascript</Pill>
                  <Pill>HTML</Pill>
                  <Pill>CSS</Pill>
                  <Pill>NextJS</Pill>
                  <Pill>Tailwind</Pill>
                  <Pill>Photoshop</Pill>
                  <Pill>Sales</Pill>
                  <Pill>Marketing</Pill>
                  <Pill>Creativity</Pill>
                  <Pill>Original</Pill>
                  <Pill>Intuitive</Pill>
                  <Pill>Adaptive</Pill>
                  <Pill>...</Pill>
                  <Pill>...</Pill>
                </dd>
              </div>
              <div className="bg-slate-100 px-4 py-5 leading-relaxed sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-base font-medium text-black ">
                  Work Experience
                </dt>
                <dd className="leading-1 mt-1 text-base leading-normal   tracking-tight text-black sm:col-span-2 sm:mt-0">
                  <div>
                    <strong>
                      Web Specialist/Designer, Marketing and Sales Associate.
                    </strong>
                    <span className="float-right font-medium">2018-2021 </span>
                  </div>
                  <p>
                    <span className=" mt-1 text-black blur-sm hover:blur-none ">
                      {" "}
                      <em>Brooklyn City Furniture</em>
                      <br />
                      <em>Brooklyn, NY</em>
                    </span>{" "}
                    <span className=" mt-1"></span>
                    <span className="mt-1 text-sm italic text-indigo-600/40   brightness-150 invert md:filter-none"></span>
                  </p>
                  <p className="mt-1">
                    Created, updated, and maintained products for the online
                    store. Improved user experience by creating graphics for use
                    in marketing and advertising and worked on bugs in the
                    source code.
                  </p>
                  <p className="mt-1">
                    Hired a marketing manager and developed a plan to boost the
                    company’s visibility across online platforms. We created
                    online campaigns using Kale Blimp.
                  </p>
                  <p className="mt-1">
                    {" "}
                    Listened attentively to clients’ needs and worked with them
                    on a personal level to find products that match their
                    lifestyle. I also delivered and assembled products when
                    needed.
                  </p>
                </dd>
              </div>

              <div className="bg-slate-100 px-4 py-5 leading-relaxed sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-base font-medium text-black "></dt>
                <dd className="leading-1 mt-1 text-base leading-normal   tracking-tight text-black sm:col-span-2 sm:mt-0">
                  <div>
                    <p>
                      <strong>
                        {" "}
                        Web Specialist/Designer, Sales Associate, and Manager.
                      </strong>
                    </p>
                    <span className="float-right font-medium">2015-2017 </span>
                  </div>
                  <p>
                    <span className=" mt-1 text-black blur-sm hover:blur-none  ">
                      <em>RPimaging Inc.</em> <br />
                      <em>Tucson, AZ </em>
                    </span>
                    <span className=" mt-1"></span>
                    <span className="mt-1 text-sm italic text-indigo-600/40   brightness-150 invert md:filter-none"></span>
                  </p>
                  <p className="mt-1">
                    Optimized and helped rebuild the website for a better
                    shopping experience by recreating the checkout process and
                    created a dropdown menu with inline Javascript.
                  </p>
                  <p className="mt-1">
                    Designed shipping logic, worked with vendors and clients in
                    sales, boosted visibility on Google via an AdWords campaign
                    and learned anything that needed to ensure our competitive
                    edge.
                  </p>
                  <p className="mt-1">
                    Lead and managed a web team to implement new features across
                    the website, and testing mobile and browser compatibility.
                  </p>
                </dd>
              </div>
              <div className="bg-slate-100  px-4 py-5 leading-relaxed sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-base font-medium text-black "></dt>
                <dd className="leading-1 mt-1 text-base leading-normal   tracking-tight text-black sm:col-span-2 sm:mt-0">
                  <div>
                    <p className="mt-1">
                      <strong>
                        Web Development Specialist, Brand facilitator and
                        Account Manager.
                      </strong>
                      <span className="float-right  font-medium">
                        2014-2020
                      </span>
                    </p>
                  </div>
                  <span className=" mt-1 text-black blur-sm hover:blur-none ">
                    {" "}
                    <em>John David | Cannliv LLC</em> <br />
                    <em>Dallas, TX</em>
                  </span>{" "}
                  <span className=" mt-1"></span>{" "}
                  <span className="mt-1 text-sm italic text-indigo-600/40   brightness-150 invert md:filter-none"></span>
                  <p className="mt-1">
                    Assited in building a startup, worked with and managed
                    multiple client accounts and learned entrepreneurship.
                  </p>
                  <p className="mt-1">
                    Strategized the brand’s online identity from website
                    creation to content, marketing and promotional materials.
                  </p>
                  <p className="mt-1">
                    Ran trade show booths, presented and sold products at
                    events, networked, Dj'd, and danced to entertain our crowds.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>

    </>
  );
}
