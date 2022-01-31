import React from "react";
import { Table, TR, TD, TH, Label } from "./Tables.styles";

export default function Tables({ items, genres }) {
  const rows = items.map((el, idx) => (
    <TR key={idx}>
      {items.map((el, idx) => (
        <TD key={idx}>{el}</TD>
      ))}
    </TR>
  ));
  return (
    <>
      <Table>
        <thead>
          <TR>
            <TH>
              <Label>Movie id</Label>
            </TH>
            <TH>
              <Label>Title</Label>
            </TH>
            <TH>
              <Label>Genre</Label>
            </TH>
          </TR>
        </thead>
        <tbody>
          {items?.map((item) => {
            return (
              <TR key={item.id}>
                <TH scope={item.id}>{item.id}</TH>
                <TD>{item.title}</TD>
                <TH scope={item.id}>
                  {item.id}
                  <TD>
                    {item?.genre
                      ?.map((id) => genres.filter((genre) => genre.id === id))
                      .map((item) => (
                        <span key={item.id}>{item.genre} </span>
                      ))}
                  </TD>
                </TH>
              </TR>
            );
          })}
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
