import React from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion"; // For smooth React animations
import Grid from "@mui/material/Grid2";

const About = () => {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.3 }, // Trigger once when 30% in view
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -120 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1, ease: "easeOut" },
    viewport: { once: true, amount: 0.3 },
  };

  const bounce = {
    initial: { scale: 0.85, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    transition: { duration: 0.7, type: "spring", stiffness: 150 },
    viewport: { once: true, amount: 0.3 },
  };

  return (
    <Box
      sx={{
        background: "#19191b", // Gradient background
        minHeight: "100vh",
        position: "relative",
        py: 8,
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        {/* Hero Section */}
        <motion.div {...fadeInUp}>
          <Typography
            variant="h2"
            align="center"
            sx={{
              color: "#fff",
              fontWeight: 800,
              mb: 2,
              letterSpacing: "-0.5px",
              background: "linear-gradient(90deg, #ffca28, #ffb300)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{
              color: "#e0e0e0",
              mb: 6,
              maxWidth: "800px",
              mx: "auto",
              fontWeight: 300,
              lineHeight: 1.6,
            }}
          >
            Empowering wealth creation through cutting-edge cryptocurrency
            solutions and unparalleled innovation.
          </Typography>
        </motion.div>

        {/* Mission Section */}
        <Grid container spacing={5} sx={{ my: 6 }}>
          <Grid item xs={12} md={6}>
            <motion.div {...slideInLeft}>
              <Card
                sx={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(12px)",
                  borderRadius: "20px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                  p: 2,
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "translateY(-5px)" },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h4"
                    sx={{
                      color: "#ffca28",
                      fontWeight: 700,
                      mb: 2,
                      textTransform: "uppercase",
                    }}
                  >
                    Our Mission
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#d1d1d1", lineHeight: 1.8 }}
                  >
                    At CryptoWealth, we’re on a mission to revolutionize
                    wealth-building by providing secure, transparent, and
                    high-yield crypto opportunities for all—bridging the gap
                    between novices and experts.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
          {/* <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Box
                component="img"
                src="/grow.jpg"
                alt="Crypto Vision"
                sx={{
                  width: "100%",
                  height: "50vh",
                  borderRadius: "20px",
                  boxShadow: "0 10px 40px rgba(255, 202, 40, 0.2)",
                  border: "2px solid #ffca28",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.02)" },
                }}
              />
            </motion.div>
          </Grid> */}
        </Grid>

        {/* Team Section */}
        <Typography
          variant="h3"
          align="center"
          sx={{
            color: "#fff",
            fontWeight: 700,
            mb: 5,
            textShadow: "0 2px 10px rgba(255, 202, 40, 0.5)",
          }}
        >
          Meet Our Team
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              name: "John Doe",
              role: "Founder & CEO",
              img: "/mr1.jpg",
            },
            {
              name: "Jane Smith",
              role: "Chief Analyst",
              img: "/mr2.jpg",
            },
            {
              name: "Alex Carter",
              role: "Blockchain Expert",
              img: "/mr3.jpg",
            },
          ].map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div {...bounce}>
                <Card
                  sx={{
                    background: "rgba(255, 255, 255, 0.08)",
                    borderRadius: "15px",
                    textAlign: "center",
                    p: 3,
                    border: "1px solid rgba(255, 202, 40, 0.2)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 30px rgba(255, 202, 40, 0.25)",
                    },
                  }}
                >
                  <Avatar
                    src={member.img}
                    alt={member.name}
                    sx={{
                      width: 120,
                      height: 120,
                      mx: "auto",
                      mb: 2,
                      border: "4px solid #ffca28",
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ color: "#fff", fontWeight: 600 }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#ffca28", fontStyle: "italic" }}
                  >
                    {member.role}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <motion.div {...fadeInUp}>
          <Box sx={{ textAlign: "center", mt: 8 }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                background: "linear-gradient(45deg, #ffca28, #ffb300)",
                color: "#1e3c72",
                fontWeight: 700,
                px: 5,
                py: 1.8,
                borderRadius: "50px",
                boxShadow: "0 6px 20px rgba(255, 202, 40, 0.5)",
                "&:hover": {
                  background: "linear-gradient(45deg, #ffb300, #ffca28)",
                  boxShadow: "0 8px 25px rgba(255, 202, 40, 0.7)",
                },
              }}
              component={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Us Today
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
