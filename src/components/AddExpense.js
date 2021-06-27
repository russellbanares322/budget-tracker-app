import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpense = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };
  return (
    <div className="container mt-4">
      <form onSubmit={onSubmit}>
        <label>
          <strong>name</strong>
        </label>
        <input
          type="text"
          required="required"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <br />
        <label>
          <strong>cost</strong>
        </label>
        <input
          type="text"
          required="required"
          value={cost}
          onChange={(event) => setCost(event.target.value)}
        />
        <br />
        <button className="btn btn-success" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default AddExpense;
