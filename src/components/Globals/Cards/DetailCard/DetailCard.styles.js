import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 3rem;
  padding: 1px;

  @media screen and (max-width: 502px) {
    font-size: 3rem;
  }
`;
export const Showcase = styled.div`
  height: 500px;
  position: relative;
  @media screen and (max-width: 400px) {
    height: fit-content;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.75) 0%,
      rgba(0, 0, 0, 0.75) 50%,
      rgba(0, 0, 0, 0.75) 100%
    );
  }
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.98) 0%,
    rgba(0, 0, 0, 0.75) 50%,
    rgba(0, 0, 0, 0.5) 100%
  );
`;
export const Backdrop = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: flex-start;
  align-items: center;
  column-gap: 4rem;
  z-index: 1;
  max-width: auto;
  margin: 4 auto;
  color: var(--background-light-color);
  position: relative;
  height: 100%;

  .textContent {
    @media screen and (max-width: 400px) {
      display: flex;
      flex-direction: column;
      padding: 2rem 0 3rem;
      width: 100vw;
    }
  }
  .heading {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media screen and(max-width: 400px) {
      justify-content: center;
      text-align: center;
      max-width: 95vw;
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 400px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
  h1 {
    color: var(--background-light-color);
    margin-bottom: 5px;
    @media screen and(max-width: 400px) {
      font-size: 26px;
    }
  }
  span {
    font-size: 28px;
    margin-left: 10px;
    font-weight: 400;
    letter-spacing: 2px;

    @media screen and(max-width: 400px) {
      font-size: 22px;
    }
  }
`;
export const Row = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  margin-top: 12px;
  margin-bottom: 1rem;

  @media screen and(max-width: 1200px) {
    flex-direction: column;
    align-items: flex-start;
    display: flex;
  }

  @media screen and(max-width: 400px) {
    align-items: center;
    margin-top: 5px;
  }
  .ratingAndRuntime {
    display: flex;
    align-items: center;

    @media screen and(max-width: 400px) {
      margin: 1rem 0;
    }
  }
  .voteCircle {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #081c22;
    width: 55px;
    height: 55px;
    border-radius: 50px;
    font-size: 18px;
  }
  p {
    letter-spacing: 0px;
  }
  .percentSymbol {
    font-size: 8px;
    transform: translate(1px, -3px);
  }
  .overview {
    margin-bottom: 1rem;
    overflow-y: auto;
    padding-right: 3rem;
    font-size: 15px;
    letter-spacing: 0;

    @media screen and(max-width: 1200px) {
      max-height: 150px;
      padding-right: 1rem;
    }

    @media screen and(max-width: 400px) {
      max-height: fit-content;
      text-align: center;
      max-width: 92vw;
      margin: 0 auto;
      padding-right: 0;
      line-height: 1.5;
      margin: 10px auto 3rem auto;
    }

    h3 {
      margin-bottom: 8px;

      @media screen and(max-width: 400px) {
        margin-bottom: 5px;
      }
    }
  }
`;

export const Dot = styled.span`
  height: 22px;
  margin: 0 1rem;
  width: 2px;
  border-radius: 10px;
  background-color: var(--white);
  opacity: 0.6;
  height: 30px;
`;

export const Genres = styled.ul`
  display: flex;
  @media screen and(max-width: 1200px) {
    flex-wrap: wrap;
    margin-top: 1rem;
  }

  @media screen and(max-width: 400px) {
    text-align: center;
    justify-content: center;
    max-width: 95vw;
    flex-wrap: wrap;
    margin-top: 5px;
  }
  :not(:last-of-type) {
    margin-right: 5px;
  }
`;

/* .trailerBtn {
          font-family: 'Montserrat', sans-serif;
          cursor: pointer;
          font-size: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: transparent;
          border: none;
          color: var(--white);
          transition: opacity 0.3s ease;
          margin-top: 2rem;
          letter-spacing: 0.5px;

          @include media('<tablet') {
            margin-top: 1rem;
            margin: 1rem auto 0 auto;
            //
            position: absolute;
            bottom: 28px;
            right: clamp(1px, 50px, 2.5vw);
          }

          svg {
            margin-right: 5px;
            font-size: 30px;
          }

          &:hover {
            opacity: 0.6;
          }
        } */
