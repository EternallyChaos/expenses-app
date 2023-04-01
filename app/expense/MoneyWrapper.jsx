"use client";

import { useState } from "react";
import { useExpenseContext } from "./AppContext";


export default function MoneyWrapper() {
  const [newbudget, setNewBudget] = useState();
  const { budget } = useExpenseContext();
  const { expenses } = useExpenseContext();
  const { dispatch } = useExpenseContext();

  const lang = useExpenseContext();
  const {
    setBudget,
    saveButton,
    ExpenseBudget,
    ExpenseTotal,
    ExpenseRemaining,
    inputMoney,
  } = lang.state.languages;

  const updateBudget = (event) => {
    event.preventDefault();
    dispatch({
      type: "UPDATE_BUDGET",
      payload: newbudget,
    });
  };

  const totaleExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className="flex flex-col gap-5 bg-gray-200 p-3 rounded">
      <form className="form-control">
        <div>
          <select className="p-1 mb-1 bg-gray-400 rounded" name="lang">
            <option onClick={() => lang.setLanguageSelected("en")} value="En">
              En
            </option>
            <option onClick={() => lang.setLanguageSelected("de")} value="De">
              De
            </option>
          </select>
        </div>
      </form>
      <form onSubmit={updateBudget}>
        <div className="flex flex-col gap-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="input"
          >
            {setBudget}
          </label>
          <div className="-mt-3">
            <input
              className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700"
              type="text"
              id="name"
              placeholder={inputMoney}
              onChange={(event) => setNewBudget(event.target.value)}
            />
            <button
              className="mt-2 bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {saveButton}
            </button>
          </div>
        </div>
      </form>
      <div className="flex justify-around items-center gap-3">
        <div className="flex-1 bg-green-300 px-3 py-2 rounded shadow">
          <p>
            {ExpenseBudget}: ₹{budget}
          </p>
        </div>
        <div className="flex-1 bg-red-300 px-3 py-2 rounded shadow">
          <p>
            {ExpenseTotal}: ₹{totaleExpenses}
          </p>
        </div>
        <div className="flex-1 bg-blue-300 px-3 py-2 rounded shadow">
          <p>
            {ExpenseRemaining}: ₹{budget - totaleExpenses}
          </p>
        </div>
      </div>
    </div>
  );
}
