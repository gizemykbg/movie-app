import React from "react";
import { Form, Card } from "react-bootstrap";
const YearBox = ({ yearData, handleClickYear, yearChosen }) => {
  return (
    <>
      <Card className="filter-card-body">
        <Form>
          <Form.Label htmlFor="year">
            <b>Year of Release</b>
          </Form.Label>
          <br />
          <Form.Control
            as="select"
            name="year"
            id="year"
            onClick={handleClickYear}
          >
            {yearData.map((item, index) => (
              <option key={index} value={item.year}>
                {item.year}
              </option>
            ))}
          </Form.Control>
          year chosen = {yearChosen}
        </Form>
      </Card>
    </>
  );
};
export default YearBox;
