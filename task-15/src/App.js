import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import Auth from "./Components/Auth.js";
import JournalForm from "./Components/JournalForm.js";
import Dashboard from "./Components/Dashboard.js";
import "./index.css";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-8 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
          Developer Journal
        </h1>
        <p className="text-center text-xl text-gray-600 max-w-2xl mx-auto mb-12">
          Track your coding journey with GitHub authentication. Log your daily progress and build consistent development habits.
        </p>

        <Routes>
          {/* Login Page */}
          <Route
            path="/"
            element={
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 mb-8">
                <Auth user={user} setUser={setUser} />
              </div>
            }
          />

          {/* Dashboard Page (Protected) */}
          <Route
            path="/dashboard"
            element={
              user ? (
                <>
                  <JournalForm user={user} />
                  <Dashboard user={user} />
                </>
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
