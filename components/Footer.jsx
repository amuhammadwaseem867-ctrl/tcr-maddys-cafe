"use client";

import { motion } from "framer-motion";
import "./Footer.css";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        {/* Brand */}
        <motion.div
          className="footer-brand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="footer-kicker">
            TCR
          </p>

          <h2>
            Maddy&apos;s
            <br />
            <em>Cafe</em>
          </h2>

          <p className="footer-tagline">
            Good coffee. Good food.
            <br />
            Good moments.
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          className="footer-column"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <span className="footer-title">
            EXPLORE
          </span>

          <nav>
            {links.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </nav>
        </motion.div>

        {/* Contact */}
        <motion.div
          className="footer-column"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className="footer-title">
            VISIT
          </span>

          <p>
            TCR Maddy&apos;s Cafe
            <br />
            Rawalpindi, Pakistan
          </p>

          <a href="tel:+920000000000">
            +92 000 0000000
          </a>

          <a href="mailto:hello@maddyscafe.com">
            hello@maddyscafe.com
          </a>
        </motion.div>

        {/* Social */}
        <motion.div
          className="footer-column"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <span className="footer-title">
            FOLLOW ALONG
          </span>

          <div className="footer-socials">
            <a href="#" aria-label="Instagram">
              Instagram ↗
            </a>

            <a href="#" aria-label="Facebook">
              Facebook ↗
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} TCR Maddy&apos;s Cafe
        </span>

        <span>
          MADE WITH CARE
        </span>

        <a href="#">
          BACK TO TOP ↑
        </a>
      </div>
    </footer>
  );
}