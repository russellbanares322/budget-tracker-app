import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center mt-3 shadow-lg p-3 mb-2 bg-body rounded">
      <strong>{props.name}</strong>
      <div>
        <span className="badge badge-primary pt-2 pb-2 pl-4 pr-4">
          <strong className="cost">₱ {props.cost}</strong>
        </span>
        <i
          className="fas fa-times ml-4 delete fa-2px"
          onClick={handleDeleteExpense}
        ></i>
      </div>
    </li>
  );
};

export default ExpenseItem;
