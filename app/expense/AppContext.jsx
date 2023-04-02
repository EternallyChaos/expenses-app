"use client";

import { createContext, useContext, useReducer, useState } from "react";

// const localStorageUpdate = (state) => {
//   const [value, setValue] = useState(state);

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [key, value]);
//   useEffect(() => {
//     const stored = localStorage.getItem(key);
//     setValue(stored ? JSON.parse(stored) : state);
//   }, [state, key]);
// };

const ExpenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case "UPDATE_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };
    default:
      return state;
  }
};

let initialState = {
  budget: 2000,
  expenses: [
    { id: 1, name: "Cloths", cost: 1000 },
    { id: 2, name: "Groceries", cost: 600 },
    { id: 3, name: "Cold Drink", cost: 50 },
  ],
};

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
    inputMoney: "Amount",
    inputItem: "Item Name",
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
    inputMoney: "Menge",
    inputItem: "Artikelname",
  },
};

const ExpenseContext = createContext();

export const ExpenseContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ExpenseReducer, initialState);
  const [languageSelected, setLanguageSelected] = useState("en");

  return (
    <ExpenseContext.Provider
      value={{
        id: state.id,
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
        state: {
          languages: languageCollection[languageSelected],
          languageSelected: languageSelected,
        },
        setLanguageSelected: setLanguageSelected,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenseContext = () => useContext(ExpenseContext);
