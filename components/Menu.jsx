"use client";

import { motion } from "framer-motion";
import "./Menu.css";

const menuSections = [
  {
    category: "HOT CUPS",
    items: [
      {
        name: "Chai",
        price: "100/-",
      },
      {
        name: "Matka Chai",
        price: "150/-",
      },
      {
        name: "Coffee",
        price: "200/-",
      },
      {
        name: "Espresso",
        price: "150/-",
      },
      {
        name: "Mocha",
        price: "150/-",
      },
      {
        name: "Dalgona",
        price: "300/-",
      },
      {
        name: "Kashmiri",
        note: "Winter Only",
        price: "150/-",
      },
    ],
  },

  {
    category: "BURGERS",
    items: [
      {
        name: "Chicken Patty Burger",
        price: "250/-",
      },
      {
        name: "Chicken Cheese Patty Burger",
        price: "300/-",
      },
      {
        name: "Double Patty Cheese Burger",
        price: "450/-",
      },
      {
        name: "Zinger Burger",
        price: "350/-",
      },
      {
        name: "Zinger Cheese Burger",
        price: "400/-",
      },
      {
        name: "Jumbo Zinger",
        price: "450/-",
      },
      {
        name: "Crusted Chicken Burgers",
        description:
          "Shawarma's chicken & fries with special sauce",
        price: "250/-",
      },
      {
        name: "Double Decker",
        description: "2 Zinger PCs with Cheese",
        price: "550/-",
      },
      {
        name: "Terra Bite",
        description: "3 Zinger with 2 cheese slices",
        price: "700/-",
      },
      {
        name: "Combo Burger",
        description: "Zinger and Patty PCs with Cheese",
        price: "450/-",
      },
    ],
  },

  {
    category: "APPETIZERS",
    items: [
      {
        name: "Nuggets 6 Pcs",
        price: "200/-",
      },
      {
        name: "Nuggets 12 Pcs",
        price: "350/-",
      },
      {
        name: "Wings 6 Pcs",
        price: "380/-",
      },
      {
        name: "Wings 10 Pcs",
        price: "580/-",
      },
      {
        name: "Fried Chicken Pcs",
        price: "200/-",
      },
    ],
  },

  {
    category: "FRIED FOOD",
    items: [
      {
        name: "Reg French Fries",
        description: "Served with 2 Tomato Dips",
        price: "150/-",
      },
      {
        name: "Large French Fries",
        description: "Served with 2 Tomato Dips",
        price: "200/-",
      },
      {
        name: "Mayo Fries",
        description: "Served with 2 Tomato Dips & Mayo",
        price: "280/-",
      },
      {
        name: "Animal Fries",
        description:
          "Served with 2 Tomato Dips & Special Sauce",
        price: "300/-",
      },
      {
        name: "BBQ Fries",
        description:
          "Served with BBQ Sauce & Tomato Dips",
        price: "250/-",
      },
      {
        name: "Desi Masala Fries",
        description:
          "Served with Ketchup Bowl & Special Spice",
        price: "200/-",
      },
    ],
  },
];

export default function Menu() {
  return (
    <section className="menu" id="menu">
      <div className="menu-header">
        <motion.div
          className="menu-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          03 — THE MADDY&apos;S MENU
        </motion.div>

        <div className="menu-heading-row">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Pick your
            <br />
            <em>favourite.</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
          >
            From hot cups to loaded burgers,
            <br />
            there&apos;s something for every mood.
          </motion.p>
        </div>
      </div>

      <div className="menu-content">
        {menuSections.map((section, sectionIndex) => (
          <motion.div
            className="menu-section"
            key={section.category}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: 0.7,
              delay: sectionIndex * 0.08,
            }}
          >
            <div className="menu-category">
              <span>{section.category}</span>
              <div />
            </div>

            <div className="menu-items">
              {section.items.map((item, index) => (
                <motion.div
                  className="menu-item"
                  key={item.name}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="menu-item-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="menu-item-info">
                    <h3>
                      {item.name}

                      {item.note && (
                        <span className="menu-note">
                          {item.note}
                        </span>
                      )}
                    </h3>

                    {item.description && (
                      <p>{item.description}</p>
                    )}
                  </div>

                  <div className="menu-item-price">
                    {item.price}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="menu-bottom">
        <span>PRICES IN PKR</span>

        <div className="menu-bottom-line" />

        <span>SERVICE CHARGES 3%</span>
      </div>
    </section>
  );
}