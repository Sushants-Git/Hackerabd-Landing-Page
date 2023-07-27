import React from 'react'
import "./css/Socials.css"
import {
    discordLogoLight,
    twitterLogoLight,
    githubLogoLight,
    discordLogoDark,
    twitterLogoDark,
    githubLogoDark,
  } from "../assets"

function Socials(props) {
  return (
    <div className="socials">
      <a
        className="cta-twitter"
        target="_blank"
        href="https://twitter.com/hackerabad"
      >
        <img src={props.darkMode ? twitterLogoDark : twitterLogoLight} />
      </a>
      <a
        className="cta-discord"
        target="_blank"
        href="https://discord.gg/P5E4u4BGae"
      >
        <img src={props.darkMode ? discordLogoDark : discordLogoLight} />
      </a>
      <a
        className="cta-github"
        target="_blank"
        href="https://github.com/Hackerabad"
      >
        <img src={props.darkMode ? githubLogoDark : githubLogoLight} />
      </a>
    </div>
  )
}

export default Socials