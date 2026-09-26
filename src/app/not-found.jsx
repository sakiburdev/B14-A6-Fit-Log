"use client";
import Link from "next/link";
import { FiArrowLeft, FiHome } from "react-icons/fi";

const NotFound = () => {
  return (
    <main className="flex min-h-[calc(100vh-64px)] items-center justify-center overflow-hidden bg-[#0C0D10] px-4 py-16">
      <div className="relative w-full max-w-2xl text-center">
        {/* Background Glow */}
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C2F800]/10 blur-[100px]" />

        {/* 404 */}
        <div className="relative">
          <p className="mb-3 font-inter text-[12px] font-semibold uppercase tracking-[0.35em] text-[#C2F800]">
            Page Not Found
          </p>

          <h1 className="font-sans text-[110px] font-black leading-none tracking-[-0.06em] text-white sm:text-[150px]">
            4<span className="text-[#C2F800]">0</span>4
          </h1>

          {/* Message */}
          <h2 className="mt-6 text-[24px] font-bold uppercase tracking-tight text-white sm:text-[30px]">
            Lost your way?
          </h2>

          <p className="mx-auto mt-3 max-w-md font-inter text-[14px] leading-6 text-[#8A92A0]">
            The page you are looking for does not exist or may have been
            moved. Let&apos;s get you back to your workout.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="flex items-center gap-2 rounded-xl bg-[#C2F800] px-6 py-3 font-inter text-[13px] font-semibold text-black transition-all duration-200 hover:bg-[#b0e300] hover:shadow-[0_0_25px_rgba(194,248,0,0.18)]"
            >
              <FiHome className="text-[16px]" />
              Back to Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 rounded-xl border border-[#2A2F38] bg-[#13161D] px-6 py-3 font-inter text-[13px] font-medium text-white transition-colors hover:border-[#3A404B] hover:bg-[#1A1E25]"
            >
              <FiArrowLeft className="text-[16px]" />
              Go Back
            </button>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="relative mx-auto mt-12 h-px w-32 overflow-hidden bg-[#1C1F26]">
          <div className="h-full w-1/2 bg-[#C2F800]" />
        </div>
      </div>
    </main>
  );
};

export default NotFound;