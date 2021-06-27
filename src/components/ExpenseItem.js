import React from "react";

const ExpenseItem = (props) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="badge badge-primary">P{props.cost}</span>
        <i className="fas fa-times ml-4"></i>
      </div>
    </li>
  );
};

export default ExpenseItem;
