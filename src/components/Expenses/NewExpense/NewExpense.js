import React, { useState } from "react";

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

  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => setIsEditing(true);
  const stopEditingHandler = () => setIsEditing(false);

  let formContent = (
    <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler}
      onResetForm={stopEditingHandler}
    />
  );

  if (!isEditing) {
    formContent = (
      <button onClick={startEditingHandler}>Add New Expense</button>
    );
  }
  return <div className='new-expense'>{formContent}</div>;
};

export default NewExpense;
