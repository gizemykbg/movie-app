import styled from "styled-components";
const Footers = styled.div`
  height: 75px;
  background-color: var(--border-color);
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: var(--max-width);
  height: 100%;
  margin: 0 auto;
  color: var(--my-font-color);
  line-height: 1.5;

  p {
    font-size: 15px;
    letter-spacing: 0.5px;
  }

  img {
    width: 25%;
    height: 25%;
    margin-left: 6px;
  }
`;
export { Footers, Content };
