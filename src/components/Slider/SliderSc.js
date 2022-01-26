import styled from "styled-components";
import MovieCard from "../MovieCard";

const Container = styled.div`
  min-height: calc(100vh - 20px);
  width: calc(100% - 64px);
  margin: -8px;
  padding: 10px 40px;
  overflow: hidden;
  background-color: #1c2022;
`;

const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  width: max-content;
`;

const ContentWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  border: 5px solid #ffffff;
  border-radius: 10px;

  & > ${MovieCard} {
    margin: 10px 10px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  justify-content: space-between;
`;

const Button = styled.button`
  background: #ffffff;
  border: 0;
  color: #000000;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export { Container, Title, ContentWrapper, MovieCard, ButtonWrapper, Button };
