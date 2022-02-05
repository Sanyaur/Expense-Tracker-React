import React from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  // funciton to get data from child component & to pass data to parent component
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      // spreads data which comes from child component
      ...enteredExpenseData,
      // temporary solution for ID
      id: Math.random().toString(),
    };

    // props to pass data to parent component
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
