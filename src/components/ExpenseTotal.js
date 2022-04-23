import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
  const { expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  return (
    <div className="container">
      <div className="alert alert-primary" role="alert">
        <span>
          Money spent: <strong className="total">₱{totalExpenses}</strong>
        </span>
      </div>
    </div>
  );
};

export default ExpenseTotal;
