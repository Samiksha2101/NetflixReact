import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { LOGO, SUPPORTED_LANG, USER_AVTAR } from "../utils/Constants";
import { removeMovies, toggleAction } from "../utils/geminiSlice";
import { changeLang } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const aiSearchBool = useSelector((store) => store.gemini.toggleGptSearch);
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
  const handleToggle = () => {
    dispatch(toggleAction());
    dispatch(removeMovies());
  };
  const changeLanguage = (e) => {
    dispatch(changeLang(e.target.value));
  };
  return (
    <div className="absolute z-30 flex flex-col md:flex-row w-full">
      <div>
        <img
          className="w-40 md:w-60 mx-auto md:mx-0"
          src={LOGO}
          alt="logo"
        ></img>
      </div>

      {user && (
        <div className="flex items-center md:justify-end justify-center w-full">
          <button className="bg-red-400 rounded p-1 m-2" onClick={handleToggle}>
            {aiSearchBool ? "Home" : "Gemini Search"}
          </button>
          {aiSearchBool && (
            <select
              className="p-1 bg-slate-600 text-white"
              onChange={(e) => changeLanguage(e)}
            >
              {SUPPORTED_LANG.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <img
            className="h-8 w-8 mx-2 hidden md:block"
            src={USER_AVTAR}
            alt="userAvtar"
          ></img>
          <p className="mr-2 text-white">{user.displayName}</p>
          <button
            className="font-bold text-black p-1 rounded  mr-3 bg-white opacity-80"
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
