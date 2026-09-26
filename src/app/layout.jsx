import "./globals.css";

import { Oswald, Inter } from "next/font/google";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

import { PlanProvider } from "@/context/PlanContext";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Fit-Log",
  description: "Track your workouts, log sets, and manage your daily plan.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#0C0D10] font-sans">
        <PlanProvider>
          {/* Global Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="container mx-auto flex-1 px-4 py-6 sm:px-6 lg:px-8">
            {children}
          </main>

          {/* Toast */}
          <ToastContainer
            position="top-right"
            autoClose={2500}
            theme="dark"
          />
        </PlanProvider>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}