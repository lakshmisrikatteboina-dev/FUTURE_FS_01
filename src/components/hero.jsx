import "../styles/hero.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import heroImg from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero">

      {/* Left Side */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="greeting">Hello 👋, I'm</p>

        <h1>Lakshmi Sri</h1>

        <TypeAnimation
          sequence={[
            "Computer Science Student",
            2000,
            "Full-Stack Development Learner",
            2000,
            "AI Enthusiast",
            2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
        />

        <p className="description">
          Passionate about building modern web applications using React, Java,
          Python, and Artificial Intelligence. Continuously learning and
          improving my skills in full-stack development.
        </p>

        <div className="hero-buttons">
   <a
  href="/Lakshmi sri_Full stack intern resume.pdf"
  target="_blank"
  rel="noreferrer"
  className="primary-btn"
>
  View Resume
</a>

          <button
  className="secondary-btn"
  onClick={() => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
    });
  }}
>
  Contact Me
</button>
        </div>

       <div className="social-icons">
  <a
    href="https://github.com/2410030279-dotcom"
    target="_blank"
    rel="noreferrer"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/lakshmi-sri-katteboina-89ba363b2/"
    target="_blank"
    rel="noreferrer"
  >
    <FaLinkedin />
  </a>

  <a href="mailto:lakshmisrikatteboina@gmail.com">
    <FaEnvelope />
  </a>
</div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
       <img
  src={heroImg}
  alt="Lakshmi Sri - Computer Science Student and Software Development Portfolio"
/>
      </motion.div>

    </section>
  );
}

export default Hero;