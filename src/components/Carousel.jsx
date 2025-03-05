import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import "../styles/carousel.css";
import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import { TrendingCoins } from "../config/api";

const Carousel = () => {
  const [trending, setTrending] = useState([]);

  const fetchTrending = async () => {
    await axios
      .get(TrendingCoins("USD"))
      .then((response) => {
        // Store response in state
        setTrending(response?.data);
      })

      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  console.log(trending);

  const items = trending.map((coin) => {
    return (
      <div key={coin.id}>
        <img
          src={coin.image}
          height="80"
          alt={coin.name}
          className="carousel-image"
        />
      </div>
    );
  });
  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 6,
    },
  };

  return (
    <Container
      sx={{
        height: "50%",
        display: "flex",
        alignItems: "center",
        position: "relative",
        color: "white",
      }}
    >
      <AliceCarousel
        autoPlay
        autoPlayInterval={1500}
        autoDuration={2500}
        infinite
        disableButtonsControls
        disableDotsControls
        mouseTracking
        responsive={responsive}
        items={items}
      />
    </Container>
  );
};

export default Carousel;
