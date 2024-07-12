import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import ProVeterinarianImg from "/Pro-veterinarian.jpg";
import Parking from "/Parking Automation System.png";

import "./portfolio.scss";

import Single from "./single/Single";

const items = [
    {
        id: 1,
        title:"Pro Veterinarian",
        img: ProVeterinarianImg,
        desc: "This web application serves as a demonstration of front-end styling techniques using HTML and Bootstrap framework. It offers a curated collection of styled components, layouts, and responsive design patterns.",
        codeLink: "https://github.com/VidushiAr1/Pro-Veterinarian",
        projectLink: "https://vidushiar1.github.io/Pro-Veterinarian/",
        techUsed: ["html", "css" ,"bootstrap"],
    },
    {
        id: 2,
        title: "Parking Automation System",
        img: Parking,
        codeLink: 'https://github.com/VidushiAr1/project_Parking_Automation_System',
        projectLink: '',
        techUsed: ["python"]
    }

];


export default function Portfolio() {

    const ref = useRef();

    const { scrollYProgress } = useScroll({target: ref, offset:["end end", "start start"]});

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

  return (
      <div className="portfolio" ref={ref}>
          <div className="progress">
              <h1>Projects</h1>
              <motion.div style={{scaleX}} className="progressBar"></motion.div>
          </div>
          {items.map((item) => (
              <Single item={item} key={item.id} />
          ))}
      </div>
  )
};
