import "./App.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import discordLogoLight from "./assets/discord_fill_light.svg";
import twitterLogoLight from "./assets/twitter_fill_light.svg";
import githubLogoLight from "./assets/github_fill_light.svg";
import discordLogoDark from "./assets/discord_fill_dark.svg";
import twitterLogoDark from "./assets/twitter_fill_dark.svg";
import githubLogoDark from "./assets/github_fill_dark.svg";

function App() {
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
      <div className="content-wrapper">
        <h1>
          <span
            id="quote-first"
            className={"quote-first " + (hasBlink ? "blink" : "")}
          ></span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={darkMode ? "name-dark" : "name-light"}
          >
            Hackerabad
          </motion.span>
          <span
            id="quote-second"
            className={"quote-second " + (hasBlink ? "blink" : "")}
          ></span>
        </h1>
        <p className={"main-p main-p-" + (darkMode ? "dark" : "light")}>
          <strong className={darkMode ? "strong-dark" : "strong-light"}>
            Hackerabad
          </strong>{" "}
          is an{" "}
          <strong className={darkMode ? "strong-dark" : "strong-light"}>
            inclusive
          </strong>{" "}
          and{" "}
          <strong className={darkMode ? "strong-dark" : "strong-light"}>
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
          className={"main-cta main-cta-" + (darkMode ? "dark" : "light")}
        >
          <span className={darkMode ? "joinUs-dark" : "joinUs-light"}>
            Join Us
          </span>
        </motion.a>
      </div>

      <div className="socials">
        <a
          className="cta-twitter"
          target="_blank"
          href="https://twitter.com/hackerabad"
        >
          <img src={darkMode ? twitterLogoDark : twitterLogoLight} />
        </a>
        <a
          className="cta-discord"
          target="_blank"
          href="https://discord.gg/P5E4u4BGae"
        >
          <img src={darkMode ? discordLogoDark : discordLogoLight} />
        </a>
        <a
          className="cta-github"
          target="_blank"
          href="https://github.com/Hackerabad"
        >
          <img src={darkMode ? githubLogoDark : githubLogoLight} />
        </a>
      </div>

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
  );
}

export default App;
