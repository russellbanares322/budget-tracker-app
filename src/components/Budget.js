import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import ViewBudget from "./ViewBudget";
import EditBudget from "./EditBudget";

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "SET_BUDGET",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div className="container-fluid">
      <div className="alert alert-primary" role="alert">
        {isEditing ? (
          <EditBudget handleSaveClick={handleSaveClick} budget={budget} />
        ) : (
          <ViewBudget
            handleEditClick={handleEditClick}
            budget={budget.toLocaleString()}
          />
        )}
      </div>
    </div>
  );
};

export default Budget;
