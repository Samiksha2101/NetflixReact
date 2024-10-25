import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { LOGO, USER_AVTAR } from "../utils/Constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        dispatch(
          addUser({
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        removeUser();
        navigate("/");
        // ...
      }
    });

    //unsubscribe when component will unmount
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute z-30 flex justify-between w-full">
      <img className="w-60" src={LOGO} alt="logo"></img>
      {user && (
        <div className="flex items-center">
          <img className="h-8 w-8 mr-2" src={USER_AVTAR} alt="userAvtar"></img>
          <p className="mr-2">{user.displayName}</p>
          <button
            className="font-bold text-gray-400  mr-3"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
