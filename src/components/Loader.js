import React from "react";
import { motion } from "framer-motion";
import Image from "./Image";

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: [0.17, 0.67, 0.83, 0.67] ,
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: {opacity: 0, y: 200},
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1.6
    },
  },
}; 

const Loader = ({ setLoading }) => {
  return (
    <motion.div className="loader">
      {/* // key is for a component to load in 
      for load in go to pp.js */}
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
        className="loader-inner"
      >
        <ImageBlock variants={item} id="image-1" />
        <motion.div variants={itemMain} className="transition-image">
          <motion.img
            layoutId="main-image-1"
            src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
            style={{
              scale: '60%'
              }}
          />
        </motion.div>
        <ImageBlock variants={item} id="image-3" />
        <ImageBlock variants={item} id="image-4" />
        <ImageBlock variants={item} id="image-5" />
      </motion.div>
    </motion.div>
  );
};

export const ImageBlock = ({ id, variants }) => {
  return (
    <motion.div className={`image-block ${id}`} 
    variants={variants}>
      <Image
        src={process.env.PUBLIC_URL + `/images/${id}.webp`}
        fallback={process.env.PUBLIC_URL + `/images/${id}.jpg`}
        alt={id}
      />
    </motion.div>
  );
};

export default Loader;
