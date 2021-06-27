import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget } = useContext(AppContext);
  return (
    <div className="container bg-warning">
      <div className="card">
        <div className="card-body">
          <span>Budget: P{budget}</span>
        </div>
      </div>
    </div>
  );
};

export default Budget;
