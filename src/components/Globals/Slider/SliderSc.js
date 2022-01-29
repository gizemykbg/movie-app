import styled from "styled-components";

const Box = styled.div`
  position: relative;
  display: block;
  align-items: center;
  justify-content: center;
  width: 330px;
  height: 100%;
  border-radius: 8px;
  scroll-snap-align: align;
  @media only screen and (max-width: 960px) {
    padding-right: 8px;
    padding-left: 8px;
    display: block;
  }
`;

const Scrollable = styled.div`
  padding: 30px;
  align-items: center;
  border-radius: 10px;
  background-color: var(--border-color);
  margin: 5px;
  scroll-padding: 18px;
  position: relative;
  display: grid;
  grid-auto-flow: column;
  width: 99%;
  height: 100%;
  ${"" /* grid-template-columns: repeat(5, 400px); */}
  overflow: auto;
  outline: 1px dashed var(--font-light-color);
  scroll-snap-type: x;
  @media only screen and (max-width: 960px) {
    padding-right: 3px;
    padding-left: 3px;
    display: grid;
    grid-auto-flow: column;
    scroll-padding: 18px;
  }
`;

const ScrollTitle = styled.h3`
  color: var(--text-light-color);
  font-size: 20px;
  padding: 10px;
  margin: 5px;
`;

export { Scrollable, Box, ScrollTitle };
