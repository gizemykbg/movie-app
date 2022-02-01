import React from "react";
import gif from "../assets/movie-minions.gif";

function About() {
  return (
    <div>
      <h2>About Capstone Project</h2>
      <div>
        <h4>Kullanılan Teknolojiler</h4>
        <a href="https://react-redux.js.org/">React-Redux</a>
        <br />
        <a href="https://github.com/rt2zz/redux-persist">Redux-Persist</a>
        <br />
        <a href="https://redux.js.org/understanding/history-and-design/middleware">
          Redux-Logger
        </a>
        <br />
        <a href="https://react-query.tanstack.com/">React-Query</a>
        <br />
        <a href="https://styled-components.com/">Styled-Components</a>
        <br />
        <a href="https://formik.org/">Formik</a>
        <br />
        <a href="https://www.npmjs.com/package/yup">Yup</a>
        <br />
      </div>
      <div>
        <img src={gif} alt="gif" />
      </div>
    </div>
  );
}

export default About;
