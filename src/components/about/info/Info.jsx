import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

import "./info.scss";

const textVariants = {
  initial: {
      x: 800,
      opacity: 0
  },
  animate: {
      x: 0,
      opacity: 1,
      transition: {
          duration: 1,
      }
  },
};

const titleVariants = {
  initial: {
      x: -500,
      opacity: 0
  },
  animate: {
      x: 0,
      opacity: 1,
      transition: {
          duration: 1,
      }
  },
};

export default function Info() {

  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("animate");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="containerInfo">
      <motion.div 
        className="title"
        variants={titleVariants} 
        initial="initial"
        animate={mainControls}
      >
        <h1><span className="about">About</span>me <span>:</span></h1>
      </motion.div>
      <motion.div className="info"
        variants={textVariants} 
        initial="initial"
        animate={mainControls}
      >
        <p>
        Hi there! I'm Vidushi Arora, a passionate software developer dedicated to solving problems and optimizing performance through data structures and algorithms in Java.
        </p>
        <p>
        In my portfolio, you’ll find a showcase of projects where I apply code and front-end skills like HTML and CSS. I thrive in problem-solving environments.
        </p>
        <p>
        Outside of coding, I enjoy exploring the intersection of technology and art, discovering new art styles, and creating new art <a target="_blank" href="https://www.instagram.com/weebly._art/">works</a>. 
        </p>
        <p>
        I'm also passionate about open-source projects, Let's connect and create something amazing together!
        </p>
      </motion.div>
    </div>
  )
}
