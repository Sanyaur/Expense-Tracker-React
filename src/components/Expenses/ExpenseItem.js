import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

export default function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => setTitle("Updated!");

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </div>
    </Card>
  );
}
