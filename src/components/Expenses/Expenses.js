import React, { useState } from "react";
import ExpensesList from "./NewExpense/ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import ExpensesFilter from "./NewExpense/ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  // sets the year dropdown value
  const [filteredYear, setFilteredYear] = useState("2021");

  // sets new dropdown value if user changes the year
  const filterChangeHandler = (data) => {
    setFilteredYear(data);
  };

  // filtering logic for rendering lists based on their date of year
  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  return (
    <li>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expense={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
