import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function JournalForm({ user }) {
  const [todayWork, setTodayWork] = useState("");
  const [tomorrowGoals, setTomorrowGoals] = useState("");
  const [mood, setMood] = useState("neutral");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!todayWork) return alert("Please enter today's work");

    try {
      await addDoc(collection(db, "journals"), {
        uid: user.uid,
        todayWork,
        tomorrowGoals,
        mood,
        createdAt: serverTimestamp(),
      });
      setTodayWork("");
      setTomorrowGoals("");
      setMood("neutral");
      alert("Entry saved!");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-white rounded-xl shadow-lg mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <i className="fas fa-pen-fancy text-blue-600 mr-3"></i>
        Today's Journal Entry
      </h2>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <i className="fas fa-tasks text-blue-500 mr-2"></i>
          Aaj kya kiya?
        </label>
        <textarea
          value={todayWork}
          onChange={(e) => setTodayWork(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
          rows={4}
          required
          placeholder="Describe what you coded, learned, or built today..."
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <i className="fas fa-bullseye text-green-500 mr-2"></i>
          Kal ke goals
        </label>
        <textarea
          value={tomorrowGoals}
          onChange={(e) => setTomorrowGoals(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
          rows={2}
          placeholder="What do you plan to work on tomorrow?"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          <i className="fas fa-smile text-yellow-500 mr-2"></i>
          Mood
        </label>
        <div className="flex space-x-6 justify-center">
          <button
            type="button"
            onClick={() => setMood("happy")}
            className={`mood-btn text-4xl hover:scale-110 transition duration-200 ${mood === "happy" ? "scale-125" : ""}`}
          >
            😊
          </button>
          <button
            type="button"
            onClick={() => setMood("neutral")}
            className={`mood-btn text-4xl hover:scale-110 transition duration-200 ${mood === "neutral" ? "scale-125" : ""}`}
          >
            😐
          </button>
          <button
            type="button"
            onClick={() => setMood("frustrated")}
            className={`mood-btn text-4xl hover:scale-110 transition duration-200 ${mood === "frustrated" ? "scale-125" : ""}`}
          >
            😞
          </button>
        </div>
      </div>
      <button 
        type="submit" 
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center shadow-md"
      >
        <i className="fas fa-save mr-2"></i>
        Save Today's Entry
      </button>
    </form>
  );
}