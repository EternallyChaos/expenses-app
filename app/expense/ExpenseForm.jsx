"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useExpenseContext } from "./AppContext";

export default function ExpenseForm() {
  const { dispatch } = useExpenseContext();

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const lang = useExpenseContext();
  const { formTitle, formName, formCost, saveButton, inputMoney, inputItem } =
    lang.state.languages;

  const onSubmit = (event) => {
    event.preventDefault();

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3 bg-gray-200 p-3 rounded mt-4">
        <h2 className=" text-base text-gray-700 mt-1 font-bold">{formTitle}</h2>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            {formName}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            type="text"
            id="name"
            value={name}
            placeholder={inputItem}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="cost"
          >
            {formCost}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            type="cost"
            id="name"
            value={cost}
            placeholder={inputMoney}
            onChange={(event) => setCost(event.target.value)}
          />
        </div>
        <div>
          <button
            className="bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {saveButton}
          </button>
        </div>
      </div>
    </form>
  );
}
