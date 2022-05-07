import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { init } from "ityped";
import Photo from "../../images/photo1.jpg";
import "./about.scss";

function About() {
  const animatedTextRef = useRef();

  useEffect(() => {
    init(animatedTextRef.current, {
      showCursor: true,
      strings: [
        "Head of PMO, Project, Program, Portfolio Manager",
        "Frontend React Developer",
      ],
      //"Founder, Product Owner, Product Manager", "Frontend React Developer"],
      backDelay: 1500,
      backSpeed: 60,
    });
  }, []);

  return (
    <section className="about">
      <div className="container about__container">
        <div className="about__left">
          <h1 className="about__title">Indira Djambaeva</h1>
          <p className="about__subtitle">
            <span ref={animatedTextRef} id="one">
              {/* Head of PMO, Project, Program, Portfolio Manager, Product
              Owner&Manager */}
            </span>{" "}
            {/* <br></br>
            <span ref={animatedTextRef} id="two">
              Frontend React Developer
            </span> */}
          </p>
          <p>
            Head of PMO, Project, Program, Portfolio Manager{" "}
            {/* Product Owner, Product Manager  */}
            and learning Frontend React Developer with experience in building
            the project management office from scratch, implementing banking
            products, construction projects, cash management, security,
            e-commerce, web development, mobile applications, etc. Experience in
            negotiating, coordinating issues with public and private
            organizations.
          </p>
          <ul className="about__links">
            <li className="about__links-item">
              <a
                href="https://fb.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="about__icon" />
              </a>
            </li>
            <li className="about__links-item">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="about__icon" />
              </a>
            </li>
            <li className="about__links-item">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="about__icon" />
              </a>
            </li>
          </ul>
          <Link to="/contact" className="about__cta">
            Let's cooperate
          </Link>
        </div>

        <div className="about__right">
          <img src={Photo} alt="Indira Djambaeva" />
        </div>
      </div>
    </section>
  );
}

export default About;
