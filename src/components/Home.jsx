import React from 'react'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./css/Home.css"

import Socials from './Socials';
import Content from './Content';

function Home() {
    const [darkMode, setDarkMode] = useState(true);
    const [hasBlink, setHasBlink] = useState(false);
    const [x, setX] = useState(0);
  
    useEffect(function () {
      const id = setInterval(function () {
        setHasBlink((prevVal) => !prevVal);
      }, 750);
  
      return () => clearInterval(id);
    }, []);
  return (
    <main className={"main " + (darkMode ? "main-dark" : "main-light")}>
    <Content darkMode={darkMode} hasBlink={hasBlink}/>

    <Socials darkMode={darkMode}/>

    <div
      onClick={() => {
        setX((prev) => {
          {
            return prev === 0 ? 20 : 0;
          }
        });
        setDarkMode((prevVal) => !prevVal);
      }}
      className={"darkMode-" + (darkMode ? "dark" : "light")}
    >
      <motion.div
        animate={{ x }}
        transition={{ type: "spring" }}
        className={"circle-" + (darkMode ? "dark" : "light")}
      ></motion.div>
    </div>
  </main>
  )
}

export default Home