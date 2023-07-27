import { motion } from "framer-motion";
export default function ThemeSwitcher({ darkMode, onToggle, x }) {
  return (
    <div
      onClick={onToggle}
      className={"darkMode-" + (darkMode ? "dark" : "light")}
    >
      <motion.div
        animate={{ x }}
        transition={{ type: "spring" }}
        className={"circle-" + (darkMode ? "dark" : "light")}
      ></motion.div>
    </div>
  );
}
