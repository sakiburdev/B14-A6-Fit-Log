import Banner from "@/components/homepage/Banner";
import WorkoutLibrary from "@/components/homepage/WorkoutLibrary";

async function getWorkouts() {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch workouts");
    const data = await res.json();
    return data?.data || data || [];
  } catch (error) {
    console.error("Fetch Error:", error);
    return [];
  }
}

export default async function HomePage() {
  const workouts = await getWorkouts();

  return (
    <div className="py-6">
      <Banner/>
      <WorkoutLibrary initialWorkouts={workouts} />
    </div>
  );
}