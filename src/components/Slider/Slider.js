import React, { useRef } from "react";
import MovieCard from "../MovieCard";
import {
  Button,
  ButtonWrapper,
  Container,
  Content,
  ContentWrapper,
  Title,
} from "./SliderSc";

function Slider({ item }) {
  const contentWrapper = useRef(null);
  const sideScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };
  return (
    <Container>
      <Title>Popular Movie</Title>
      <ContentWrapper ref={contentWrapper}>
        {item.map((item) => (
          <MovieCard item={item} key={item.id} />
        ))}
      </ContentWrapper>

      <ButtonWrapper>
        <Button
          onClick={() => {
            sideScroll(contentWrapper.current, 20, 100, -20);
          }}
        >
          Left
        </Button>
        <Button
          onClick={() => {
            sideScroll(contentWrapper.current, 20, 100, 20);
          }}
        >
          Right
        </Button>
      </ButtonWrapper>
    </Container>
  );
}

export default Slider;
