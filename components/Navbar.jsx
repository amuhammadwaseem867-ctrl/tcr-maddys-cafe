"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="maddy-navbar">
        {/* Logo */}
        <Link
          href="#top"
          className="maddy-logo"
          onClick={closeMenu}
        >
          <span className="maddy-logo-small">TCR</span>

          <span className="maddy-logo-name">
            Maddy's
          </span>

          <span className="maddy-logo-sub">
            CAFE & RESTAURANT
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="maddy-desktop-nav">
          <Link href="#about">About</Link>
          <Link href="#menu">Menu</Link>
          <Link href="#gallery">Gallery</Link>
          <Link href="#location">Find Us</Link>
        </nav>

        {/* Desktop CTA */}
        <Link
          href="#menu"
          className="maddy-desktop-cta"
        >
          <span>View Menu</span>
          <span className="maddy-cta-arrow">↗</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`maddy-menu-button ${
            menuOpen ? "is-open" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen ? "Close navigation" : "Open navigation"
          }
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="maddy-mobile-menu"
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <nav className="maddy-mobile-nav">
              <Link
                href="#about"
                onClick={closeMenu}
              >
                <span>01</span>
                About
              </Link>

              <Link
                href="#menu"
                onClick={closeMenu}
              >
                <span>02</span>
                Menu
              </Link>

              <Link
                href="#gallery"
                onClick={closeMenu}
              >
                <span>03</span>
                Gallery
              </Link>

              <Link
                href="#location"
                onClick={closeMenu}
              >
                <span>04</span>
                Find Us
              </Link>
            </nav>

            <Link
              href="#menu"
              className="maddy-mobile-cta"
              onClick={closeMenu}
            >
              <span>View Menu</span>
              <span>↗</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}