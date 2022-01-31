import styled from "styled-components";

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--font-light-color);
  margin: 3px;
  box-shadow: 1px 1px 10px var(--scrollbar-thump-color);
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-out;
  padding: 3px;
  &:hover {
    box-shadow: 1px 1px 10px 6px var(--font-light-color);
    transform: translateY(-8px) scale(1);
    transition: all 0.3s ease-out;
  }

  .card-image {
    img {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      width: 100%;
      height: 100%;
    }
  }
  .card-info {
    padding: 15px 11px;
    justify-content: space-between;
    grid-template-areas:
      "title title"
      "icon button";
    grid-gap: 15px;
    @media only screen and (max-width: 200px) {
      padding-right: 20px;
      padding-left: 20px;
      font-size: 10px;
    }
    .card-title {
      grid-area: title;
      font-size: 18px;
    }

    .card-button {
      display: flex;
      grid-area: button;
      background: var(--border-color);
      color: var(--secondary-color);
      border: 1px solid var(--secondary-color);
      border-radius: 3px;
      cursor: pointer;
      transition: all 0.5s ease-out;

      &:hover {
        color: var(--primary-color);
        background: var(--secondary-color);
        transition: all 0.3s ease-out;
      }
    }
  }
  .btn-container {
    padding: 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media only screen and (max-width: 200px) {
      margin: 5px;
      padding: 3px;
      font-size: 8px;
    }
  }
`;

export default CardStyle;
