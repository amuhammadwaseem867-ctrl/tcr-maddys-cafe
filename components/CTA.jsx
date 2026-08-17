"use client";

import { motion } from "framer-motion";
import "./CTA.css";

export default function CTA() {
  return (
    <section className="cta">
      <div className="cta-image" />

      <div className="cta-overlay" />

      <div className="cta-content">
        <motion.span
          className="cta-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ONE MORE CUP?
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          Make today
          <br />
          <em>a little better.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Good coffee, good food, good company.
          <br />
          We&apos;ll save you a seat.
        </motion.p>

        <motion.div
          className="cta-actions"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <a href="#menu" className="cta-primary">
            <span>Explore Menu</span>
            <span>↗</span>
          </a>

          <a href="#location" className="cta-secondary">
            Find Us
          </a>
        </motion.div>
      </div>

      <div className="cta-bottom">
        <span>TCR MADDY&apos;S CAFE</span>
        <span>COME AS YOU ARE</span>
      </div>
    </section>
  );
}