import React from "react";
import { Form, Card } from "react-bootstrap";

const SortBox = ({ sortChosen, handleClickSortBy }) => {
  return (
    <>
      <Card>
        <Card.Header as="h5">Sort</Card.Header>
        <Card.Body className="filter-card-body">
          <Form>
            <Form.Label for="sort">
              <b>Sort By</b>
            </Form.Label>
            <Form.Control
              as="select"
              name="sort"
              id="sort"
              onClick={handleClickSortBy}
            >
              <option value="popularity.asc">Popularity Ascending</option>
              <option value="popularity.desc">Popularity Descending</option>
              <option value="release_date.asc">Release Date Ascending</option>
              <option value="release_date.desc">Release Date Descending</option>
              <option value="vote_average.asc">Rating Ascending</option>
              <option value="vote_average.desc">Rating Descending</option>
            </Form.Control>
            Sort chosen = {sortChosen}
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};
export default SortBox;
