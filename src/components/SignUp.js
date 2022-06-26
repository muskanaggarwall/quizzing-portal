import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./SignUp.css";
import { reducer } from "../reducer/Index";
import { SignupCredential } from "../action/Index";

function SignUp(props) {
  const selector = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  //setting states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //setting errors
  let errorsObj = { name: "", email: "", password: "" };
  const [errors, setErrors] = useState(errorsObj);

  const onSignUp = (e) => {
    e.preventDefault();
    dispatch(
      SignupCredential({
        name: name,
        email: email,
        password: password,
        loggedIn: true,
      })
    );

    let error = false;
    const errorObj = { ...errorsObj };
    if (name === "") {
      errorObj.name = "Name is Required";
      error = true;
    }

    if (email === "") {
      errorObj.email = "Email is Required";
      error = true;
    }

    if (password === "") {
      errorObj.password = "Password is Required";
      error = true;
    }

    setErrors(errorObj);

    if (!error) {
      console.log("form submit");
    }
  };

  return (
    <div className="signup">
      {/* <h1 className="signup">{selector.email} Sign Up</h1> */}

      <form className="signup_form" onSubmit={(e) => onSignUp(e)}>
        <div className="name_input">
          <label>
            <b>Name</b>
          </label>
          <div className="ni">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {errors.name && <div>{errors.name}</div>}
        </div>

        <div className="email_input">
          <label>
            <b>Email</b>
          </label>
          <div className="ei">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {errors.email && <div>{errors.email}</div>}
        </div>

        <div className="password_input">
          <label>
            <b>Password</b>
          </label>
          <div className="pi">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errors.password && <div>{errors.password}</div>}
        </div>

        <Link to={"/course"}>
          <button type="submit" className="signup_button">
            Sign Up
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SignUp;
