import React from "react";
import { motion } from "framer-motion";

import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaDocker } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import Portfolio1 from "../../images/portfolio-1.png";
import Portfolio2 from "../../images/portfolio-2.png";
import Portfolio3 from "../../images/portfolio-3.png";
import "./portfolio.scss";

function Portfolio() {
  const h3Variants = {
    hidden: {
      x: -1000,
      opacity: 1,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const workVariants = {
    visible: (idx) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: idx * 0.8,
      },
    }),
    hidden: { opacity: 0, y: -150 },
  };

  const works = [
    {
      title: "Dashboard for Portfolio1",
      imgUrl: Portfolio1,
    },
    {
      title: "Dashboard for Portfolio2",
      imgUrl: Portfolio2,
    },
    {
      title: "Dashboard for Portfolio3",
      imgUrl: Portfolio3,
    },
  ];

  return (
    <section className="portfolio">
      <div className="container">
        <div className="portfolio__intro">
          <motion.h1
            animate={{ scale: 1.5 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 2,
              repeatType: "reverse",
              type: "twin", //just, inertia, spring
            }}
          >
            Hello, I am Indira Djambaeva!
          </motion.h1>
          <p>
            Head of PMO, Project, Program, Portfolio Manager, Product Owner,
            Product Manager and Frontend React Developer
          </p>
        </div>
        <div className="portfolio__skills">
          <motion.h3
            variants={h3Variants}
            initial={"hidden"}
            animate={"visible"}
            transition={{
              duration: 2,
              repeat: 1,
            }}
          >
            My Skills
          </motion.h3>
          <ul>
            <motion.li
              whileHover={{
                scale: 1.2,
                backgroundColor: "#F0D15D",
              }}
            >
              <FaHtml5 className="portfolio__icon" />
              HTML
            </motion.li>
            <li>
              <FaCss3Alt className="portfolio__icon" />
              CSS
            </li>
            <li>
              <FaSass className="portfolio__icon" />
              Sass
            </li>
            <li>
              <SiJavascript className="portfolio__icon" />
              JavaScript
            </li>
            <li>
              <FaReact className="portfolio__icon" />
              React
            </li>
            <li>
              <FaDocker className="portfolio__icon" />
              Docker
            </li>
          </ul>
        </div>

        <div className="portfolio__works">
          <h3>Latest Works</h3>
          <ul>
            {works.map((work, idx) => (
              <motion.li
                variants={workVariants}
                initial={"hidden"}
                animate={"visible"}
                key={idx}
                custom={idx}
               
              >
                <img src={work.imgUrl} alt="" />
                <h4>{work.title}</h4>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      {/* 
      <div className="container">
        <Usercard />
      </div> */}
    </section>
  );
}

export default Portfolio;
