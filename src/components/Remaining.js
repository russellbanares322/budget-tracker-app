import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const { expenses, budget } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const alertType = totalExpenses > budget ? "alert-danger" : "alert-primary";
  return (
    <div className="container">
      <div className={`alert ${alertType}`}>
        <span>
          Remaining:
          <strong className="total">
            ₱{[budget - totalExpenses].toLocaleString()}
          </strong>
        </span>
      </div>
    </div>
  );
};

export default Remaining;
