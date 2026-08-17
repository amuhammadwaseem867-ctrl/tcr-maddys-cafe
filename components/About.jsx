"use client";

import { motion } from "framer-motion";
import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-top">
        <span>01 — OUR STORY</span>
        <span>MORE THAN JUST COFFEE</span>
      </div>

      <div className="about-grid">
        {/* Image */}
        <motion.div
          className="about-image-wrap"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9 }}
        >
          <div className="about-image" />

          <div className="about-image-caption">
            <span>THE MADDY&apos;S EXPERIENCE</span>
            <span>EST. 2020</span>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
          }}
        >
          <p className="about-label">
            A PLACE TO SLOW DOWN
          </p>

          <h2>
            Made for
            <br />
            <em>good moments.</em>
          </h2>

          <div className="about-line" />

          <p className="about-description">
            At TCR Maddy&apos;s Cafe, we believe the best
            moments are the simple ones — a perfectly
            brewed cup of coffee, something delicious on
            the table, and good company around it.
          </p>

          <p className="about-description">
            Whether you&apos;re starting your morning, meeting
            a friend, or simply taking a little time for
            yourself, Maddy&apos;s is a place to feel at home.
          </p>

          <a href="#menu" className="about-link">
            <span>Discover Maddy&apos;s</span>
            <span>↗</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom Details */}
      <div className="about-details">
        <div>
          <strong>01</strong>
          <span>QUALITY</span>
          <p>Thoughtfully sourced ingredients.</p>
        </div>

        <div>
          <strong>02</strong>
          <span>CRAFT</span>
          <p>Made fresh, served with care.</p>
        </div>

        <div>
          <strong>03</strong>
          <span>COMMUNITY</span>
          <p>A space made for everyone.</p>
        </div>
      </div>
    </section>
  );
}