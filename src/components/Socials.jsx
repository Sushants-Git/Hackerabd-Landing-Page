import "./css/Socials.css";
import { Context } from "./Home";
import { useContext } from "react";
import {
  discordLogoLight,
  twitterLogoLight,
  githubLogoLight,
  discordLogoDark,
  twitterLogoDark,
  githubLogoDark,
} from "../assets/svg/index.js";

function Socials() {
  const { darkMode } = useContext(Context);
  return (
    <div className="socials">
      <a
        className="cta-twitter"
        target="_blank"
        href="https://twitter.com/hackerabad"
        rel="noreferrer"
      >
        <img
          alt="twitter Logo"
          src={darkMode ? twitterLogoDark : twitterLogoLight}
        />
      </a>
      <a
        className="cta-discord"
        target="_blank"
        href="https://discord.gg/P5E4u4BGae"
        rel="noreferrer"
      >
        <img
          alt="discord logo"
          src={darkMode ? discordLogoDark : discordLogoLight}
        />
      </a>
      <a
        className="cta-github"
        target="_blank"
        href="https://github.com/Hackerabad"
        rel="noreferrer"
      >
        <img alt="git hub" src={darkMode ? githubLogoDark : githubLogoLight} />
      </a>
    </div>
  );
}

export default Socials;
