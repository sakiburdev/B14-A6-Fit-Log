"use client";

import { createContext, useContext, useState, useEffect } from "react";

const PlanContext = createContext({
  todayPlan: [],
  savedPlan: [],
  addToTodayPlan: () => {},
  addToSaved: () => {},
  removeFromTodayPlan: () => {},
  removeFromSaved: () => {},
});

export function PlanProvider({ children }) {
  const [todayPlan, setTodayPlan] = useState([]);
  const [savedPlan, setSavedPlan] = useState([]);

  // LocalStorage data load
  useEffect(() => {
    const localToday = localStorage.getItem("fitlog_todayPlan");
    const localSaved = localStorage.getItem("fitlog_savedPlan");

    if (localToday) setTodayPlan(JSON.parse(localToday));
    if (localSaved) setSavedPlan(JSON.parse(localSaved));
  }, []);

  // LocalStorage data saved
  const addToTodayPlan = (workout) => {
    if (!todayPlan.find((item) => item.id === workout.id)) {
      const updated = [...todayPlan, workout];
      setTodayPlan(updated);
      localStorage.setItem("fitlog_todayPlan", JSON.stringify(updated));
    }
  };

  const removeFromTodayPlan = (id) => {
    const updated = todayPlan.filter((item) => item.id !== id);
    setTodayPlan(updated);
    localStorage.setItem("fitlog_todayPlan", JSON.stringify(updated));
  };

  // LocalStorage data saved
  const addToSaved = (workout) => {
    if (!savedPlan.find((item) => item.id === workout.id)) {
      const updated = [...savedPlan, workout];
      setSavedPlan(updated);
      localStorage.setItem("fitlog_savedPlan", JSON.stringify(updated));
    }
  };

  const removeFromSaved = (id) => {
    const updated = savedPlan.filter((item) => item.id !== id);
    setSavedPlan(updated);
    localStorage.setItem("fitlog_savedPlan", JSON.stringify(updated));
  };

  return (
    <PlanContext.Provider
      value={{
        todayPlan,
        savedPlan,
        addToTodayPlan,
        addToSaved,
        removeFromTodayPlan,
        removeFromSaved,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export const usePlan = () => useContext(PlanContext);