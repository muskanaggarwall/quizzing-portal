import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();
  //setting states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className="main">
      <form className="signup_form" onSubmit={(e) => onLogin(e)}>
        <div className="title">
          <b>Log In</b>{" "}
        </div>
        <div className="email">
          <div className="ei">
            <input
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="pass">
          <div className="pi">
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <Link to={"/course"}>
          <button type="submit" className="signup_button">
            Log In
          </button>
        </Link>

        <div className="redirect">
          New User ? <Link to={"/signup"}>Sign In</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
