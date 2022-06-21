// pages/index.js
import Head from "next/head";
import Container from "@/features/container";
import About from "./about";
import Welcome from "./welcome";
import CoverLetter from "./cover-letter";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="b items-center justify-center py-2">
      <Container>
        <Head>
          <title>My Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <motion.div
            animate={{
              x: 0,
              position: "fixed",
              transitionEnd: {
                display: "none",
              },
            }}
          />
        </div>
        <Welcome />
        <About />
        <CoverLetter />
      </Container>
    </div>
  );
}
