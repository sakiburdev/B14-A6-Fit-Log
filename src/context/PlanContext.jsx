"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const PlanContext = createContext({
  todayPlan: [],
  savedPlan: [],
  addToTodayPlan: () => {},
  addToSaved: () => {},
  removeFromTodayPlan: () => {},
  removeFromSaved: () => {},
  markAsDone: () => {},
});

export function PlanProvider({ children }) {
  const [todayPlan, setTodayPlan] = useState([]);
  const [savedPlan, setSavedPlan] = useState([]);

  useEffect(() => {
    const localToday = localStorage.getItem("fitlog_todayPlan");
    const localSaved = localStorage.getItem("fitlog_savedPlan");

    if (localToday) {
      setTodayPlan(JSON.parse(localToday));
    }

    if (localSaved) {
      setSavedPlan(JSON.parse(localSaved));
    }
  }, []);

  const addToTodayPlan = (workout) => {
    const exists = todayPlan.find((item) => item.id === workout.id);

    if (exists) {
      toast.info("Already in your Plan");
      return;
    }

    const updated = [...todayPlan, workout];

    setTodayPlan(updated);
    localStorage.setItem("fitlog_todayPlan", JSON.stringify(updated));

    toast.success("Added to today's plan");
  };

  const removeFromTodayPlan = (id) => {
    const itemToRemove = todayPlan.find((item) => item.id === id);
    const updated = todayPlan.filter((item) => item.id !== id);

    setTodayPlan(updated);
    localStorage.setItem("fitlog_todayPlan", JSON.stringify(updated));

    if (itemToRemove) {
      toast.error("Removed from today's plan");
    }
  };

  const addToSaved = (workout) => {
    const exists = savedPlan.find((item) => item.id === workout.id);

    if (exists) {
      toast.info("Already in your saved list");
      return;
    }

    const updated = [...savedPlan, workout];

    setSavedPlan(updated);
    localStorage.setItem("fitlog_savedPlan", JSON.stringify(updated));

    toast.success("Saved for later");
  };

  const removeFromSaved = (id) => {
    const itemToRemove = savedPlan.find((item) => item.id === id);
    const updated = savedPlan.filter((item) => item.id !== id);

    setSavedPlan(updated);
    localStorage.setItem("fitlog_savedPlan", JSON.stringify(updated));

    if (itemToRemove) {
      toast.error("Removed from Saved");
    }
  };

  const markAsDone = (id) => {
    const updated = todayPlan.filter((item) => item.id !== id);

    setTodayPlan(updated);
    localStorage.setItem("fitlog_todayPlan", JSON.stringify(updated));

    toast.success("Workout logged - nice work");
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
        markAsDone,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export const usePlan = () => useContext(PlanContext);