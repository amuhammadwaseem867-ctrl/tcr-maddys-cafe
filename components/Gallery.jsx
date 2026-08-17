"use client";

import { motion } from "framer-motion";
import "./Gallery.css";

const images = [
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85",
    title: "The Morning Ritual",
    className: "gallery-large",
  },
  {
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=85",
    title: "Made With Care",
    className: "gallery-small",
  },
  {
    src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=85",
    title: "Good Things",
    className: "gallery-small",
  },
  {
    src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=85",
    title: "Stay A While",
    className: "gallery-wide",
  },
];

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery-header">
        <motion.div
          className="gallery-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          04 — INSIDE MADDY&apos;S
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          Come for the coffee.
          <br />
          <em>Stay for the feeling.</em>
        </motion.h2>
      </div>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <motion.figure
            className={`gallery-item ${image.className}`}
            key={image.src}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
            }}
          >
            <div
              className="gallery-image"
              style={{
                backgroundImage: `url("${image.src}")`,
              }}
            />

            <figcaption>
              <span>{image.title}</span>
              <span>0{index + 1}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <motion.div
        className="gallery-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <span>TAKE A SEAT</span>
        <div className="gallery-line" />
        <span>MAKE YOURSELF AT HOME</span>
      </motion.div>
    </section>
  );
}