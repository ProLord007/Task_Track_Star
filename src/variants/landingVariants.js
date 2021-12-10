export const imageVariant = {
  visible: { opacity: 1, transition: { delay: 2 } },
  hidden: {
    opacity: 0,
  },
};
export const containerVariant = {
  visible: {
    opacity: 1,
    transition: {
      delay: 2.2,
      when: "beforeChildren",
      staggerChildren: 0.02,
    },
  },
  hidden: { opacity: 0 },
};
export const buttonVariant = {
  visible: { opacity: 1 },
  hidden: {
    opacity: 0,
  },
};

export const revealVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const lineRevealVariant = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { delay: 0, staggerChildren: 0.04, when: "beforeChildren" },
  },
};
