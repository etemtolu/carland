export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,

      s: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
    },
  };
};
