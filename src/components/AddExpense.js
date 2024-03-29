import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpense = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState(0);

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
    setName("");
    setCost("");
  };

  return (
    <div className="container mt-4 text-center">
      <form onSubmit={onSubmit}>
        <label>
          <strong>Name</strong>
        </label>
        <br />
        <input
          type="text"
          required="required"
          value={name}
          onChange={(event) => setName(event.target.value)}
          autoFocus
        />
        <br />
        <br />
        <label>
          <strong>Cost</strong>
        </label>
        <br />
        <input
          type="number"
          required="required"
          value={cost}
          onChange={(event) => setCost(event.target.value)}
        />
        <br />
        <button
          className={`${
            !name || !cost ? "button_disabled mt-3 mb-3" : "button mt-3 mb-3"
          }`}
          type="submit"
          disabled={!name || !cost ? true : false}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddExpense;
