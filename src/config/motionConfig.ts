import { Variants } from "framer-motion";

// Config for SkeletonOne
export const skeletonOneVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: 10,
    rotate: 5,
    transition: {
      duration: 0.2,
    },
  },
};

export const skeletonOneVariantsSecond = {
  initial: {
    x: 0,
  },
  animate: {
    x: -10,
    rotate: -5,
    transition: {
      duration: 0.2,
    },
  },
};

// Config for SkeletonTwo
export const skeletonTwoVariants: Variants = {
  initial: {
    width: 0,
  },
  animate: {
    width: "100%",
    transition: {
      duration: 0.2,
    },
  },
  hover: {
    width: ["0%", "100%"],
    transition: {
      duration: 2,
    },
  },
};

// Config for SkeletonThree
export const skeletonThreeVariants: Variants = {
  initial: {
    backgroundPosition: "0 50%",
  },
  animate: {
    backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
  },
};

// Config for SkeletonFour
export const skeletonFourFirstVariants = {
  initial: {
    x: 20,
    rotate: -5,
  },
  hover: {
    x: 0,
    rotate: 0,
  },
};

export const skeletonFourMiddleVariants = {
  initial: {
    x: 0,
    rotate: 0,
  },
  hover: {
    x: 0,
    rotate: 0,
  },
};

export const skeletonFourSecondVariants = {
  initial: {
    x: -20,
    rotate: 5,
  },
  
  hover: {
    x: 0,
    rotate: 0,
  },
};

// Config for SkeletonFive
export const skeletonFiveVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: 10,
    rotate: 5,
    transition: {
      duration: 0.2,
    },
  },
};

export const skeletonFiveVariantsSecond = {
  initial: {
    x: 0,
  },
  animate: {
    x: -10,
    rotate: -5,
    transition: {
      duration: 0.2,
    },
  },
};