"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePlan } from "@/context/PlanContext";
import { FiClock, FiCheck, FiX, FiChevronDown } from "react-icons/fi";
import { FaFire, FaStar } from "react-icons/fa";

const MyPlanContainer = () => {
  const {
    todayPlan = [],
    savedPlan = [],
    removeFromTodayPlan,
    removeFromSaved,
    markAsDone,
  } = usePlan();

  const [activeTab, setActiveTab] = useState("today");
  const [sortBy, setSortBy] = useState("duration");

  const currentList = activeTab === "today" ? todayPlan : savedPlan;

  const totalExercises = currentList.length;

  const totalMinutes = currentList.reduce(
    (acc, cur) => acc + (cur.duration || 0),
    0
  );

  const totalCalories = currentList.reduce(
    (acc, cur) => acc + (cur.caloriesBurned || 0),
    0
  );

  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === "duration") {
      return (a.duration || 0) - (b.duration || 0);
    }

    if (sortBy === "calories") {
      return (a.caloriesBurned || 0) - (b.caloriesBurned || 0);
    }

    if (sortBy === "rating") {
      return (b.rating || 0) - (a.rating || 0);
    }

    return 0;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <h1 className="mb-2 text-[30px] font-bold uppercase tracking-tight text-white">
        MY PLAN
      </h1>

      <p className="mb-6 font-inter text-[14px] font-normal text-[#8A92A0]">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      {/* Stats */}
      <div className="mb-10 grid grid-cols-3 rounded-[16px] border border-[#232732] bg-[#13161D] p-6 text-left">
        <div className="border-r border-[#232732] pr-4">
          <span className="mb-2 block font-inter text-[12px] font-normal text-[#8A92A0]">
            Exercises
          </span>

          <span className="text-[36px] font-bold text-[#CCFF00]">
            {totalExercises}
          </span>
        </div>

        <div className="border-r border-[#1F242D] px-6">
          <span className="mb-2 block font-inter text-[12px] font-normal text-[#8A92A0]">
            Minutes
          </span>

          <span className="text-[36px] font-bold text-white">
            {totalMinutes}
          </span>
        </div>

        <div className="pl-6">
          <span className="mb-2 block font-inter text-[12px] font-normal text-[#8A92A0]">
            Calories
          </span>

          <span className="text-[36px] font-bold text-white">
            {totalCalories}
          </span>
        </div>
      </div>

      {/* Tabs & Sort */}
      <div className="mb-10 flex items-center justify-between">
        <div className="flex items-center gap-1 rounded-[12px] border border-[#232732] bg-[#13161D] p-1.5">
          <button
            onClick={() => setActiveTab("today")}
            className={`rounded-[8px] px-4 py-2 font-inter text-[12px] font-normal transition-all ${
              activeTab === "today"
                ? "bg-[#1C212B] text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Today's Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`rounded-[8px] px-4 py-2 font-inter text-[12px] font-bold transition-all ${
              activeTab === "saved"
                ? "bg-[#1C212B] text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Saved
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-inter text-[12px] text-[#8A92A0]">
            Sort By
          </span>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="cursor-pointer appearance-none rounded-lg border border-[#1F242D] bg-[#0D0F12] px-7 py-3 pr-8 font-inter text-[12px] font-normal text-white outline-none"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>

            <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[19px] text-[#8A92A0]" />
          </div>
        </div>
      </div>

      {/* Content Area */}
      {sortedList.length === 0 ? (
        /* Empty State */
        <div className="rounded-2xl border border-dashed border-[#1F242D] bg-[#0D0F12] px-4 py-24 text-center">
          <h3 className="mb-3 text-base font-bold uppercase tracking-wide text-white sm:text-[20px]">
            NOTHING HERE YET
          </h3>

          <p className="mb-6 font-inter text-[12px] font-normal text-[#A1A1AA]">
            Browse the library and add a lift to get today moving.
          </p>

          <Link
            href="/"
            className="inline-block rounded-full bg-[#C2F800] px-6 py-2.5 font-inter text-[12px] font-semibold text-black shadow-lg transition-all hover:bg-[#b0e300]"
          >
            Go To Workouts
          </Link>
        </div>
      ) : (
        /* Card Items */
        <div className="space-y-4">
          {sortedList.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-between gap-4 rounded-[16px] border border-[#232732] bg-[#13161D] p-4 sm:flex-row"
            >
              {/* Image & Details */}
              <div className="flex w-full items-center gap-4 sm:w-auto">
                <div className="relative h-[80px] w-[130px] shrink-0 overflow-hidden rounded-xl bg-[#181C23]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h4 className="mb-1.5 text-[16px] font-bold uppercase tracking-wider text-white sm:text-base">
                    {item.name}
                  </h4>

                  <p className="mb-2 font-inter text-[12px] font-semibold text-[#8A92A0]">
                    {item.equipment}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1.5 font-inter text-[12px] font-normal text-[#D1D5DB]">
                      <FiClock className="text-[13px] text-[#CCFF00]" />
                      {item.duration} min
                    </span>

                    <span className="flex items-center gap-1.5 font-inter text-[12px] font-normal text-[#D1D5DB]">
                      <FaFire className="text-[13px] text-[#CCFF00]" />
                      {item.caloriesBurned} kcal
                    </span>

                    <span className="flex items-center gap-1.5 font-inter text-[12px] font-normal text-[#D1D5DB]">
                      <FaStar className="text-[13px] text-[#CCFF00]" />
                      {item.rating}
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex w-full items-center justify-end gap-3 sm:w-auto">
                <Link
                  href={`/workout/${item.id}`}
                  className="rounded-xl border border-[#374151] bg-[#13161D] px-6 py-3 font-inter text-[12px] font-normal text-white transition-all hover:bg-[#222730]"
                >
                  View Details
                </Link>

                {activeTab === "today" ? (
                  <div className="flex items-center gap-3">
                    {/* Mark as Done */}
                    <button
                      onClick={() => markAsDone(item.id)}
                      className="flex items-center gap-1.5 rounded-xl bg-[#C2F800] px-6 py-3 font-inter text-[12px] font-semibold text-black transition-all hover:bg-[#b0e300]"
                    >
                      <FiCheck className="text-[15px] stroke-[3]" />
                      Mark as Done
                    </button>

                    {/* Remove */}
                    <button
                      onClick={() => removeFromTodayPlan(item.id)}
                      className="p-2 text-[#6B7280] transition-colors hover:text-[#C2F800]"
                      title="Remove"
                    >
                      <FiX className="text-base" />
                    </button>
                  </div>
                ) : (
                  /* Remove from Saved */
                  <button
                    onClick={() => removeFromSaved(item.id)}
                    className="p-1 text-[#6B7280] transition-colors hover:text-[#C2F800]"
                    title="Remove from saved"
                  >
                    <FiX className="text-base" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPlanContainer;