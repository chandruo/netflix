import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import {LOGO} from "../utils/constant"
import { toggleSearch } from "../utils/gptSearchSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
 
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {}
  };
  const handleSearch = () => {
    dispatch(toggleSearch())
  }
  const isSearch = useSelector(state => state.gptSearch.searchEnabled)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="absolute w-screen bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img
        className="w-40 px-8 py-2 mx-auto md:mx-0"
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div>
           <button onClick={handleSearch} className="font-bold p-2 m-2 text-white bg-red-600 rounded-lg">
            {isSearch ?  "homepage" : "search"}
          </button>
          <button onClick={handleSignOut} className="font-bold p-2 m-2 text-white">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
