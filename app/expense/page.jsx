import MoneyWrapper from "./MoneyWrapper";
import ClientMoney from "./ClientMoney";
import ExpenseWrapper from "./ExpenseWrapper";
import ExpenseForm from "./ExpenseForm";

export default function Expense() {
  return (
    <ClientMoney>
      <MoneyWrapper />
      <ExpenseWrapper />
      <ExpenseForm />
    </ClientMoney>
  );
}
