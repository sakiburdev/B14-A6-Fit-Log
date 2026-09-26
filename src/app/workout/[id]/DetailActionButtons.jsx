"use client";
import { usePlan } from "@/context/PlanContext";
import { LuCalendarPlus, LuBookmark } from "react-icons/lu";

const DetailActionButtons = ({ workout }) => {
  const { addToTodayPlan, addToSaved } = usePlan();

  return (
    <div className="mt-6 flex items-center gap-5">
      {/* Add Plan */}
      <button
        onClick={() => addToTodayPlan(workout)}
        className="flex items-center gap-2 rounded-xl bg-[#CCFF00] px-5 py-3 font-inter text-[14px] font-semibold text-[#0F1115] transition-colors hover:bg-[#b0e300]"
      >
        <LuCalendarPlus className="text-[#0F1115]" />
        <span>Add to today's plan</span>
      </button>

      {/* Save plan */}
      <button
        onClick={() => addToSaved(workout)}
        className="flex items-center gap-2 rounded-xl border border-[#374151] bg-[#0F1115] px-5 py-3 font-inter text-[14px] font-medium text-[#E5E7EB] transition-colors hover:bg-[#181C23]"
      >
        <LuBookmark className="text-[#E5E7EB]" />
        <span>Save for later</span>
      </button>
    </div>
  );
};

export default DetailActionButtons;