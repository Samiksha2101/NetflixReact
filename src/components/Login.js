import React, { useState, useRef } from "react";
import Header from "./Header";
import validate, { validateName } from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const toggleSignIn = () => setIsSignIn(!isSignIn);
  const email = useRef();
  const password = useRef();
  const name = useRef();
  const submitForm = () => {
    let message = "";
    if (isSignIn) {
      message = validate(
        email.current.value,
        password.current.value
        // name.current.value
      );
    } else {
      message = validateName(
        email.current.value,
        password.current.value,
        name.current.value
      );
      console.log(name);
    }
    setErrorMsg(message);
    console.log(message);
    // console.log(name.current.value);
  };

  return (
    <div>
      <Header />
      <div>
        <div className="absolute">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_large.jpg"
            alt="bg-img"
          ></img>
        </div>
        <div className="absolute bg-black bg-opacity-50 h-full w-full">
          <div className="absolute bg-black bg-opacity-80 w-[400px] left-0 right-0 mx-auto mt-24">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="my-10 mx-14 text-white  mt-16"
            >
              <h1 className="text-2xl font-bold ">
                {isSignIn ? "Sign In" : "Sign Up"}
              </h1>
              {!isSignIn ? (
                <input
                  ref={name}
                  className="bg-gray-800  mb-1 mt-9 p-3 w-full border border-gray-500 bg-transparent rounded-md"
                  type="text"
                  placeholder="Full Name"
                ></input>
              ) : null}
              <input
                ref={email}
                className="bg-gray-800 mt-7 my-4 p-3 w-full border border-gray-500 bg-transparent rounded-md"
                type="text"
                placeholder="Email"
              ></input>
              <input
                ref={password}
                className="bg-gray-800 my-4 p-3 w-full border border-gray-500 bg-transparent rounded-md"
                type="text"
                placeholder="Password"
              ></input>
              {errorMsg && <p className="text-red-500">{errorMsg}</p>}
              <button
                className="bg-red-600 my-3 p-2 w-full rounded-lg"
                onClick={submitForm}
              >
                {isSignIn ? "Sign In" : "Sign Up"}
              </button>
              <p onClick={toggleSignIn} className="cursor-pointer ">
                {isSignIn
                  ? "New to Netflix? Sign up now."
                  : "Already Registered? Sign Up now."}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
