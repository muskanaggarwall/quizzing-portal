import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Course from "../components/Courses";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import CourseA from "../pages/CourseA";
import CourseB from "../pages/CourseB";
import CourseC from "../pages/CourseC";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/course" component={Course} />
        <Route exact path="/courseB" component={CourseB} />
        <Route exact path="/:coursename" component={CourseA} />
      </Switch>
    </BrowserRouter>
  );
};
