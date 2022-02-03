import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  // states that makes the input field values to empty strings
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // callback functions added to input fields, and listens to the entered input values
  // calls at every onChange event (at every keystroke)
  const titleChangeHandler = (event) => setEnteredTitle(event.target.value);
  const amountChangeHandler = (event) => setEnteredAmount(event.target.value);
  const dateChangeHandler = (event) => setEnteredDate(event.target.value);

  // handling the browser-built in submit event
  const submintHandler = (event) => {
    // prevents the browser to refresh the page
    // MUSTHAVE option
    event.preventDefault();

    // collects the entered data/values to an object (data which defined in hooks above)
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);

    // makes the input field values to empty strings again, AFTER submitting the form
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submintHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2030-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
