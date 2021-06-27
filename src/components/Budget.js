import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget } = useContext(AppContext);
  return (
    <div className="container">
      <div className="alert alert-primary" role="alert">
        <span>
          Budget: <strong>₱ {budget}</strong>
        </span>
      </div>
    </div>
  );
};

export default Budget;
