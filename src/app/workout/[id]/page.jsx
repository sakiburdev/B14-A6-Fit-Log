import Image from "next/image";
import { notFound } from "next/navigation";
import DetailActionButtons from "./DetailActionButtons";

async function getSingleWorkout(id) {
  try {
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`, {
      cache: "no-store",
    });

    if (res.ok) {
      const data = await res.json();
      const workout = data?.data || data;

      if (workout && String(workout.id) === String(id)) {
        return workout;
      }
    }

    const allRes = await fetch("https://api.abcz.workers.dev/api/fitlog", {
      cache: "no-store",
    });

    if (allRes.ok) {
      const data = await allRes.json();
      const workouts = data?.data || data || [];

      return workouts.find((item) => String(item.id) === String(id)) || null;
    }

    return null;
  } catch {
    return null;
  }
}

const WorkoutDetailPage = async ({ params }) => {
  const { id } = await params;
  const workout = await getSingleWorkout(id);

  if (!workout) {
    notFound();
  }

  const badges =
    workout.muscleGroups?.length > 0
      ? workout.muscleGroups
      : workout.category
        ? workout.category.split(",").map((item) => item.trim())
        : workout.targetMuscle
          ? [workout.targetMuscle]
          : [];

  const instructions = Array.isArray(workout.instructions)
    ? workout.instructions
    : [];

  return (
    <div className="container mx-auto px-4 py-6 sm:py-1">
      <div className="grid grid-cols-1 items-start gap-6 md:gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Workout Image */}
        <div className="relative my-2.5 h-[320px] w-full overflow-hidden rounded-2xl border border-[#1F242D] bg-[#111318] sm:h-[480px] sm:rounded-3xl lg:h-[710px]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Workout Info */}
        <div>
          {/* Title */}
          <h1 className="mb-2 text-2xl font-bold uppercase leading-tight tracking-wide text-white sm:mb-3 sm:text-3xl lg:text-4xl">
            {workout.name}
          </h1>

          {/* Description */}
          <p className="mb-4 font-inter text-[16px] leading-relaxed text-[#9CA3AF] sm:mb-5">
            {workout.description}
          </p>

          {/* Badges */}
          {badges.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-2 sm:mb-8">
              {badges.map((badge, index) => (
                <span
                  key={index}
                  className="rounded-full bg-[#C2F800] px-3 py-1 font-inter text-[12px] font-semibold text-[#0F1115] sm:px-3.5"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}

          {/* Workout Specs */}
          <div className="mb-6 overflow-hidden rounded-xl border border-[#1F242D] bg-[#14171E] sm:mb-8 sm:rounded-2xl">
            <div className="flex items-center justify-between border-b border-[#1D222A] px-4 py-3 sm:px-5 sm:py-3.5">
              <span className="font-inter text-[12px] font-bold uppercase tracking-wider text-[#9CA3AF]">
                EQUIPMENT
              </span>

              <span className="text-right font-inter text-[14px] font-medium text-[#E5E7EB]">
                {workout.equipment}
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-[#1D222A] px-4 py-3 sm:px-5 sm:py-3.5">
              <span className="font-inter text-[12px] font-bold uppercase tracking-wider text-[#9CA3AF]">
                DIFFICULTY
              </span>

              <span className="text-right font-inter text-[14px] font-medium text-[#E5E7EB]">
                {workout.difficulty}
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-[#1D222A] px-4 py-3 sm:px-5 sm:py-3.5">
              <span className="font-inter text-[12px] font-bold uppercase tracking-wider text-[#9CA3AF]">
                SETS
              </span>

              <span className="text-right font-inter text-[14px] font-medium text-[#E5E7EB]">
                {workout.sets}
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-[#1D222A] px-4 py-3 sm:px-5 sm:py-3.5">
              <span className="font-inter text-[12px] font-bold uppercase tracking-wider text-[#9CA3AF]">
                REPS
              </span>

              <span className="text-right font-inter text-[14px] font-medium text-[#E5E7EB]">
                {workout.reps}
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-[#1D222A] px-4 py-3 sm:px-5 sm:py-3.5">
              <span className="font-inter text-[12px] font-bold uppercase tracking-wider text-[#9CA3AF]">
                DURATION
              </span>

              <span className="text-right font-inter text-[14px] font-medium text-[#E5E7EB]">
                {workout.duration} min
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-[#1D222A] px-4 py-3 sm:px-5 sm:py-3.5">
              <span className="font-inter text-[12px] font-bold uppercase tracking-wider text-[#9CA3AF]">
                CALORIES
              </span>

              <span className="text-right font-inter text-[14px] font-medium text-[#E5E7EB]">
                {workout.caloriesBurned} kcal
              </span>
            </div>

            <div className="flex items-center justify-between px-4 py-3 sm:px-5 sm:py-3.5">
              <span className="font-inter text-[12px] font-bold uppercase tracking-wider text-[#9CA3AF]">
                RATING
              </span>

              <span className="text-right font-inter text-[14px] font-medium text-[#E5E7EB]">
                {workout.rating}
              </span>
            </div>
          </div>

          {/* Instructions */}
          {instructions.length > 0 && (
            <div className="mb-6 sm:mb-8">
              <h3 className="mb-3 font-inter text-[16px] font-extrabold uppercase tracking-wider text-white sm:mb-4">
                INSTRUCTIONS
              </h3>

              <ol className="space-y-2.5 font-inter text-[14px] leading-relaxed text-[#D1D5DB] sm:space-y-3">
                {instructions.map((step, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="shrink-0">{index + 1}.</span>

                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Action Buttons */}
          <DetailActionButtons workout={workout} />
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailPage;