export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,

      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
    },
    show : {
        y:
    }
  };
};
