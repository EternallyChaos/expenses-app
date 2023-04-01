"use client";

import { ExpenseContextProvider } from "./AppContext";

export default function InfoLayout({ children }) {
  return (
    <>
      <main className="font-montserrat">
        <ExpenseContextProvider>{children}</ExpenseContextProvider>
      </main>
    </>
  );
}
