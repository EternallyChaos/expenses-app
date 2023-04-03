"use client";
import "./globals.css";
import { useState } from "react";
import { Montserrat } from "next/font/google";
import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";

const montserrat = Montserrat({
  weight: ["500", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export default function RootLayout({ children }) {
  const [darkmode, setDarkMode] = useState(false);

  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <div className={darkmode ? "dark" : ""}>
          <div className="flex justify-center items-start h-screen w-screen dark:bg-[#111213] bg-gray-100">
            <div className="mx-2 p-2 flex flex-col gap-5 w-xl md:max-w-lg">
              <div className="flex justify-around items-center gap-10">
                <Link
                  className="text-3xl text-center text-gray-700 dark:text-gray-300"
                  href={"/"}
                >
                  Project Section
                </Link>

                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkmode)}
                  className="curson-pointer text-2xl"
                />
              </div>
              <div>{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
