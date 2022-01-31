import styled from "styled-components";

export const TH = styled.th`
  padding: 10px;
  height: 100%;
  border-collapse: collapse;
  border-bottom: 2px solid;
  border-bottom-color: var(--my-color);
  color: var(--my-font-color);
`;

export const TR = styled.tr`
  color: var(--my-font-color);
`;

export const TD = styled.td`
  border: solid var(--my-color);
  text-align: center;
  padding: 8px;
  color: var(--my-font-color);
`;

export const Table = styled.table`
  padding: 10px;
  table-layout: fixed;
  font-weight: 300;
  border-collapse: collapse;
  width: 100%;
  display: table;
  box-shadow: 0 5px 10px var(--border-color);
  color: var(--primary-color);
  border-bottom: green;
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
