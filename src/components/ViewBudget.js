import React from "react";

const ViewBudget = (props) => {
  return (
    <>
      <div>
        <span className="total_container">
          Budget:
          <strong className="total">₱{props.budget}</strong>
        </span>
        <i className="far fa-edit edit fa-2x" onClick={props.handleEditClick} />
      </div>
    </>
  );
};

export default ViewBudget;
