import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-[#1A1D24] bg-[#0B0C0E] py-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <Image
            src={logoImg}
            alt="Footer Logo"
            width={24}
            height={24}
            className="h-6 w-6 object-contain"
          />

          <span className="font-sans text-[14px] font-bold tracking-tight text-white transition-colors group-hover:text-[#C2F800]">
            FITLOG
          </span>
        </Link>

        <p className="font-inter text-[12px] font-medium text-[#6B7280]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;