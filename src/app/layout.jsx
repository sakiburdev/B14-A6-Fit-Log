import "./globals.css";
import { Oswald, Inter } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
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

      <body className="font-sans min-h-full flex flex-col bg-[#0C0D10]">
        
        <PlanProvider>
          {/* Global Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {children}
          </main>

          {/* toast add */}
          <ToastContainer
            position="bottom-right"
            autoClose={2500}
            theme="dark"
          />
        </PlanProvider>
         

      </body>
    </html>
  );
}