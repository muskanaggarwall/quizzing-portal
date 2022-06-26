import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { SignupCredential } from "../action/Index";
import { useState } from "react";

function CourseA() {
  const selector = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  const params = useParams();
  const [state, setstate] = useState({
    email: "jayesh.karma@revr.com",
  });
  console.log(params.coursename);
  return (
    <div>
      <button onClick={() => dispatch(SignupCredential(state))}>
        Data of signing users
      </button>
      <h1>{selector?.email}</h1>
    </div>
  );
}

export default CourseA;
