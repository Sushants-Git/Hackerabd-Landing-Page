import { motion } from "framer-motion";
export default function JoinUsButton({darkMode}) {
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
  </motion.a>;
}
