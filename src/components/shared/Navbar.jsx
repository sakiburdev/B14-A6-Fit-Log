"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { usePlan } from "@/context/PlanContext";
import logoImg from "@/assets/logo.png";

const Navbar = () => {
  const pathname = usePathname();
  const context = usePlan();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const todayPlan = context?.todayPlan || [];
  const savedPlan = context?.savedPlan || [];

  const isWorkoutsActive = pathname === "/";
  const isMyPlanActive = pathname === "/my-plan";

  return (
    <header className="bg-[#0D0F12] border-b border-[#1C1F26] shadow-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left side: Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src={logoImg}
            alt="Fit-log Logo"
            width={24}
            height={24}
            className="w-6 h-6 object-contain"
          />
          <span className="font-sans font-black text-white text-[18px] tracking-tight group-hover:text-[#C2F800] transition-colors">
            FITLOG
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-2 sm:gap-6 font-inter">
          <li>
            <Link
              href="/"
              className={`text-[12px] px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                isWorkoutsActive
                  ? "font-semibold text-[#C2F800] bg-[#1A2208] border border-[#C2F800]/20"
                  : "font-normal text-[#9CA3AF] hover:text-white hover:bg-[#111317]"
              }`}
            >
              Workouts
            </Link>
          </li>

          <li>
            <Link
              href="/my-plan"
              className={`text-[12px] px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                isMyPlanActive
                  ? "font-semibold text-[#C2F800] bg-[#1A2208] border border-[#C2F800]/20"
                  : "font-normal text-[#9CA3AF] hover:text-white hover:bg-[#111317]"
              }`}
            >
              My Plan
            </Link>
          </li>
        </ul>

        {/* Right side Badges */}
        <div className="flex items-center gap-1 sm:gap-3 text-[12px] font-inter">
          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 text-[#9CA3AF] hover:text-white transition-colors cursor-pointer py-1 px-2 rounded-md hover:bg-[#111317]"
          >
            <span>Plan</span>
            <span className="w-5 h-5 rounded-full bg-[#C2F800] text-black font-bold text-[11px] flex items-center justify-center">
              {isMounted ? todayPlan.length : 0}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 text-[#9CA3AF] hover:text-white transition-colors cursor-pointer py-1 px-2 rounded-md hover:bg-[#111317]"
          >
            <span>Saved</span>
            <span className="w-5 h-5 rounded-full bg-[#1F2937] text-white font-bold text-[11px] flex items-center justify-center border border-[#374151]">
              {isMounted ? savedPlan.length : 0}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
