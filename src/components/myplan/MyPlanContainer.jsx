"use client";
import { useState } from "react";
import { usePlan } from "@/context/PlanContext";
import Image from "next/image";
import Link from "next/link";
import { FiClock, FiCheck, FiX, FiChevronDown } from "react-icons/fi";
import { FaFire, FaStar } from "react-icons/fa";

const MyPlanContainer = () => {
  const {
    todayPlan = [],
    savedPlan = [],
    removeFromTodayPlan,
    removeFromSaved,
  } = usePlan();
  const [activeTab, setActiveTab] = useState("today");
  const [sortBy, setSortBy] = useState("duration");

  const currentList = activeTab === "today" ? todayPlan : savedPlan;

  const totalExercises = currentList.length;
  const totalMinutes = currentList.reduce(
    (acc, cur) => acc + (cur.duration || 0),
    0,
  );
  const totalCalories = currentList.reduce(
    (acc, cur) => acc + (cur.caloriesBurned || 0),
    0,
  );

  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === "duration") return (a.duration || 0) - (b.duration || 0);
    if (sortBy === "calories")
      return (a.caloriesBurned || 0) - (b.caloriesBurned || 0);
    if (sortBy === "rating") return (b.rating || 0) - (a.rating || 0);
    return 0;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <h1 className="text-[30px] font-bold uppercase text-white tracking-tight mb-2">
        MY PLAN
      </h1>

      <p className="text-[#8A92A0] text-[14px] font-inter font-normal mb-6">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="bg-[#13161D] border border-[#232732] rounded-[16px] p-6 grid grid-cols-3 mb-10 text-left">
        <div className="border-r border-[#232732] pr-4">
          <span className="text-[12px] text-[#8A92A0] font-normal font-inter block mb-2">
            Exercises
          </span>
          <span className="text-[36px] font-bold text-[#CCFF00]">
            {totalExercises}
          </span>
        </div>

        <div className="border-r border-[#1F242D] px-6">
          <span className="text-[12px] text-[#8A92A0] font-normal font-inter block mb-2">
            Minutes
          </span>
          <span className="text-[36px] font-bold text-white">
            {totalMinutes}
          </span>
        </div>

        <div className="pl-6">
          <span className="text-[12px] text-[#8A92A0] font-normal font-inter block mb-2">
            Calories
          </span>
          <span className="text-[36px] font-bold text-white">
            {totalCalories}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between mb-10">
        <div className="bg-[#13161D] p-1.5 rounded-[12px] border border-[#232732] flex items-center gap-1">
          <button
            onClick={() => setActiveTab("today")}
            className={`px-4 py-2 text-[12px] text-[#8A92A0] font-normal font-inter rounded-[8px] transition-all ${
              activeTab === "today"
                ? "bg-[#1C212B] text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Today's Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`px-4 py-2 text-[12px] font-bold font-inter rounded-[8px] transition-all ${activeTab === "saved" ? "bg-[#1C212B] text-white" : "text-gray-400 hover:text-white"}`}
          >
            Saved
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[12px] font-inter text-[#8A92A0]">Sort By</span>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-[#0D0F12] border border-[#1F242D] text-white text-[12px] font-inter font-normal px-7 py-3 pr-8 rounded-lg outline-none cursor-pointer"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
            <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8A92A0] text-[19px] pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Content Area */}
      {sortedList.length === 0 ? (
        /* Empty State Screen */
        <div className="bg-[#0D0F12] border border-dashed border-[#1F242D] rounded-2xl py-24 px-4 text-center">
          <h3 className="text-base  sm:text-[20px] font-bold uppercase text-white mb-3 tracking-wide">
            NOTHING HERE YET
          </h3>
          <p className="text-[#A1A1AA] text-[12px] font-inter font-normal mb-6">
            Browse the library and add a lift to get today moving.
          </p>
          <Link
            href="/"
            className="inline-block bg-[#C2F800] text-black font-semibold text-[12px] font-inter px-6 py-2.5 rounded-full hover:bg-[#b0e300] transition-all shadow-lg"
          >
            Go To Workouts
          </Link>
        </div>
      ) : (
        /* Card Items List */
        <div className="space-y-4">
          {sortedList.map((item) => (
            <div
              key={item.id}
              className="bg-[#13161D] border border-[#232732] rounded-[16px] p-4 flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              {/* Image & Details */}
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="relative w-[130px] h-[80px] shrink-0 rounded-xl overflow-hidden bg-[#181C23]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[16px] sm:text-base text-white uppercase tracking-wider mb-1.5">
                    {item.name}
                  </h4>
                  <p className="text-[#8A92A0] text-[12px] font-inter font-semibold mb-2">
                    {item.equipment}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="text-[#D1D5DB] flex items-center gap-1.5 font-normal font-inter text-[12px]">
                      <FiClock className="text-[#CCFF00] text-[13px]" />{" "}
                      {item.duration} min
                    </span>

                    <span className="text-[#D1D5DB] flex items-center gap-1.5 font-normal font-inter text-[12px]">
                      <FaFire className="text-[#CCFF00] text-[13px]" />{" "}
                      {item.caloriesBurned} kcal
                    </span>

                    <span className="text-[#D1D5DB] flex items-center gap-1.5 font-normal font-inter text-[12px]">
                      <FaStar className="text-[#CCFF00] text-[13px]" />{" "}
                      {item.rating}
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions Right */}
              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <Link
                  href={`/workout/${item.id}`}
                  className="bg-[#13161D] hover:bg-[#222730] border border-[#374151] text-white text-[12px] font-normal font-inter px-6 py-3 rounded-xl transition-all"
                >
                  View Details
                </Link>

                {activeTab === "today" ? (
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => removeFromTodayPlan(item.id)}
                      className="bg-[#C2F800] hover:bg-[#b0e300] text-black text-[12px] font-semibold font-inter px-6 py-3 rounded-xl transition-all flex items-center gap-1.5"
                    >
                      <FiCheck className="text-[15px] stroke-[3]" /> Mark as
                      Done
                    </button>

                    <button
                      onClick={() => removeFromTodayPlan(item.id)}
                      className="text-[#6B7280] hover:text-[#C2F800] p-2 transition-colors"
                      title="Remove"
                    >
                      <FiX className="text-base" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => removeFromSaved(item.id)}
                    className="text-[#6B7280] hover:text-[#C2F800] p-1 transition-colors"
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