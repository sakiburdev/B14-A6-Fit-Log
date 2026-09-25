"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

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

  useEffect(() => {
    const localToday = localStorage.getItem("fitlog_todayPlan");
    const localSaved = localStorage.getItem("fitlog_savedPlan");
    if (localToday) setTodayPlan(JSON.parse(localToday));
    if (localSaved) setSavedPlan(JSON.parse(localSaved));
  }, []);

  const addToTodayPlan = (workout) => {
    const exists = todayPlan.find((item) => item.id === workout.id);
    if (exists) {
      toast.info(`"${workout.name}" is already in Today's Plan!`);
    } else {
      const updated = [...todayPlan, workout];
      setTodayPlan(updated);
      localStorage.setItem("fitlog_todayPlan", JSON.stringify(updated));
      toast.success(`Added "${workout.name}" to Today's Plan!`);
    }
  };

  const removeFromTodayPlan = (id) => {
    const itemToRemove = todayPlan.find((item) => item.id === id);
    const updated = todayPlan.filter((item) => item.id !== id);
    setTodayPlan(updated);
    localStorage.setItem("fitlog_todayPlan", JSON.stringify(updated));
    if (itemToRemove) toast.error(`Removed "${itemToRemove.name}" from Today's Plan`);
  };

  const addToSaved = (workout) => {
    const exists = savedPlan.find((item) => item.id === workout.id);
    if (exists) {
      toast.info(`"${workout.name}" is already saved!`);
    } else {
      const updated = [...savedPlan, workout];
      setSavedPlan(updated);
      localStorage.setItem("fitlog_savedPlan", JSON.stringify(updated));
      toast.success(`Saved "${workout.name}" to Bookmarks!`);
    }
  };

  const removeFromSaved = (id) => {
    const itemToRemove = savedPlan.find((item) => item.id === id);
    const updated = savedPlan.filter((item) => item.id !== id);
    setSavedPlan(updated);
    localStorage.setItem("fitlog_savedPlan", JSON.stringify(updated));
    if (itemToRemove) toast.error(`Removed "${itemToRemove.name}" from Saved`);
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