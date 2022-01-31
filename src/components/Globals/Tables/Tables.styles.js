import styled from "styled-components";

export const TH = styled.th`
  padding: 10px;
  height: 100%;
  background-color: var(--my-color);
  border-collapse: collapse;
  border-bottom: 2px solid;
  border-bottom-color: var(--font-dark-color-2);
  color: var(--my-font-color);
`;

export const TR = styled.tr`
  background-color: var(--border-color);
  color: var(--font-light-color);
`;

export const TD = styled.td`
  border-top: 1px solid var(--font-dark-color-2);
  text-align: center;
  padding: 8px;
  background-color: var(--my-color);
  color: var(--my-font-color);
`;

export const Table = styled.table`
  margin: 5px;
  table-layout: fixed;
  font-weight: 300;
  border-collapse: collapse;
  width: 100%;
  display: table;
  box-shadow: 0 5px 10px var(--border-color);
  color: var(--primary-color);
  border-bottom: var(--border-color2);
  height: ${(props) => {
    switch (props.density) {
      case "low":
        return "80vh";
      case "avg":
        return "45vh";
      case "high":
        return "10px";
      default:
        return "20vh";
    }
  }};
`;

export const Label = styled.label`
  width: 100%;
  height: 100%;
`;
