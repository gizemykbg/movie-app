import React from "react";
import { Table, TR, TD, TH, Label } from "./Tables.styles";

export default function Tables({ items, genres }) {
  const rows = items.map((el, index) => (
    <TR key={index}>
      {items.map((el, index) => (
        <TD key={index}>{el}</TD>
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
            console.log(items);
            return (
              <TR key={item.id}>
                <TH scope={item.id}>{item.id}</TH>
                <TD>{item.title}</TD>
                <TH scope={item.id}>
                  <TD>
                    {item?.genre
                      ?.map((id) => genres.filter((genre) => genre.id === id))
                      .map((item, index) => (
                        <label key={index}>{item[0].name}, </label>
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
