import React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const WhatWeDo = () => {
  const theme = useTheme();

  const services = [
    {
      icon: "💼",
      title: "Investment Strategy",
      description:
        "Developing tailored strategies to maximize returns and manage investments effectively.",
    },
    {
      icon: "📊",
      title: "Portfolio & Resource Allocation",
      description:
        "Optimizing portfolio composition and resource distribution for best outcomes.",
    },
    {
      icon: "🏢",
      title: "Organisation & Decision Process",
      description:
        "Streamlining organizational structure and decision-making workflows.",
    },
    {
      icon: "📈",
      title: "Decision & Risk Analytics",
      description:
        "Leveraging data analytics for informed decisions and risk assessment.",
    },
    {
      icon: "💹",
      title: "Trading & Capital Market",
      description:
        "Executing strategic trades and navigating capital markets efficiently.",
    },
    {
      icon: "🌿",
      title: "Modern & Surreal Workplace",
      description: "Fostering an innovative and inspiring work environment.",
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#000",
        overflow: "hidden",
        py: { xs: 4, md: 12 },
      }}
    >
      {/* Video Background */}
      <Box
        component="video"
        autoPlay
        loop
        muted
        playsInline
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.7,
        }}
      >
        <source src="Market.mp4" type="video/mp4" />
      </Box>

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(7, 5, 1, 0.85)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1400px",
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "white",
            textAlign: "center",
            mb: { xs: 4, md: 6 },
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          What We Do
        </Typography>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid container spacing={{ xs: 2, md: 4 }}>
            {services.map((service, index) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 4 }}
                key={index}
                component={motion.div}
                variants={itemVariants}
              >
                <Box
                  component={motion.div}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: 2,
                    p: 3,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                      boxShadow: "0 8px 32px rgba(255, 165, 0, 0.2)",
                      borderColor: "rgba(255, 165, 0, 0.3)",
                    },
                    [theme.breakpoints.down("sm")]: {
                      p: 2,
                    },
                  }}
                >
                  <Typography
                    variant="h3"
                    component="span"
                    sx={{
                      fontSize: { xs: "2rem", md: "2.5rem" },
                      mb: 2,
                      color: "white",
                    }}
                    aria-hidden="true"
                  >
                    {service.icon}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "white",
                      mb: 1.5,
                      fontSize: { xs: "1.1rem", md: "1.25rem" },
                      fontWeight: 600,
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255, 255, 255, 0.9)",
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      lineHeight: 1.6,
                    }}
                  >
                    {service.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>
    </Box>
  );
};

export default WhatWeDo;
