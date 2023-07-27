import { motion } from "framer-motion";
import "./css/Content.css";
import JoinUsButton from "./JoinUsButton";
import { Context } from "./Home";
import { useContext } from "react";

function Content() {
  const { hasBlink, darkMode } = useContext(Context);
  let theme = darkMode ? "dark" : "light";
  return (
    <div className="content-wrapper">
      <h1>
        <span
          id="quote-first"
          className={"quote-first " + (hasBlink ? "blink" : "")}
        ></span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={"name-" + theme}
        >
          Hackerabad
        </motion.span>
        <span
          id="quote-second"
          className={"quote-second " + (hasBlink ? "blink" : "")}
        ></span>
      </h1>
      <p className={"main-p main-p-" + theme}>
        <strong className={"strong-" + theme}>Hackerabad</strong> is an{" "}
        <strong className={"strong-" + theme}>inclusive</strong> and{" "}
        <strong className={"strong-" + theme}>open source</strong> community
        embracing diversity and empowering beginners
      </p>
      <JoinUsButton darkMode={darkMode} />
    </div>
  );
}

export default Content;
