import React from "react";
import { useTable, useAbsoluteLayout } from "react-table";
import { Table, TR, TD, TH, Label } from "./Tables.styles";

export default function Tables({ children, ...props }) {
  const rows = props.data.map((el, idx) => (
    <TR key={idx}>
      {Object.values(el).map((el, idx) => (
        <TD key={idx}>{el}</TD>
      ))}
    </TR>
  ));
  return (
    <>
      <Table {...props}>
        <thead>
          <TR>
            {Object.keys(props.data[0]).map((el, idx) => (
              <TH key={idx}>
                <Label>{el}</Label>
              </TH>
            ))}
          </TR>
        </thead>
        <tbody>
          {rows}
          {children}
        </tbody>
      </Table>
    </>
  );
}

Table.DENSITY = {
  LOW: "low",
  AVERAGE: "avg",
  HIGH: "high",
};
