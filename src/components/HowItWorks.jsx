import React from "react";
import { Container, Typography, Box, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion"; // For smooth animations
import Grid from "@mui/material/Grid2";

const HowItWorks = () => {
  // Animation variants for scroll-triggered effects
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: "easeOut" },
    viewport: { once: true, amount: 0.2 },
  };

  // Card animation with staggered entrance
  const cardAnimation = {
    initial: { opacity: 0, scale: 0.9, y: 40 },
    whileInView: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 0.7, type: "spring", stiffness: 120 },
    viewport: { once: true, amount: 0.3 },
  };

  // Data for the cards
  const steps = [
    {
      title: "Create Account",
      description:
        "Sign up and verify your account for free to unlock your crypto journey.",
      color: "#ff6f61", // Coral
      icon: "👤",
    },
    {
      title: "Make Deposit",
      description:
        "Fund your account effortlessly through the secure dashboard funding page.",
      color: "#40c4ff", // Sky Blue
      icon: "💳",
    },
    {
      title: "Earn & Get Paid",
      description: "Watch your profits grow and withdraw anytime with ease.",
      color: "#ab47bc", // Purple
      icon: "💰",
    },
  ];

  return (
    <Box
      sx={{
        background: "#19191b", // Subtle gradient
        // height: "100vh",
        // Set to 70% of viewport height
        py: { xs: 4, md: 12 },
        //  Reduced padding to fit content
        position: "relative",
        overflow: "hidden",
        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle, rgba(233, 220, 220, 0.06) 2%, transparent 70%)",
          zIndex: 0,
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header Section */}
        <motion.div {...fadeInUp}>
          <Typography
            variant="h2"
            align="center"
            sx={{
              color: "#fff",
              fontWeight: 800,
              mb: 1, // Reduced margin
              background:
                "linear-gradient(90deg,rgb(200, 148, 3),rgb(229, 199, 6),rgb(78, 189, 9))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 3px 15px rgba(255, 255, 255, 0.2)",
              fontSize: { xs: "1.8rem", md: "2.5rem" }, // Slightly smaller for fit
            }}
          >
            How It Works
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{
              color: "rgba(255, 255, 255, 0.8)",
              mb: { xs: 4, md: 5 }, // Adjusted spacing
              maxWidth: "700px",
              mx: "auto",
              fontWeight: 300,
              lineHeight: 1.6,
              fontSize: { xs: "0.9rem", md: "1rem" },
            }}
          >
            Three seamless steps to kickstart your cryptocurrency success.
          </Typography>
        </motion.div>

        {/* Steps Section */}
        <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
          {steps.map((step, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                {...cardAnimation}
                transition={{
                  ...cardAnimation.transition,
                  delay: index * 0.15,
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 15px 40px ${step.color}33`,
                }}
              >
                <Card
                  sx={{
                    background: "rgba(255, 255, 255, 0.04)",
                    borderRadius: "20px",
                    border: `1px solid ${step.color}20`,
                    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.25)",
                    textAlign: "center",
                    py: 3, // Reduced padding
                    px: 2,
                    minHeight: "220px", // Adjusted for 70vh constraint
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                    "&:before": {
                      content: '""',
                      position: "absolute",
                      inset: 0,
                      borderRadius: "20px",
                      background: `radial-gradient(circle at center, ${step.color}10, transparent 70%)`,
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                      zIndex: 0,
                    },
                    "&:hover:before": { opacity: 1 },
                    "& > *": { position: "relative", zIndex: 1 },
                  }}
                >
                  <CardContent sx={{ p: 0 }}>
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Typography
                        sx={{
                          color: step.color,
                          fontSize: { xs: "2rem", md: "2.5rem" }, // Slightly smaller
                          mb: 1.5,
                        }}
                      >
                        {step.icon}
                      </Typography>
                    </motion.div>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#fff",
                        fontWeight: 600,
                        mb: 1.5,
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        fontSize: { xs: "1rem", md: "1.25rem" },
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "rgba(255, 255, 255, 0.85)",
                        lineHeight: 1.6,
                        fontSize: { xs: "0.85rem", md: "0.95rem" },
                      }}
                    >
                      {step.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Decorative Floating Orbs */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "8%",
          width: "40px",
          height: "40px",
          background: "radial-gradient(circle,rgb(245, 194, 11), transparent)",
          borderRadius: "50%",
          filter: "blur(15px)",
          animation: "float 5s infinite ease in-out",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "15%",
          right: "10%",
          width: "60px",
          height: "60px",
          background: "radial-gradient(circle,rgb(150, 234, 5), transparent)",
          borderRadius: "50%",
          filter: "blur(20px)",
          animation: "float 7s infinite ease-in-out",
          zIndex: 0,
        }}
      />
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
        `}
      </style>
    </Box>
  );
};

export default HowItWorks;
