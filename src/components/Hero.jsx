import React from "react"
import { motion } from "framer-motion"

const Hero = () => (
  <section className="hero">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <p className="hero-greeting">Hi, I'm</p>
      <h1 className="hero-name">Moe Kyaw Aung</h1>
      <h2 className="hero-title">
        Senior Full-Stack &amp; Android Developer
      </h2>
      <p className="hero-location">
        Tachileik, Myanmar 🇲🇲 &nbsp;↔&nbsp; Bangkok, Thailand 🇹🇭
      </p>
      <div className="hero-actions">
        <a href="#projects" className="btn-primary">View Projects</a>
        <a href="/resume.pdf" className="btn-secondary" download>
          Download Resume
        </a>
      </div>
    </motion.div>
  </section>
)

export default Hero
