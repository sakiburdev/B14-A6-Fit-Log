import Image from "next/image";
import Link from "next/link";
import heroImg from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="w-full mb-10">
      <div className="container mx-auto bg-[#1A1D24] border border-[#1F2937]/50 rounded-[16px] px-6 py-8 sm:px-10 sm:py-12 lg:px-16 lg:py-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Left side Content */}
        <div className="flex-1 text-center lg:text-left">
          <span className="block font-inter font-bold tracking-wider mb-3 text-[#C2F800] text-[11px] uppercase">
            WORKOUT LIBRARY
          </span>

          <h1 className="font-sans font-bold leading-[1.05] uppercase mb-4 text-white text-[32px] sm:text-[44px] lg:text-[56px] xl:text-[60px]">
            TRAIN WITH INTENT. LOG{" "}
            <span className="inline lg:block">EVERY SET.</span>
          </h1>

          <p className="font-inter font-normal text-[14px] sm:text-[16px] mb-8 text-[#9CA3AF] max-w-xl mx-auto lg:mx-0">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          <div>
            <Link
              href="#library"
              className="inline-block font-inter font-bold bg-[#C2F800] text-black px-6 py-3 rounded-md hover:bg-[#b0e300] transition-colors cursor-pointer text-[12px] uppercase tracking-wide"
            >
              BROWSE WORKOUTS
            </Link>
          </div>
        </div>

        {/* Right side Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative w-full max-w-[580px] h-[300px] sm:h-[400px] lg:h-[450px] rounded-xl overflow-hidden p-2 flex items-center justify-center">
            <Image
              src={heroImg}
              alt="Banner Workout Images"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 580px"
              className="object-contain rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
