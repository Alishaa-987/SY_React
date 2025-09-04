import React, { useEffect } from "react";
import { auth } from "../firebase";
import { signInWithRedirect, getRedirectResult, signOut, GithubAuthProvider } from "firebase/auth";
import {useNavigate} from 'react-router-dom';
export default function Auth({ user, setUser }) {
  // 1. Create the provider instance here
  const provider = new GithubAuthProvider();
  const navigate = useNavigate();

  const signIn = () => {
    // 2. Pass the provider to signInWithRedirect
    signInWithRedirect(auth, provider);
  };

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result && result.user) {
          setUser(result.user);
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        console.error("Redirect sign-in error:", error.message);
      });
  }, [setUser]);

  const logOut = () => {
    signOut(auth)
      .then(() => setUser(null))
      .catch((error) => console.error("Sign out error:", error.message));
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {user ? (
        <div className="text-center">
          <p className="text-xl font-semibold mb-2">Welcome, {user.displayName || user.email}</p>
          <button 
            onClick={logOut} 
            className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-lg transition duration-200 shadow-md"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <button 
          onClick={signIn} 
          className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-8 rounded-lg transition duration-200 flex items-center shadow-lg"
        >
          <i className="fab fa-github text-xl mr-3"></i>
          Sign in with GitHub
        </button>
      )}
    </div>
  );
}