export const slideUp = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
export const slideUpTitle = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
};
export const slideUpContent = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};
export const slideDown = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
};

export const slideRight = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export const slideLeft = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.25,
    },
  },
};
export const slideLeftForm = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
    },
  },
};
export const slideLeftBurger = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export const slideLeftContainer = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};
export const slideLeftContainerForm = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export const burgerMenuAnim = {
  hidden: {
    opacity: 1,
    x: "150%",
    y: "-150%",
    scale: 0,
  },
  show: {
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    opacity: 1,
    x: "200%",
    y: "-200%",
    scale: 0,
    transition: {
      duration: 0.75,
    },
  },
};

export const slideUpContainer = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

export const scrollRevealForm = {
  hidden: {
    opacity: 0,
    scale: 1.2,
    transition: { duration: 0.5 },
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};
export const scrollRevealImage = {
  hidden: {
    opacity: 0,
    x: "50%",
    transition: { duration: 0.5 },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};
export const scrollRevealAbout = {
  hidden: {
    opacity: 0,
    scale: 1.2,
    transition: { duration: 0.5 },
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export const redSlide = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    x: "-100%",
    transition: {
      duration: 0.75,
    },
  },
};

export const blueSlide = {
  hidden: {
    x: "-100%",
  },
  show: {
    x: "0%",
    transition: { duration: 0.75 },
  },
};
export const purpleSlide = {
  hidden: {
    y: "-100%",
  },
  show: {
    y: "0%",
    transition: { duration: 0.75 },
  },
};

export const imageAnim = {
  hidden: {
    scale: 1.3,
    opacity: 0,
    rotate: 10,
  },
  show: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: { duration: 0.4 },
  },
};
