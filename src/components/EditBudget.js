import React, { useState } from "react";

const EditBudget = (props) => {
  const [value, setValue] = useState(props.budget);
  return (
    <>
      <input
        required="required"
        type="number"
        className="form-control mb-3"
        id="name"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <div className="text-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={(event) => props.handleSaveClick(value)}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default EditBudget;
