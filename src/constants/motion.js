export const fadeIn = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay * 0.3,
      },
    },
  };
};

export const hoverZoom = { 
  scale: 1.1, 
  transition: { 
    type: 'spring', 
    duration: 0.3, 
    delay: 0 
  } 
}

export const textFadeIn = () => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
      },
    },
  };
}