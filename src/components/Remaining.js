import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const { expenses, budget } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const alertType =
    totalExpenses > budget ? "card bg-danger" : "card bg-success";
  return (
    <div className={`${alertType} container`}>
      <div className="card">
        <div className="card-body">
          <span>Remaining: P{budget - totalExpenses}</span>
        </div>
      </div>
    </div>
  );
};

export default Remaining;
