export const pageHeaderVariants = {
  initial: {
    x: "100vw",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      mass: 0.4, //moves faster higher and viceversa,
      damping: 8,
      when: "beforeChildren", // yesko meaning chai parent container ko purai transition vayepachhi matra child ko transition dekhaune
      staggerChildren: 2, // kati kati minute ma dekhaune vanyera ho afno children lai
    },
  },
};

export const sliderVariants: any = {
  initial: {
    y: "100vh",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      mass: 0.4, // moves faster with higher values and vice versa
      damping: 8,
      staggerChildren: 0.8, // delay between children animations
    },
  },
};

export const childVariants: any = {
  initial: {
    y: "40vh",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
    },
  },
};

export const left_animation = (isMobile: any) => ({
  initial: {
    x: isMobile ? 0 : -70,
    opacity: 0,
  },
  whileInView: {
    x: 0,
    opacity: 1,
    transition: { delay: 0, duration: 0.5 },
  },
});

export const right_animation = (isMobile: any) => ({
  initial: {
    x: isMobile ? 0 : 70,
  },
  whileInView: {
    x: 0,
    transition: { delay: 0, duration: 0.5 },
  },
});

export const top_animation: any = {
  initial: {
    y: 80,
  },
  whileInView: {
    y: 0,
    transition: {
      delay: 0,
      duration: 0.5,
      type: "spring",
      stiffness: "300",
    },
  },
};

export const component_header_animation: any = {
  initial: {
    y: 70,
    opacity: 0,
  },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0,
      duration: 0.5,
      type: "spring",
      stiffness: 200,
    },
  },
};

export const parent_stagger_animation: any = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      mass: 0.4,
      damping: 1,
      staggerChildren: 0.2,
    },
  },
};

export const service_card_animation: any = {
  initial: {
    y: 80,
  },
  whileInView: {
    y: 0,
  },
};

export const intro_photo_animation: any = {
  initial: {
    y: 80,
  },
  whileInView: {
    y: 0,
    transition: {
      delay: 0.1,
      duration: 0.8,
      type: "spring",
      stiffness: 300,
    },
  },
};

export const text_animation: any = {
  whileHover: {
    scale: 1.1,
    originX: 0,
    transition: {
      delay: 0.1,
      duration: 0.8,
      type: "spring",
      stiffness: 300,
    },
  },
};
