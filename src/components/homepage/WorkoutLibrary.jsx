"use client";
import { useState } from "react";
import WorkoutCard from "./WorkoutCard";

const WorkoutLibrary = ({ initialWorkouts }) => {
  const [sortBy, setSortBy] = useState("id");

  const sortedWorkouts = [...initialWorkouts].sort((a, b) => {
    if (sortBy === "id") return Number(a.id) - Number(b.id);
    if (sortBy === "duration") return a.duration - b.duration;
    if (sortBy === "calories") return a.caloriesBurned - b.caloriesBurned;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <section id="library" className="w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
        <div>
          <h2 className="text-[30px] sm:text-3xl font-bold uppercase text-white tracking-wide">
            THE LIBRARY
          </h2>

          <p className="text-[#9CA3AF] font-inter font-normal text-xs sm:text-sm mt-2">
            Twelve lifts covering every major muscle group.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {sortedWorkouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
};

export default WorkoutLibrary;