import React, { useState, useRef } from "react";
import Header from "./Header";
import validate, { validateName } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { BG_IMG, PROFILE_IMG } from "../utils/Constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const toggleSignIn = () => setIsSignIn(!isSignIn);
  const email = useRef();
  const password = useRef();
  const name = useRef();
  const dispatch = useDispatch();
  const submitForm = () => {
    let message = "";
    if (isSignIn) {
      message = validate(email.current.value, password.current.value);
      setErrorMsg(message);
      if (message) return null;
      console.log("In sign In " + email.current.value + " " + message);
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = auth.currentUser;
          console.log(user.displayName);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + errorMessage);
        });
    } else {
      message = validateName(
        email.current.value,
        password.current.value,
        name.current.value
      );
      console.log("In sign up" + name.current.value + " " + message);
      setErrorMsg(message);
      if (message) return null;
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PROFILE_IMG,
          })
            .then(() => {
              // Profile updated!
              const { uid, displayName, email } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  displayName: displayName,
                  email: email,
                })
              );
              console.log(auth.currentUser);
            })
            .catch((error) => {
              // An error occurred
              setErrorMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div>
        <div className="absolute">
          <img src={BG_IMG} alt="bg-img" className="h-screen w-screen  "></img>
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
