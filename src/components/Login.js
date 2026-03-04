import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [error, setError] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const handleToggle = () => {
    setIsSignInForm(!isSignInForm);
    setError(null);
  };
  const handlesubmit = () => {
    setError(null);
    if (!isSignInForm) {
      if (!name.current.value.trim()) {
        setError("Please enter your name");
        return;
      }
    }
    const errMsg = checkValidate(email.current.value, password.current.value);
    setError(errMsg);

    if (errMsg) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          }).then(() => {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(
              addUser({ uid: uid, email: email, displayName: displayName }),
            );
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
        });
    }
  };
  return (
    <div className="relative flex center">
      <Header></Header>
      <img
        className="h-screen w-screen"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/5eb03855-b753-4788-b9b3-0cc29e3d2891/web/IN-en-20260223-TRIFECTA-perspective_7bcba0fc-d5a5-42f6-b4ed-2ca56a458c61_medium.jpg"
        alt="background"
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute top-0 bg-black  w-3/12 mx-auto right-0 left-0 my-20 p-8 rounded-xl bg-opacity-85"
      >
        <h1 className="font-bold text-3xl py-4 text-white ">
          {isSignInForm ? "Sign In" : "Sign UP"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            className="my-4 py-2 w-full bg-gray-600"
            type="text"
            placeholder="Full name"
          ></input>
        )}
        <input
          ref={email}
          className="my-4 py-2 w-full bg-gray-600"
          type="text"
          placeholder="Email"
        ></input>
        <input
          ref={password}
          className="my-4 py-2 w-full bg-gray-600"
          type="password"
          placeholder="password"
        ></input>
        <p className="text-red-600">{error}</p>
        <button className="my-4 py-2 bg-red-700 w-full" onClick={handlesubmit}>
          {isSignInForm ? "Sign In" : "Sign UP"}
        </button>

        <p className="text-white cursor-pointer" onClick={handleToggle}>
          {isSignInForm
            ? "New to Netflix? Sign Up"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
