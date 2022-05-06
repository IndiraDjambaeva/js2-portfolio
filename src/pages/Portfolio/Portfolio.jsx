import React from "react";
import Usercard from "../../components/Usercard/Usercard";
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaDocker } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import Portfolio1 from "../../images/portfolio-1.png";
import Portfolio2 from "../../images/portfolio-2.png";
import Portfolio3 from "../../images/portfolio-3.png";
import "./portfolio.scss";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="container">
        <div className="portfolio__intro">
          <h1>Hello, I am Indira Djambaeva</h1>
          <p>
            Head of PMO, Project, Program, Portfolio Manager, Product Owner,
            Product Manager and Frontend React Developer
          </p>
        </div>
        <div className="portfolio__skills">
          <h3>My Skills</h3>
          <ul>
            <li>
              <FaHtml5 className="portfolio__icon" />HTML
            </li>
            <li>
              <FaCss3Alt className="portfolio__icon" />CSS
            </li>
            <li>
              <FaSass className="portfolio__icon" />Sass
            </li>
            <li>
              <SiJavascript className="portfolio__icon" />JavaScript
            </li>
            <li>
              <FaReact className="portfolio__icon" />React
            </li>
            <li>
              <FaDocker className="portfolio__icon" />Docker
            </li>
            
          </ul>
        </div>

        <div className="portfolio__works">
          <h3>Latest Works</h3>
          <ul>
            <li>
              <img src={Portfolio1} alt="" />
              <h4>Dashboard for Portfolio1</h4>
            </li>
            <li>
              <img src={Portfolio2} alt="" />
              <h4>Dashboard for Portfolio2</h4>
            </li>
            <li>
              <img src={Portfolio3} alt="" />
              <h4>Dashboard for Portfolio3</h4>
            </li>
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
