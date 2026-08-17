"use client";

import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background */}
      <motion.div
        className="hero-image"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      <div className="hero-dark" />
      <div className="hero-vignette" />

      {/* Top Label */}
      <motion.div
        className="hero-top-label"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span>EST. 2020</span>
        <span className="top-dot" />
        <span>COFFEE · FOOD · MOMENTS</span>
      </motion.div>

      {/* Main Content */}
      <div className="hero-content">
        <motion.div
          className="hero-kicker"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
        >
          <span />
          WELCOME TO MADDY&apos;S
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.55,
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Your everyday
          <br />
          <i>escape.</i>
        </motion.h1>

        <motion.p
          className="hero-text"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.8,
          }}
        >
          Slow mornings, good coffee and food made
          <br />
          with something a little extra.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.95,
            duration: 0.8,
          }}
        >
          <a href="#menu" className="hero-primary">
            <span>Explore Menu</span>
            <span className="button-arrow">↗</span>
          </a>

          <a href="#about" className="hero-secondary">
            Our Story
          </a>
        </motion.div>
      </div>

      {/* Floating Menu Card */}
      <motion.a
        href="#menu"
        className="hero-menu-card"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.15,
          duration: 0.8,
        }}
        whileHover={{ y: -6 }}
      >
        <div className="menu-card-image" />

        <div className="menu-card-content">
          <span className="menu-card-label">
            TODAY&apos;S SPECIAL
          </span>

          <h3>Freshly brewed.</h3>

          <div className="menu-card-bottom">
            <span>Discover the menu</span>
            <span>↗</span>
          </div>
        </div>
      </motion.a>

      {/* Vertical Side Text */}
      <div className="hero-side-label">
        <span>CRAFTED FOR YOUR MOMENTS</span>
      </div>

      {/* Bottom */}
      <motion.div
        className="hero-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        <div className="hero-place">
          <span>FIND US</span>
          <strong>RAWALPINDI, PAKISTAN</strong>
        </div>

        <div className="hero-scroll">
          <span>SCROLL</span>
          <div className="scroll-track">
            <div />
          </div>
        </div>

        <div className="hero-hours">
          <span>OPEN TODAY</span>
          <strong>08:00 AM — 11:00 PM</strong>
        </div>
      </motion.div>
    </section>
  );
}