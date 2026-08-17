"use client";

import { motion } from "framer-motion";
import "./Features.css";

const features = [
  {
    number: "01",
    title: "Specialty Coffee",
    text: "Freshly brewed coffee made with carefully selected beans and attention to every cup.",
  },
  {
    number: "02",
    title: "Freshly Made",
    text: "Comforting food and café favourites prepared fresh, with quality ingredients.",
  },
  {
    number: "03",
    title: "Good Atmosphere",
    text: "A relaxed space to meet friends, get some work done, or simply slow down.",
  },
];

export default function Features() {
  return (
    <section className="features" id="experience">
      <div className="features-header">
        <motion.div
          className="features-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span>02 — THE EXPERIENCE</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          Everything tastes
          <br />
          better <em>here.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          From the first sip to the last bite, every detail
          <br />
          is designed to make your visit worth remembering.
        </motion.p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <motion.article
            className="feature-card"
            key={feature.number}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: index * 0.12,
            }}
          >
            <div className="feature-top">
              <span className="feature-number">
                {feature.number}
              </span>

              <span className="feature-symbol">
                +
              </span>
            </div>

            <div className="feature-icon">
              {index === 0 && "☕"}
              {index === 1 && "✦"}
              {index === 2 && "◌"}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.text}</p>

            <div className="feature-line" />
          </motion.article>
        ))}
      </div>
    </section>
  );
}