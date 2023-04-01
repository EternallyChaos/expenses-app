"use client";

import { createContext, useContext, useState } from "react";

const languageCollection = {
  en: {
    setBudget: "Set Budget",
    saveButton: "Save",
    ExpenseBudget: "Budget",
    ExpenseTotal: "Total",
    ExpenseRemaining: "Remaining",
    itemList: "List of Items",
    formTitle: "Add Items",
    formName: "Name",
    formCost: "Cost",
  },
  de: {
    setBudget: "Budget festlegen",
    saveButton: "Speichern",
    ExpenseBudget: "Budget",
    ExpenseTotal: "Gesamt",
    ExpenseRemaining: "Verblieben",
    itemList: "Liste von Gegenständen",
    formTitle: "Elemente hinzufügen",
    formName: "Name",
    formCost: "Kosten",
  },
};

const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
  const [languageSelected, setLanguageSelected] = useState("en");

  <LanguageContext.Provider
    value={{
      state: {
        languages: languageCollection[languageSelected],
        languageSelected: languageSelected,
      },
      setLanguageSelected: setLanguageSelected,
    }}
  >
    {children}
  </LanguageContext.Provider>;
};

export const useLanguageContext = () => useContext(LanguageContext);
