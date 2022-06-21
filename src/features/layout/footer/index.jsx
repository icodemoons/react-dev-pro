
import { useRouter } from "next/router";

import Nav from "./nav";
import NavItem from "./nav/nav-item";

import { useState, useRef, useEffect } from "react";
import { TimelineMax } from "gsap";
import { gsap } from "gsap";
import Container from "@/features/container";



export default function Footer({}) {

 
  const handleClick = () => setBgColor("bg-white");

  const router = useRouter();

  return (
    <>
      <div
        className={`w-full  ${
          router.asPath === "/"
            ? "bg-black   text-indigo-600  "
            : " text-indigo-300/70  "
        }
        
        `}
      >
          <Container> 
            
        <div className="flex  mx-auto justify-center items-center h-screen"> 
          </div> 
      </Container>
        <Container>
          <Nav>
            <NavItem onClick={handleClick}  title="Home" href="/" />
            <NavItem title="Projects" href="/projects" />
            <NavItem title="Experience" href="/experience" />
            <NavItem title="Blockchain" href="/blockchain" />
          </Nav>
        </Container>

 

      </div>
    </>
  );
}
