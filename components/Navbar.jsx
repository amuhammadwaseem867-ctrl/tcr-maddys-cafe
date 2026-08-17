"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const navLinks = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Menu",
    href: "#menu",
  },
  {
    label: "Gallery",
    href: "#gallery",
  },
  {
    label: "Find Us",
    href: "#location",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className="navbar"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* LOGO */}

        <a
          href="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <span className="navbar-logo-top">
            TCR
          </span>

          <span className="navbar-logo-name">
            Maddy&apos;s
          </span>

          <span className="navbar-logo-bottom">
            CAFE
          </span>
        </a>

        {/* DESKTOP NAV */}

        <nav className="navbar-links">
          {navLinks.map((link) => (
            <a
              href={link.href}
              key={link.label}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* DESKTOP CTA */}

        <a
          href="#menu"
          className="navbar-cta"
        >
          <span>View Menu</span>
          <span className="navbar-cta-arrow">
            ↗
          </span>
        </a>

        {/* MOBILE TOGGLE */}

        <button
          className={`navbar-toggle ${
            menuOpen ? "active" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </motion.header>

      {/* MOBILE MENU */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{
              opacity: 0,
              clipPath: "inset(0 0 100% 0)",
            }}
            animate={{
              opacity: 1,
              clipPath: "inset(0 0 0% 0)",
            }}
            exit={{
              opacity: 0,
              clipPath: "inset(0 0 100% 0)",
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <nav className="mobile-nav">
              {navLinks.map((link, index) => (
                <motion.a
                  href={link.href}
                  key={link.label}
                  onClick={closeMenu}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.15 + index * 0.07,
                  }}
                >
                  <span>
                    0{index + 1}
                  </span>

                  {link.label}
                </motion.a>
              ))}
            </nav>

            <a
              href="#menu"
              className="mobile-menu-cta"
              onClick={closeMenu}
            >
              Explore Our Menu
              <span>↗</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}