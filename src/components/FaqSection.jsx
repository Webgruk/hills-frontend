import React from "react";
import { styled } from "@mui/material/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { motion } from "framer-motion";

// Custom styled components for a polished look
const StyledAccordion = styled(Accordion)(({ theme }) => ({
  borderRadius: "16px",
  marginBottom: theme.spacing(2),
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
  background: "#ffffff",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 12px 32px rgba(0, 0, 0, 0.2)",
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  background: "linear-gradient(90deg, #1e3a8a 0%, #3b82f6 100%)",
  color: "#fff",
  borderRadius: "16px 16px 0 0",
  padding: theme.spacing(2, 4),
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: "#ffd700", // Gold icon for a premium touch
  },
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  backgroundColor: "#f9fafb",
  borderRadius: "0 0 16px 16px",
  padding: theme.spacing(3),
  borderTop: "1px solid #e5e7eb",
}));

const TitleBox = styled(Box)(({ theme }) => ({
  background: "linear-gradient(45deg, #ffd700 0%, #ff6b6b 100%)",
  padding: theme.spacing(2, 4),
  borderRadius: "12px",
  textAlign: "center",
  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  marginBottom: theme.spacing(6),
  position: "relative",
  overflow: "hidden",
  "&:after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(255, 255, 255, 0.1)",
    transform: "skew(-20deg)",
    zIndex: 1,
  },
}));

const FAQSection = () => {
  const faqData = [
    {
      question: "How can I start investing with Hills Financial?",
      answer:
        "To begin investing with Hills Financial, you need to become a member by signing up at hillsfinance.org. After completing the registration process, log in to the Members Area using your unique username and password. From there, you can make your first deposit securely through the platform.",
      icon: <AccountBalanceWalletIcon />,
    },
    {
      question: "How do I create a Hills Financial account?",
      answer:
        'Opening an account with Hills Financial is simple and user-friendly. Visit the registration page on our website, complete the form with your details, and click "Register" to finalize the process. You’ll receive your login credentials shortly after.',
      icon: <PersonAddIcon />,
    },
    {
      question: "How can I view my account balance?",
      answer:
        "You can check your account balance anytime by logging into the Members Area on hillsfinance.org with your username and password. Your balance and transaction history will be readily available on the dashboard.",
      icon: <VisibilityIcon />,
    },
    {
      question: "Am I allowed to open multiple accounts with Hills Financial?",
      answer:
        "For security and compliance reasons, each user is permitted to maintain only one account with Hills Financial. If you need assistance with your account or have special requirements, please contact our support team.",
      icon: <GroupAddIcon />,
    },
  ];

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
    <Box
      sx={{
        background: "#19191b",
        position: "relative",
        minHeight: "70vh",
        py: 10,
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <TitleBox>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "#fff",
                textTransform: "uppercase",
                letterSpacing: 2,
                position: "relative",
                zIndex: 2,
              }}
            >
              FAQ
            </Typography>
          </TitleBox>
        </motion.div>

        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of item is in view
          >
            <StyledAccordion>
              <StyledAccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  {faq.icon}
                  <Typography variant="h6">{faq.question}</Typography>
                </Box>
              </StyledAccordionSummary>
              <StyledAccordionDetails>
                <Typography variant="body1" color="text.secondary">
                  {faq.answer}
                </Typography>
              </StyledAccordionDetails>
            </StyledAccordion>
          </motion.div>
        ))}
      </Container>
    </Box>
  );
};

export default FAQSection;
