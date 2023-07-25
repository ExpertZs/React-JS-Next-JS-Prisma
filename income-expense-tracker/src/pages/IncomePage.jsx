// import { useState } from "react";
// import Menu from "../components/menu";
// const IncomePage = () => {
//   const [incomeTransactions, setIncomeTransactions] = useState([]);
//   const [newAmount, setNewAmount] = useState("");
//   const [newDescription, setNewDescription] = useState("");

//   const handleAddIncome = () => {
//     if (newAmount.trim() !== "" && newDescription.trim() !== "") {
//       const newIncome = {
//         amount: newAmount,
//         description: newDescription,
//       };

//       setIncomeTransactions([...incomeTransactions, newIncome]);
//       setNewAmount("");
//       setNewDescription("");
//     }
//   };
//   const totalIncome = incomeTransactions.reduce(
//     (total, income) => total + income.amount,
//     0
//   );

//   return (
//     <div
//       style={{
//         display: "Grid",
//         minHeight: "100vh",
//         minWidth: "w-full",
//         backgroundColor: "blue",
//         justifyContent: "center",
//         alignItems: "center",
//         alignContent: "center",
//       }}
//     >
//       <div>
//         <Menu />
//       </div>
//       <h1>Income Page</h1>
//       <div>
//         <input
//           type="number"
//           placeholder="Amount"
//           value={newAmount}
//           onChange={(e) => setNewAmount(e.target.value)}
//           style={{
//             backgroundColor: "black",
//             marginRight: "10px",
//             padding: "10px",
//           }}
//         />
//         <input
//           type="text"
//           placeholder="Description"
//           value={newDescription}
//           onChange={(e) => setNewDescription(e.target.value)}
//           style={{
//             backgroundColor: "black",
//             marginRight: "10px",
//             padding: "10px",
//           }}
//         />
//         <button
//           onClick={handleAddIncome}
//           style={{
//             backgroundColor: "red",
//           }}
//         >
//           Add Income
//         </button>
//       </div>
//       <ul>
//         {incomeTransactions.map((income, index) => (
//           <li key={index}>
//             Amount: {income.amount}, Description: {income.description}
//           </li>
//         ))}
//       </ul>
//       <p>Total Income: {totalIncome}</p>
//     </div>
//   );
// };

// export default IncomePage;

import { useState } from "react";
import Menu from "../components/menu";

const IncomePage = () => {
  const [incomeTransactions, setIncomeTransactions] = useState([]);
  const [newAmount, setNewAmount] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleAddIncome = () => {
    if (newAmount.trim() !== "" && newDescription.trim() !== "") {
      const newIncome = {
        amount: parseFloat(newAmount),
        description: newDescription,
      };

      setIncomeTransactions([...incomeTransactions, newIncome]);
      setNewAmount("");
      setNewDescription("");
    }
  };

  const totalIncome = incomeTransactions.reduce(
    (total, income) => total + income.amount,
    0
  );

  return (
    <div
      style={{
        display: "Grid",
        minHeight: "100vh",
        minWidth: "w-full",
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <div>
        <Menu />
      </div>
      <h1>Income Page</h1>
      <div>
        <input
          type="number"
          placeholder="Amount"
          value={newAmount}
          onChange={(e) => setNewAmount(e.target.value)}
          style={{
            backgroundColor: "black",
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
            backgroundColor: "black",
            marginRight: "10px",
            padding: "10px",
          }}
        />
        <button
          onClick={handleAddIncome}
          style={{
            backgroundColor: "red",
          }}
        >
          Add Income
        </button>
      </div>
      <ul>
        {incomeTransactions.map((income, index) => (
          <li key={index}>
            Amount: {income.amount}, Description: {income.description}
          </li>
        ))}
      </ul>
      <p>Total Income: {totalIncome}</p>
    </div>
  );
};

export default IncomePage;
