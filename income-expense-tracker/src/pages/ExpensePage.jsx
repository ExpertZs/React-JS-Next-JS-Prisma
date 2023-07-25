import { useState } from "react";
import Menu from "../components/menu";

const ExpensePage = () => {
  const [expenseTransactions, setExpenseTransactions] = useState([]);
  const [newAmount, setNewAmount] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleAddExpense = () => {
    if (newAmount.trim() !== "" && newDescription.trim() !== "") {
      const newExpense = {
        amount: parseFloat(newAmount),
        description: newDescription,
      };

      setExpenseTransactions([...expenseTransactions, newExpense]);
      setNewAmount("");
      setNewDescription("");
    }
  };

  const totalExpense = expenseTransactions.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div
      style={{
        display: "Grid",
        minHeight: "100vh",
        minWidth: "w-full",
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <div>
        <Menu />
      </div>
      <h1>Expense Page</h1>
      <div>
        <input
          type="number"
          placeholder="Amount"
          value={newAmount}
          onChange={(e) => setNewAmount(e.target.value)}
          style={{
            backgroundColor: "purple",
            marginRight: "10px",
            padding: "10px",
          }}
        />
        <input
          type="text"
          placeholder="Description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          style={{
            backgroundColor: "purple",
            marginRight: "10px",
            padding: "10px",
          }}
        />
        <button onClick={handleAddExpense} style={{ backgroundColor: "red" }}>
          Add Expense
        </button>
      </div>
      <ul>
        {expenseTransactions.map((expense, index) => (
          <li key={index}>
            Amount: {expense.amount}, Description: {expense.description}
          </li>
        ))}
      </ul>
      <p>Total Expense: {totalExpense}</p>
    </div>
  );
};

export default ExpensePage;
