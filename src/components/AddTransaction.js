import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 10000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };
  return (
    <>
      <h3>Add new Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="Enter Text ..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
          </label>
          <input
            type="number"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            placeholder="Enter Amount ..."
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
