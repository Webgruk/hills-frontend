import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { motion } from "framer-motion";
import {
  CurrencyBitcoin,
  TrendingUp,
  AccountBalanceWallet,
  Security,
  RocketLaunch,
  Diamond,
} from "@mui/icons-material";
import StatSection from "./StatSection";

const Banner = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -360 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.15, 1],
      opacity: [1, 0.9, 1],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Box
      sx={{
        minHeight: "70vh",
        position: "relative",
        background: "rgba(0,0,0,0.5)",
        borderBottomWidth: "3px",
        overflow: "hidden",
        borderImage: `linear-gradient(
          to right,
          transparent 0%,
          #B8621B 25%,
            #B8621B 50%,
          #B8621B 75%,
          transparent 100%
        ) 1`,

        borderBottomStyle: "solid",
        // borderBottom: "3px solid #fbc02d",
        boxShadow: "unset 0 0 50px rgba(251, 192, 45, 0.2)",
      }}
    >
      {/* Glowing Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -40 + Math.random() * 20, 0],
            x: [0, Math.random() * 60 - 30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 1.5,
          }}
          style={{
            position: "absolute",
            top: `${10 + i * 10}%`,
            left: `${5 + i * 12}%`,
            width: 10 + i * 5,
            height: 10 + i * 5,
            // background:
            //   "radial-gradient(circle, #fbc02d, #ffca28, transparent)",
            // borderRadius: "50%",
            filter: "blur(4px)",
            zIndex: 0,
          }}
        />
      ))}

      {/* Animated Orbital Ring */}

      <Container
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        sx={{
          minHeight: "85vh",
          display: "flex",
          flexDirection: "column",
          // background: "red",
          justifyContent: "center",
          py: 6,
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Main Content */}
        <Box sx={{ textAlign: "center" }}>
          {/* Title with Luxurious Icons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 4,
            }}
          >
            <motion.div variants={iconVariants}>
              {/* <Diamond
                sx={{
                  fontSize: 80,
                  color: "#fbc02d",
                  mr: 3,
                  filter: "drop-shadow(0 0 10px #fbc02d)",
                }}
              /> */}
            </motion.div>
            <Typography
              component={motion.h1}
              variants={titleVariants}
              variant="h1"
              sx={{
                fontWeight: "bold",
                fontFamily: "Montserrat",
                fontSize: { xs: "2rem", md: "4rem" },
                // background: "orange",
                // textShadow:
                //   "0 0 20px rgba(251, 192, 45, 0.8), 0 0 40px rgba(251, 192, 45, 0.6)",
                letterSpacing: "4px",
                background: "linear-gradient(45deg, #fbc02d, #ffca28)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Hills Finance
            </Typography>
            <motion.div variants={iconVariants}>
              <RocketLaunch
                sx={{
                  fontSize: 80,
                  color: "#fbc02d",
                  ml: 3,
                  filter: "drop-shadow(0 0 10px #fbc02d)",
                }}
              />
            </motion.div>
          </Box>

          {/* Animated Subtitle with Gradient */}
          <Typography
            component={motion.p}
            variants={itemVariants}
            variant="h5"
            sx={{
              color: "#ffffff",
              textTransform: "uppercase",
              fontFamily: "Montserrat",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              mb: 6,
              fontWeight: 500,
              background: "linear-gradient(90deg,rgb(199, 194, 194), #e0e0e0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
            }}
          >
            Unlock the Future of Wealth Creation
          </Typography>

          {/* Feature Highlights with Glow */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: { xs: 3, md: 6 },
              flexWrap: "wrap",
              maxWidth: "1200px",
              mx: "auto",
              mb: 6,
            }}
          >
            {[
              { icon: TrendingUp, text: "Exponential Growth" },
              { icon: AccountBalanceWallet, text: "Quantum Wallets" },
              { icon: Security, text: "Unbreakable Security" },
              { icon: CurrencyBitcoin, text: "Crypto Mastery" },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.15, rotate: 5 }}
                sx={{
                  background: "rgba(251, 192, 45, 0.1)",
                  p: 2,
                  borderRadius: "12px",

                  boxShadow: "0 0 15px rgba(251, 192, 45, 0.3)",
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", color: "#fff" }}
                >
                  <feature.icon
                    sx={{ mr: 1.5, color: "orange", fontSize: 40 }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "silver",
                    }}
                  >
                    {feature.text}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>

          {/* Luxurious CTA Button */}
          <motion.div variants={pulseVariants} whileHover={{ scale: 1.1 }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                background: "#FFAF45",
                color: "#0a0e17",
                fontWeight: "bold",
                fontFamily: "Montserrat",
                px: 3,
                py: 1,
                borderRadius: "50px",

                border: "2px solid rgb(157, 123, 19)",
                fontSize: "1rem",
                "&:hover": {
                  background:
                    "linear-gradient(45deg,rgb(216, 163, 3), #fbc02d)",
                  boxShadow:
                    "0 0 30px rgba(251, 192, 45, 1), 0 0 60px rgba(251, 192, 45, 0.6)",
                },
              }}
            >
              let&apos;s get started
            </Button>
          </motion.div>

          <Box
            sx={{
              marginTop: "100px",
              // height: "35px",
            }}
          >
            <StatSection />
          </Box>
        </Box>

        {/* Animated Border Elements */}
        {/* <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "15px",

            background:
              "linear-gradient(to right, transparent, #fbc02d, transparent)",
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2.5 }}
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,

            height: "15px",
          }}
        /> */}
      </Container>
    </Box>
  );
};

export default Banner;
