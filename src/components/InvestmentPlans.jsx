// InvestmentPlans.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Box,
  LinearProgress,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { TrendingUp, Lock, Warning, Verified } from "@mui/icons-material";

// Styled Components
const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: theme.shadows[8],
  },
}));

const PlanChip = styled(Chip)(({ theme, risk }) => ({
  margin: theme.spacing(0.5),
  backgroundColor:
    risk === "Low"
      ? theme.palette.success.light
      : risk === "Medium"
      ? theme.palette.warning.light
      : theme.palette.error.light,
  color:
    risk === "Low"
      ? theme.palette.success.contrastText
      : risk === "Medium"
      ? theme.palette.warning.contrastText
      : theme.palette.error.contrastText,
}));

// Investment Plans Data
const investmentPlans = [
  {
    id: 1,
    title: "Safe Growth",
    description: "Low-risk investment with steady returns",
    annualReturn: "5-7%",
    minInvestment: "$1,000",
    duration: "12 months",
    risk: "Low",
    features: ["Capital Protection", "Monthly Dividends", "Guaranteed Returns"],
    progress: 70,
  },
  {
    id: 2,
    title: "Balanced Portfolio",
    description: "Balanced mix of stocks and bonds",
    annualReturn: "8-10%",
    minInvestment: "$5,000",
    duration: "24 months",
    risk: "Medium",
    features: [
      "Diversified Assets",
      "Quarterly Reviews",
      "Professional Management",
    ],
    progress: 55,
  },
  {
    id: 3,
    title: "High Yield",
    description: "Aggressive growth strategy",
    annualReturn: "12-15%",
    minInvestment: "$10,000",
    duration: "36 months",
    risk: "High",
    features: ["Market Leaders", "Active Trading", "High Growth Potential"],
    progress: 85,
  },
  {
    id: 4,
    title: "High Yield",
    description: "Aggressive growth strategy",
    annualReturn: "12-15%",
    minInvestment: "$10,000",
    duration: "36 months",
    risk: "High",
    features: ["Market Leaders", "Active Trading", "High Growth Potential"],
    progress: 85,
  },
];

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.3,
    },
  },
};

const InvestmentPlans = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 6, px: 2, position: "relative", background: "#202026" }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h3"
          align="center"
          color="orange"
          gutterBottom
          sx={{ mb: 6, fontWeight: "bold" }}
        >
          Investment Plans
        </Typography>

        <Grid container spacing={4}>
          {investmentPlans.map((plan, index) => (
            <Grid item xs={12} sm={6} md={4} key={plan.id}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ delay: index * 0.2 }}
              >
                <StyledCard>
                  <CardContent sx={{ flexGrow: 1, background: "#444" }}>
                    {/* Plan Header */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 2,
                      }}
                    >
                      <Typography variant="h5" component="h2" fontWeight="bold">
                        {plan.title}
                      </Typography>
                      <PlanChip
                        label={plan.risk}
                        risk={plan.risk}
                        size="small"
                        icon={
                          plan.risk === "Low" ? (
                            <Lock />
                          ) : plan.risk === "Medium" ? (
                            <TrendingUp />
                          ) : (
                            <Warning />
                          )
                        }
                      />
                    </Box>

                    {/* Plan Description */}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {plan.description}
                    </Typography>

                    {/* Plan Details */}
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="subtitle2" color="primary">
                        Annual Return: <strong>{plan.annualReturn}</strong>
                      </Typography>
                      <Typography variant="subtitle2">
                        Minimum Investment:{" "}
                        <strong>{plan.minInvestment}</strong>
                      </Typography>
                      <Typography variant="subtitle2">
                        Duration: <strong>{plan.duration}</strong>
                      </Typography>
                    </Box>

                    {/* Progress Bar */}
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="caption" color="text.secondary">
                        Popularity
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={plan.progress}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          bgcolor: "grey.200",
                        }}
                      />
                    </Box>

                    {/* Features */}
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="subtitle2" gutterBottom>
                        Key Features:
                      </Typography>
                      {plan.features.map((feature, idx) => (
                        <Box
                          key={idx}
                          sx={{ display: "flex", alignItems: "center", mb: 1 }}
                        >
                          <Verified
                            sx={{ fontSize: 16, mr: 1, color: "success.main" }}
                          />
                          <Typography variant="body2">{feature}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </CardContent>

                  {/* Action Button */}
                  <Box sx={{ p: 2, pt: 0 }}>
                    <Button
                      variant="contained"
                      fullWidth
                      component={motion.button}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      sx={{
                        bgcolor: "primary.main",
                        "&:hover": { bgcolor: "primary.dark" },
                      }}
                    >
                      Invest Now
                    </Button>
                  </Box>
                </StyledCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default InvestmentPlans;
