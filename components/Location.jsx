"use client";

import { motion } from "framer-motion";
import "./Location.css";

export default function Location() {
  return (
    <section className="location" id="location">
      <div className="location-header">
        <span>05 — FIND US</span>
      </div>

      <div className="location-grid">
        {/* Information */}
        <motion.div
          className="location-content"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <p className="location-label">
            COME SAY HELLO
          </p>

          <h2>
            Your table
            <br />
            <em>is waiting.</em>
          </h2>

          <p className="location-description">
            Find us, pull up a chair, and stay as long
            as you like. We&apos;d love to have you.
          </p>

          <div className="location-details">
            <div className="location-detail">
              <span>ADDRESS</span>
              <p>
                TCR Maddy&apos;s Cafe
                <br />
                Rawalpindi, Pakistan
              </p>
            </div>

            <div className="location-detail">
              <span>OPENING HOURS</span>
              <p>
                Monday — Sunday
                <br />
                08:00 AM — 11:00 PM
              </p>
            </div>

            <div className="location-detail">
              <span>CONTACT</span>
              <p>
                +92 000 0000000
                <br />
                hello@maddyscafe.com
              </p>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=TCR+Maddy's+Cafe+Rawalpindi"
            target="_blank"
            rel="noopener noreferrer"
            className="location-button"
          >
            <span>Get Directions</span>
            <span>↗</span>
          </a>
        </motion.div>

        {/* Map */}
        <motion.div
          className="location-map"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <div className="map-pattern">
            <span className="road road-one" />
            <span className="road road-two" />
            <span className="road road-three" />
            <span className="road road-four" />

            <span className="map-block block-one" />
            <span className="map-block block-two" />
            <span className="map-block block-three" />
            <span className="map-block block-four" />

            <div className="map-pin">
              <div className="pin-dot" />
              <span>MADDY&apos;S</span>
            </div>
          </div>

          <div className="map-label">
            <span>RAWALPINDI</span>
            <span>PAKISTAN</span>
          </div>

          <div className="map-coordinates">
            <span>33°33&apos;N</span>
            <span>73°07&apos;E</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}