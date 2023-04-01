"use client";

import { AiFillCloseCircle } from "react-icons/ai";
import ExpenseLi from "./ExpenseLi";
import { useExpenseContext } from "./AppContext";

export default function ExpenseWrapper() {
  const { expenses } = useExpenseContext();
  const lang = useExpenseContext();
  const { itemList } = lang.state.languages;
  return (
    <div className="bg-gray-200 p-3 rounded mt-4">
      <h2 className="text-base text-gray-700 font-bold">{itemList}</h2>
      <ul className="flex flex-col gap-2 my-2">
        {expenses.map((expense) => (
          <ExpenseLi
            key={expense.id}
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </ul>
    </div>
  );
}
