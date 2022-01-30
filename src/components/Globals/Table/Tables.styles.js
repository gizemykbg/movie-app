import styled from "styled-components";

export const TH = styled.th`
  padding: 0.75em;
  height: 100%;
  background-color: var (--background-dark-grey);
  border-collapse: collapse;
  border-bottom: 2px solid;
  border-bottom-color: var(--border-color);
`;

export const TR = styled.tr`
  background-color: var(--font-light-color);
`;

export const TD = styled.td`
  border-top: 1px solid #dee2e6;
  text-align: center;
  padding: 8px;
  background-color: var(--border-color);
`;

export const Table = styled.table`
  table-layout: fixed;
  font-weight: 400;
  border-collapse: collapse;
  width: 100%;
  display: table;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  color: var(--font-light-color);
  border-bottom: var(--border-color);
  height: ${(props) => {
    switch (props.density) {
      case "low":
        return "90vh";
      case "avg":
        return "45vh";
      case "high":
        return "5px";
      default:
        return "50vh";
    }
  }};
`;

export const Label = styled.label`
  width: 100%;
  height: 100%;
`;
