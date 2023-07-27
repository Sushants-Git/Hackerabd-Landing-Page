import { createContext, useEffect, useState } from "react";
import "./css/Home.css";

import Socials from "./Socials";
import Content from "./Content";
import ThemeSwitcher from "./ThemeSwitcher";

const Context = createContext();

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

  function onToggle() {
    setX((prev) => (prev === 0 ? 20 : 0));
    setDarkMode((prevVal) => !prevVal);
  }

  return (
    <Context.Provider value={{ darkMode, hasBlink }}>
      <main className={"main " + (darkMode ? "main-dark" : "main-light")}>
        <Content/>
        <Socials/>
        <ThemeSwitcher darkMode={darkMode} onToggle={onToggle} x={x} />
      </main>
    </Context.Provider>
  );
}

export { Context };

export default Home;
