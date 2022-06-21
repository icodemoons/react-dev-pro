import { useRouter } from "next/router";
import Container from "@/features/container";
import Nav from "./nav";
import NavItem from "./nav/nav-item";

import { useState } from "react";

export default function Header({}) {
  const [bgColor, setBgColor] = useState("");

  const [someStateValue, setSomeStateValue] = useState(false);

  const handleClick = () => {
    setSomeStateValue(!someStateValue);
    setBgColor("bg-black");
  };

  const router = useRouter();

  return (
    <>
      <div
        className={`w-full  ${
          router.asPath === "/"
            ? "  text-indigo-600  "
            : " text-indigo-300/70  "
        }`}
      >
        <Container>
          <Nav>
            <NavItem onClick={handleClick} title="Home" href="/" />
            <NavItem onClick={handleClick} title="Projects" href="/projects" />
            <NavItem title="Experience" href="/experience" />
          </Nav>
        </Container>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            rowGap: "16px",
            marginBottom: "32px",
          }}
        ></div>
      </div>
    </>
  );
}
