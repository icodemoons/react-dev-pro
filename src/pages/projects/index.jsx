import Link from "@/ui/link";
import { Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useTimeoutFn } from "react-use";
import { motion } from "framer-motion";
import projects from "./project-data/projects.json";

export default function ProjectsPage({}) {
  let [isShowing, setIsShowing] = useState(true);
  let [reset, resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500);
  let [isHovered, setHovered] = useState(false);

  function MouseOver(event) {
    let hover = event.target.style.background;
  }
  function MouseOut(event) {
    event.target.style.background = "";
  }

  return (
    <>
      <div className="mx-auto m-20 p-10">
      <div>
        <p className=" mx-auto mt-5 mb-10  w-full  text-center text-xl text-black md:text-3xl ">
          Projects built with Tailwind | React | Next JS
        </p>

        <p className="dark:text-slate-400 mx-auto w-5/6 text-center text-lg lg:w-1/2 ">
          These projects are a combination of fetching data (backend) from and
          API / JSON file and displaying it in the browser and a data tool to
          manage and sort json data for everyone in the office to use.
        </p>

        <p className="dark:text-slate-400 mx-auto mb-5 w-5/6 text-center lg:w-1/2 ">
          <a href="https://www.github.com/icodemoons">
            <motion.img
              initial={{ opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2 }}
              whileHover={{ scale: 1.5 }}
              className="mx-auto "
              src="./images/projects/ghub.png"
            />
          </a>
        </p>
      </div>

      <div className=" absolute -z-50 grid rounded-lg  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="group relative  flex-row flex-wrap ">
            <Link
              onClick={() => {
                setIsShowing(false);
                resetIsShowing();
              }}
              className=" text-xl"
              href={project.href}
            >
              <Transition
                as={Fragment}
                appear={true}
                show={isShowing}
                enter="transform transition duration-[200ms] skew"
                enterFrom="opacity-0 rotate-[180deg] scale-50"
                enterTo="opacity-100 rotate-0 scale-100"
                leave="transform duration-200 transition ease-in-out"
                leaveFrom="opacity-100 rotate-0 scale-100 "
                leaveTo="opacity-0 scale-95 "
              >
                <div className=" min-h-80 bg-slate aspect-w-1 lg:aspect-none  flex items-center justify-center overflow-hidden rounded-md  group-hover:bg-[#130a68ab] lg:h-80">
                  <img
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    className="block"
                  />
                </div>
              </Transition>

              <div className="mt-4 p-20 flex justify-between  text-xl">
                <div className="text-center text-xl">
                  <a href={project.href}>
                    <h3 className="text-center text-xl text-black   ">
                      {project.name}
                    </h3>
                  </a>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}
