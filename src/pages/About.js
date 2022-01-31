import React from "react";
import { Link } from "react-router-dom";
import gif from "../assets/movie-minions.gif";

function About() {
  return (
    <div>
      <h2>About Capstone Project</h2>
      <div>
        <h4>Kullanılan Teknolojiler</h4>
        <Link to="https://react-redux.js.org/">React-Redux</Link>
        <br />
        <Link to="https://github.com/rt2zz/redux-persist">Redux-Persist</Link>
        <br />
        <Link to="https://redux.js.org/understanding/history-and-design/middleware">
          Redux-Logger
        </Link>
        <br />
        <Link to="https://react-query.tanstack.com/">React-Query</Link>
        <br />
        <Link to="https://styled-components.com/">Styled-Components</Link>
        <br />
      </div>
      <div>
        <img src={gif} alt="gif" />
      </div>
    </div>
  );
}

export default About;
