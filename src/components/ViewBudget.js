import React from "react";

const ViewBudget = (props) => {
  return (
    <>
      <span>
        Budget: <strong className="total">₱{props.budget}</strong>
      </span>
      <i
        className="far fa-edit text-right edit fa-2x fa-align-right"
        onClick={props.handleEditClick}
      ></i>
    </>
  );
};

export default ViewBudget;
