import { useState } from "react";
import Container from "@/features/container";
import Link from "next/link";
import Tictactoe from "@/features/projects/games/tictactoe";


export default function Games() {
  const [type, setType] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  function renderType() {
    switch (type) {
      case "tictactoe":
        return <Tictactoe />;
      default:
        console.log("Sorry, we are out of " + type + ".");
        return "";
    }
  }
 
  return (
    <>
      <Container className=" text-black">
        <div className="flex flex-wrap ">
          <span className="mt-10">
            <Link href="/projects">
              <img src="/images/back.png" className="w-20" />
            </Link>
          </span>

          <div className="mx-auto mt-10 flex w-full text-center">
            <div className="w-full">
              <div className=" text-center text-2xl text-black md:text-2xl ">
                Ready to unwind?
                <img
                  className="mx-auto w-1/3 lg:w-1/5"
                  src="/images/games.svg"
                />
              </div>{" "}
              <div className="mx-auto w-full ">
                <div className="mx-auto mt-10 flex w-full p-10 text-center lg:w-1/2">
                  <div className="mx-auto w-2/5 hover:bg-black  ">
                    <img
                      className="hover:invert"
                      src="/images/tictactoe.svg"
                      onClick={() => setType("tictactoe")}
                    />
                  </div>
                  


                </div>{" "}
              </div>
              <div className=" mx-auto w-full items-center  ">
                {type && renderType(type)}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
