import { useState } from "react";
import "./globals.css";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/features/layout";

export default function App({ Component, pageProps, router }) {
  const [mouse, setMouse] = useState([0, 0, false]);
  const [mx, my, isActive] = mouse;

  return (
    <AnimatePresence exitBeforeEnter>
      <Layout className="mx-auto w-full  ">
        <motion.div
          key="dot"
          className="dot"
            initial={{
            opacity: 0,
          }}
          animate={{
            x: mx,
            y: my,
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          exitBeforeEnter
          transition={{ ease: "easeOut", duration: 1 }}
          key={router.route}
          animate={{ opacity: [0, 1] }}
          intial="pageIntial"
          exit="pageExit"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: [0, 1],
            },
            pageExit: {
              opacity: [1, 0],
            },
          }}
        >
          {isActive && (
            <motion.div
              key="dot"
              className="dot"
              initial={{
                opacity: 0,
              }}
              animate={{
                x: mx,
                y: my,
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10">
                <circle fill="red" cx="4" cy="4" r="4" />
              </svg>
            </motion.div>
          )}
          <Component {...pageProps} />
        </motion.div>
      </Layout>
    </AnimatePresence>
  );
}

