import React from 'react'
import { motion } from "framer-motion";
import "./css/Content.css"

function Content(props) {
  return (
    <div className="content-wrapper">
      <h1>
        <span
          id="quote-first"
          className={"quote-first " + (props.hasBlink ? "blink" : "")}
        ></span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={props.darkMode ? "name-dark" : "name-light"}
        >
          Hackerabad
        </motion.span>
        <span
          id="quote-second"
          className={"quote-second " + (props.hasBlink ? "blink" : "")}
        ></span>
      </h1>
      <p className={"main-p main-p-" + (props.darkMode ? "dark" : "light")}>
        <strong className={props.darkMode ? "strong-dark" : "strong-light"}>
          Hackerabad
        </strong>{" "}
        is an{" "}
        <strong className={props.darkMode ? "strong-dark" : "strong-light"}>
          inclusive
        </strong>{" "}
        and{" "}
        <strong className={props.darkMode ? "strong-dark" : "strong-light"}>
          open source
        </strong>{" "}
        community embracing diversity and empowering beginners
      </p>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        href="https://discord.gg/P5E4u4BGae"
        target="_blank"
        className={"main-cta main-cta-" + (props.darkMode ? "dark" : "light")}
      >
        <span className={props.darkMode ? "joinUs-dark" : "joinUs-light"}>
          Join Us
        </span>
      </motion.a>
    </div>
  )
}

export default Content