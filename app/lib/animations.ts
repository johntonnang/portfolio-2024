export const fadeAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.3, when: "afterChildren" } },
}

export const fadeInText = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.4 } },
}

export const colorChange = {
  inactive: { color: "#000" },
  active: { scale: 1.1, color: "#fff" },
}
