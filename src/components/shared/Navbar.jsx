"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { usePlan } from "@/context/PlanContext";
import logoImg from "@/assets/logo.png";

const Navbar = () => {
  const pathname = usePathname();
  const { todayPlan = [], savedPlan = [] } = usePlan();

  const [menuOpen, setMenuOpen] = useState(false);

  const isWorkoutsActive = pathname === "/";
  const isMyPlanActive = pathname === "/my-plan";

  return (
    <header className="sticky top-0 z-50 border-b border-[#1C1F26] bg-[#0D0F12] shadow-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Left Side */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-xl text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <Image
              src={logoImg}
              alt="Fit-log Logo"
              width={24}
              height={24}
              className="h-6 w-6 object-contain"
            />

            <span className="font-sans text-[17px] font-black tracking-tight text-white transition-colors group-hover:text-[#C2F800] sm:text-[18px]">
              FITLOG
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-3 font-inter">
            <li>
              <Link
                href="/"
                className={`block rounded-full px-3.5 py-1.5 text-[12px] transition-colors ${
                  isWorkoutsActive
                    ? "border border-[#C2F800]/20 bg-[#1A2208] font-semibold text-[#C2F800]"
                    : "text-[#9CA3AF] hover:bg-[#111317] hover:text-white"
                }`}
              >
                Workouts
              </Link>
            </li>

            <li>
              <Link
                href="/my-plan"
                className={`block rounded-full px-3.5 py-1.5 text-[12px] transition-colors ${
                  isMyPlanActive
                    ? "border border-[#C2F800]/20 bg-[#1A2208] font-semibold text-[#C2F800]"
                    : "text-[#9CA3AF] hover:bg-[#111317] hover:text-white"
                }`}
              >
                My Plan
              </Link>
            </li>
          </ul>
        </nav>

        {/* Plan & Saved */}
        <div className="flex items-center gap-1 font-inter text-[11px] sm:gap-2 sm:text-[12px]">
          <Link
            href="/my-plan"
            className="flex items-center gap-1 rounded-md px-1.5 py-1 text-[#9CA3AF] transition-colors hover:bg-[#111317] hover:text-white sm:gap-1.5 sm:px-2"
          >
            <span>Plan</span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C2F800] text-[10px] font-bold text-black sm:text-[11px]">
              {todayPlan.length}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-1 rounded-md px-1.5 py-1 text-[#9CA3AF] transition-colors hover:bg-[#111317] hover:text-white sm:gap-1.5 sm:px-2"
          >
            <span>Saved</span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#374151] bg-[#1F2937] text-[10px] font-bold text-white sm:text-[11px]">
              {savedPlan.length}
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="border-t border-[#1C1F26] bg-[#0D0F12] px-4 py-3 lg:hidden">
          <div className="flex flex-col gap-2 font-inter">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={`rounded-lg px-4 py-3 text-[13px] transition-colors ${
                isWorkoutsActive
                  ? "bg-[#1A2208] font-semibold text-[#C2F800]"
                  : "text-[#9CA3AF] hover:bg-[#111317] hover:text-white"
              }`}
            >
              Workouts
            </Link>

            <Link
              href="/my-plan"
              onClick={() => setMenuOpen(false)}
              className={`rounded-lg px-4 py-3 text-[13px] transition-colors ${
                isMyPlanActive
                  ? "bg-[#1A2208] font-semibold text-[#C2F800]"
                  : "text-[#9CA3AF] hover:bg-[#111317] hover:text-white"
              }`}
            >
              My Plan
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;