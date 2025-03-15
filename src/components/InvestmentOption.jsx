import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Container, Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: "0 15px",
  backgroundColor: "#2D2D2D",
  borderRadius: 10,
  color: "white",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: theme.shadows[10],
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: "#fff",
  marginBottom: theme.spacing(2),
  fontWeight: 700,
  textAlign: "center",
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  color: "rgba(255, 255, 255, 0.8)",
  marginBottom: theme.spacing(4),
  textAlign: "center",
}));

// Card data with enhanced descriptions
const cardData = [
  {
    title: "Forex Trading",
    description:
      "Access the world's largest market with 24/5 trading. Benefit from high liquidity, leverage up to 100:1, and tight spreads.",
    image: "/forex.jpg",
  },
  {
    title: "Crypto Currency Investment",
    description:
      "Dive into the future of finance with cryptocurrencies. Invest in Bitcoin, Ethereum, and emerging altcoins with our secure platform.",
    image: "/crypto.jpg",
  },
  {
    title: "Investment Consultancy",
    description:
      "Personalized financial strategies from certified advisors. Optimize your portfolio with expert market insights and risk management.",
    image: "/consultancy.jpg",
  },
  {
    title: "Stock & Commodities",
    description:
      "Build wealth through stocks and commodities trading. Access global markets with real-time data and competitive commissions.",
    image: "/stock.jpg",
  },
  {
    title: "Real Estate Investment",
    description:
      "Secure your future with property investments. From residential to commercial real estate, enjoy stable returns and tax benefits.",
    image: "/real-estate.jpg",
  },
  {
    title: "Cannabis Investment",
    description:
      "Capitalize on the booming cannabis sector. Invest in cultivation, processing, and retail opportunities in this high-growth industry.",
    image: "/cannabis.jpg",
  },
];

// Enhanced Card component
const InvestmentCard = ({ title, description, image }) => (
  <StyledCard>
    <CardActionArea>
      <CardMedia
        component="img"
        height="250"
        image={image}
        alt={title.toLowerCase()}
        // sx={{ objectFit: "cover" }}
      />
      <CardContent sx={{ minHeight: 150, color: "white" }}>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </CardActionArea>
  </StyledCard>
);

InvestmentCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default function InvestmentCarousel() {
  const items = cardData.map((item, index) => (
    <InvestmentCard
      key={index}
      title={item.title}
      description={item.description}
      image={item.image}
    />
  ));

  const responsive = {
    0: { items: 1 },
    600: { items: 2 },
    960: { items: 3 },
    // 1280: { items: 4 },
  };

  return (
    <Box
      sx={{
        py: 8,
        bgcolor: "#222",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle variant="h3">Our Investment Options</SectionTitle>
        <SectionSubtitle variant="h6">
          Offering diverse investment options to ensure proactive and
          sustainable success.
        </SectionSubtitle>

        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          autoPlay
          autoPlayInterval={4000}
          animationDuration={600}
          infinite
          disableDotsControls={false}
          disableButtonsControls={false}
          paddingLeft={20}
          paddingRight={20}
          renderPrevButton={() => (
            <Button
              sx={{
                position: "absolute",
                left: 0,
                color: "gold",
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "rgba(255, 255, 255, 0.)",
                "&:hover": { bgcolor: "rgba(29, 28, 28, 0.8)" },
              }}
            >
              Prev
            </Button>
          )}
          renderNextButton={() => (
            <Button
              sx={{
                position: "absolute",
                right: 0,
                color: "gold",
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "rgba(255, 255, 255, 0.2)",
                "&:hover": { bgcolor: "rgba(29, 28, 28, 0.8)" },
              }}
            >
              Next
            </Button>
          )}
        />
      </Container>
    </Box>
  );
}
