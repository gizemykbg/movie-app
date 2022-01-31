import React from "react";
import { Form, Card } from "react-bootstrap";

const RatingBox = ({ ratingChosen, handleChangeRating }) => {
  return (
    <>
      <Card className="filter-card-body">
        <Form>
          <Form.Label>
            <b>Minimum Rating</b>
          </Form.Label>
          <Form.Control
            type="range"
            min={1}
            max={10}
            value={ratingChosen}
            className="slider"
            onChange={handleChangeRating}
            custom
          ></Form.Control>
          range slider value = {ratingChosen}
        </Form>
      </Card>
    </>
  );
};
export default RatingBox;
