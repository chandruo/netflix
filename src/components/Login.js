import Header from "./Header";
import {useState} from "react"

const Login = () => {
    const[isSignInForm, setIsSignInForm] = useState(true)
    const handleToggle = () => {
        setIsSignInForm(!isSignInForm)
    }
  return (
    <div className="relative flex center">
      <Header></Header>
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/5eb03855-b753-4788-b9b3-0cc29e3d2891/web/IN-en-20260223-TRIFECTA-perspective_7bcba0fc-d5a5-42f6-b4ed-2ca56a458c61_medium.jpg"
        alt="background"
      />
      <form className="absolute top-0 bg-black  w-3/12 mx-auto right-0 left-0 my-20 p-8 rounded-xl bg-opacity-85">
        <h1 className="font-bold text-3xl py-4 text-white ">{isSignInForm ? "Sign In" : "Sign UP"}</h1>
        {!isSignInForm && <input
          className="my-4 py-2 w-full bg-gray-600"
          type="text"
          placeholder="Full name"
        ></input>}
        <input
          className="my-4 py-2 w-full bg-gray-600"
          type="text"
          placeholder="Email"
        ></input>
        <input
          className="my-4 py-2 w-full bg-gray-600"
          type="password"
          placeholder="password"
        ></input>
        <button className="my-4 py-2 bg-red-700 w-full">{isSignInForm ? "Sign In" : "Sign UP"}</button>
        <p className="text-white cursor-pointer" onClick={handleToggle}>{isSignInForm ? "New to Netflix? Sign Up" : "Already registered? Sign In Now"}</p>
      </form>
    </div>
  );
};

export default Login;
