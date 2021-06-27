import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
  const { expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  return (
    <div className="container bg-danger">
      <div className="card">
        <div className="card-body">
          <span>Money spent: P{totalExpenses}</span>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTotal;
