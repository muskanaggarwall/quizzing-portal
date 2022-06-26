import React, { Component } from "react";
import { BrowserRouter, Link, Switch } from "react-router-dom";

export class Course extends Component {
  constructor(props) {
    super(props);

    this.state = {
      course: "",
    };
  }

  render() {
    return (
      <div>
        <nav>
          <li>
            <Link to="/courseA">Course A</Link>
          </li>
          <li>
            <Link to="/courseB">Course B</Link>
          </li>
          <li>
            <Link to="/courseC">Course C</Link>
          </li>
        </nav>
      </div>
    );
  }
}

export default Course;
