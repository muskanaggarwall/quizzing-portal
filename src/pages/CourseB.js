import React, { useContext } from "react";
import { Data } from "../App";

function CourseB() {
  //passing data
  const getData = useContext(Data);
  return <div>{getData}</div>;
}

export default CourseB;
