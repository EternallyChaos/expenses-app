import "./globals.css";
import { Montserrat } from "next/font/google";
import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google";

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
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <div className="flex justify-center items-center">
          <div className="mx-2 p-2 flex flex-col gap-5  md:max-w-lg">
            <div className="flex justify-around items-center">
              <h1 className=" text-3xl text-center text-gray-700">
                Expense Tracker
              </h1>
            </div>
            <div>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
