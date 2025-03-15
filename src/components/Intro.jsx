// CompanyIntro.jsx
import React from "react";
import "./intro.css";
import { motion } from "framer-motion";

const CompanyIntro = () => {
  // Animation variants for title
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  // Animation variants for subtitle and description
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  };

  return (
    <div className="company-intro-container">
      <div className="intro-overlay">
        <div className="content-wrapper">
          <motion.h1
            className="intro-title"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            Why Choose Us
          </motion.h1>

          <motion.h2
            className="intro-subtitle"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Your Trusted Partner in Innovation
          </motion.h2>

          <motion.p
            className="intro-description"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            We deliver cutting-edge solutions with unparalleled expertise,
            helping your business thrive in a competitive world. Our commitment
            to excellence ensures your success.
          </motion.p>

          <div className="video-wrapper">
            <video className="intro-video" controls playsInline>
              <source src="/intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyIntro;
