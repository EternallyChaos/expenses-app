"use client";
import { AiFillCloseCircle } from "react-icons/ai";
import { useExpenseContext } from "./AppContext";

export default function ExpenseLi(props) {
  const { dispatch } = useExpenseContext();

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <li className=" flex justify-between items-center gap-2 border border-gray-500 rounded w-full py-2 px-3 ">
      {props.name}
      <div className="flex items-center justify-evenly gap-3">
        <span>₹{props.cost}</span>
        <AiFillCloseCircle
          className="cursor-pointer"
          size={23}
          onClick={handleDeleteExpense}
        />
      </div>
    </li>
  );
}
