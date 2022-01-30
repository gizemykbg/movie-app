import React from "react";
import { Form } from "react-bootstrap";
const GenreBox = ({ genres, genreChosen, handleClickGenre }) => {
  return (
    <>
      <Form>
        <Form.Label>
          <p>Genres</p>
        </Form.Label>
        <br />
        {genres.map((item, index) => (
          <div key={index}>
            <Form.Check
              type="checkbox"
              label={item.name}
              id="genre"
              name="genre"
              value={item.id}
              onClick={handleClickGenre}
              inline
            />
          </div>
        ))}
        <div>
          genreChosen:
          {genreChosen.map((item) => (
            <label>{item},</label>
          ))}
        </div>
      </Form>
    </>
  );
};
export default GenreBox;
