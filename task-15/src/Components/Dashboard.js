import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";

export default function Dashboard({ user }) {
  const [entries, setEntries] = useState([]);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    if (!user) return;

    const fetchEntries = async () => {
      const q = query(
        collection(db, "journals"),
        where("uid", "==", user.uid),
        orderBy("createdAt", "desc")
      );
      const querySnapshot = await getDocs(q);
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setEntries(data);
      calculateStreak(data);
    };

    fetchEntries();
  }, [user]);

  const calculateStreak = (entries) => {
    if (entries.length === 0) {
      setStreak(0);
      return;
    }

    const sorted = [...entries].sort(
      (a, b) => a.createdAt?.seconds - b.createdAt?.seconds
    );

    let count = 1;
    for (let i = sorted.length - 1; i > 0; i--) {
      const currentDate = new Date(sorted[i].createdAt.seconds * 1000);
      const prevDate = new Date(sorted[i - 1].createdAt.seconds * 1000);
      const diff = (currentDate - prevDate) / (1000 * 60 * 60 * 24);

      if (diff === 1) {
        count++;
      } else if (diff > 1) {
        break;
      }
    }
    setStreak(count);
  };

  const moodEmojis = {
    happy: "😊",
    neutral: "😐",
    frustrated: "😞",
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 text-center mb-8">
        <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
          <i className="fas fa-fire text-blue-600 text-xl"></i>
        </div>
        <h3 className={`text-2xl font-bold text-gray-800 ${streak > 0 ? "text-orange-500 streak-pulse" : ""}`}>
          {streak}
        </h3>
        <p className="text-gray-600">Day Streak</p>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <i className="fas fa-history text-purple-600 mr-3"></i>
        Your Journal Entries
      </h2>
      <div className="space-y-4">
        {entries.length > 0 ? (
          entries.map((entry) => (
            <div key={entry.id} className="entry-card bg-white rounded-xl shadow-lg p-6 hover:translate-y-[-2px] hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{moodEmojis[entry.mood] || "😐"}</span>
                  <span className="text-sm text-gray-500">{entry.createdAt?.toDate().toDateString()}</span>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">Aaj kya kiya:</h4>
                  <p className="text-gray-600">{entry.todayWork}</p>
                </div>
                {entry.tomorrowGoals && (
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">Kal ke goals:</h4>
                    <p className="text-gray-600">{entry.tomorrowGoals}</p>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-white rounded-xl shadow-lg">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <i className="fas fa-book-open text-gray-400 text-3xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No entries yet</h3>
            <p className="text-gray-500">Start your coding journey by adding your first journal entry!</p>
          </div>
        )}
      </div>
    </div>
  );
}