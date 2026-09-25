import Image from "next/image";
import Link from "next/link";
import { LuClock, LuFlame, LuStar } from "react-icons/lu";

const WorkoutCard = ({ workout }) => {
  const badges =
    workout.muscleGroups && workout.muscleGroups.length > 0
      ? workout.muscleGroups
      : workout.category
        ? workout.category.split(",").map((c) => c.trim())
        : [workout.targetMuscle || "FITNESS"];

  return (
    <Link
      href={`/workout/${workout.id}`}
      className="bg-[#111318] border border-[#1D212A] rounded-[16px] hover:border-[#C2F800] transition-all group flex flex-col justify-between h-full" >
      <div>
        {/* Card Image */}
        <div className="relative w-full h-[260px] rounded-[16px] bg-[#181C23]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className=" object-cover rounded-t-[16px]"
          />
        </div>

        {/* Card Body */}
        <div className="p-5">
          
          {/* Category */}
          <div className="flex flex-wrap gap-3 mt-[15px] mb-4">
            {badges.map((badge, idx) => (
              <span
                key={idx}
                className="bg-[#C2F800] text-[#000000] text-[11px] font-bold font-inter tracking-wide uppercase px-2 py-0.5 rounded-full"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="font-bold text-[18px] text-white uppercase tracking-wide group-hover:text-[#C2F800] transition-colors mb-3 line-clamp-1">
            {workout.name}
          </h3>

          {/* Description */}
          <p className="text-[#9CA3AF] text-[12px] font-inter line-clamp-1 font-normal">
            {workout.equipment || workout.description}
          </p>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-5 pb-7 pt-3">
        <div className="border-t border-[#20242E] pt-4 flex items-center justify-start gap-6 text-xs">
          {/* Duration */}
          <div className="flex items-center gap-1.5">
            <LuClock className="text-sm text-[#C2F800]" />
            <span className="text-[#AF9C9C] font-normal font-inter">
              {workout.duration} min
            </span>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-1.5">
            <LuFlame className="text-sm text-[#C2F800]" />
            <span className="text-[#AF9C9C] font-normal font-inter">
              {workout.caloriesBurned} kcal
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1.5">
            <LuStar className="text-sm text-[#C2F800]" />
            <span className="text-[#AF9C9C] font-normal font-inter">
              {workout.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
