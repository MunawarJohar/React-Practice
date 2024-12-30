// App.jsx
import React from "react";
import { motion } from "framer-motion";
import profileImage from './assets/profile.jpg';
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <motion.div 
          className="header-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1, color: "#f39c12" }}
          >
            Welcome to My Stunning Website
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            whileHover={{ scale: 1.05, color: "#8e44ad" }}
          >
            Experience the seamless fusion of React and Framer Motion.
          </motion.p>
        </motion.div>
      </header>

      <main>
        <section className="about">
          <motion.h2
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
            whileHover={{ scale: 1.2, color: "#16a085" }}
          >
            About Us
          </motion.h2>
          <p>
            We specialize in creating immersive and visually striking digital experiences using the latest technologies.
          </p>
          <motion.img
            src={profileImage}
            alt="Profile"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            whileHover={{ scale: 1.1, rotate: 10 }}
          />
        </section>

        <section className="services">
          <motion.h2
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ color: "#c0392b", scale: 1.1 }}
          >
            Our Services
          </motion.h2>
          <ul>
            <motion.li whileHover={{ scale: 1.1, color: "#3498db" }}>Web Development</motion.li>
            <motion.li whileHover={{ scale: 1.1, color: "#e74c3c" }}>UI/UX Design</motion.li>
            <motion.li whileHover={{ scale: 1.1, color: "#2ecc71" }}>SEO Optimization</motion.li>
          </ul>
        </section>

        <section className="contact">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.2, color: "#9b59b6" }}
          >
            Contact Us
          </motion.h2>
          <form>
            <motion.input
              type="text"
              placeholder="Your Name"
              whileFocus={{ scale: 1.1, borderColor: "#2980b9" }}
            />
            <motion.input
              type="email"
              placeholder="Your Email"
              whileFocus={{ scale: 1.1, borderColor: "#d35400" }}
            />
            <motion.textarea
              placeholder="Your Message"
              whileFocus={{ scale: 1.1, borderColor: "#27ae60" }}
            ></motion.textarea>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.1, backgroundColor: "#34495e" }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05, color: "#e67e22" }}
        >
          © 2024 My Stunning Website. All rights reserved.
        </motion.p>
      </footer>
    </div>
  );
};

export default App;
