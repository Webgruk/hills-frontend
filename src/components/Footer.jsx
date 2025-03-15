import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Container, Typography, Link, Grid, Divider } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { motion } from "framer-motion";

// Custom styled components for a stunning footer
const FooterBox = styled(Box)(({ theme }) => ({
  background: "linear-gradient(135deg,rgb(61, 60, 60) 0%,rgb(0, 8, 22) 100%)",
  color: "#fff",
  padding: theme.spacing(6, 0),
  position: "relative",
  overflow: "hidden",
  "&:before": {
    content: '""',
    position: "absolute",
    top: "-50%",
    left: "-50%",
    width: "200%",
    height: "200%",
    background:
      "radial-gradient(circle, rgba(255, 255, 255, 0.1) 10%, transparent 60%)",
    transform: "rotate(30deg)",
    zIndex: 1,
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: "#e0e0e0",
  textDecoration: "none",
  fontSize: "1rem",
  transition: "color 0.3s ease, transform 0.3s ease",
  "&:hover": {
    color: "#ffd700",
    transform: "translateX(5px)",
  },
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: "#ffd700",
  marginBottom: theme.spacing(2),
  textTransform: "uppercase",
  letterSpacing: 1.5,
}));

const ContactItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  marginBottom: theme.spacing(1.5),
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  margin: theme.spacing(4, 0),
}));

const Footer = () => {
  // Animation variants for Framer Motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <FooterBox component="footer">
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={4}>
          {/* Company Links */}
          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <FooterTitle variant="h6">Company</FooterTitle>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <FooterLink href="/about-us">About Us</FooterLink>
                <FooterLink href="/faq">FAQ</FooterLink>
                <FooterLink href="/services">Services</FooterLink>
                <FooterLink href="/terms">Terms of Use</FooterLink>
                <FooterLink href="/privacy">Privacy Policy</FooterLink>
              </Box>
            </motion.div>
          </Grid>

          {/* Resources Links */}
          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <FooterTitle variant="h6">Resources</FooterTitle>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <FooterLink href="/blog">Blog</FooterLink>
                <FooterLink href="/guides">Guides</FooterLink>
                <FooterLink href="/support">Support</FooterLink>
              </Box>
            </motion.div>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <FooterTitle variant="h6">Contact Us</FooterTitle>
              <ContactItem>
                <PhoneIcon sx={{ color: "#ffd700" }} />
                <Typography variant="body2">+1 (800) 123-4567</Typography>
              </ContactItem>
              <ContactItem>
                <EmailIcon sx={{ color: "#ffd700" }} />
                <Typography variant="body2">
                  support@hillsfinance.org
                </Typography>
              </ContactItem>
              <ContactItem>
                <LocationOnIcon sx={{ color: "#ffd700" }} />
                <Typography variant="body2">
                  123 Crypto Lane, Blockchain City, USA
                </Typography>
              </ContactItem>
            </motion.div>
          </Grid>

          {/* Newsletter or Branding */}
          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <FooterTitle variant="h6">Hills Financial</FooterTitle>
              <Typography variant="body2" sx={{ color: "#e0e0e0", mb: 2 }}>
                Empowering your financial future with cutting-edge crypto
                solutions.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

        <StyledDivider />

        {/* Copyright */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Typography variant="body2" align="center" sx={{ color: "#e0e0e0" }}>
            © {new Date().getFullYear()} Hills Financial. All rights reserved.
          </Typography>
        </motion.div>
      </Container>
    </FooterBox>
  );
};

export default Footer;
