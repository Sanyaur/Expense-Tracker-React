import "./ExpenseDate.css";

export default function ExpenseDate(props) {
  const month = props.date.toLocaleString("hu-HU", { month: "long" });
  const day = props.date.toLocaleString("hu-HU", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{year}.</div>
      <div className='expense-date__year'>{month}</div>
      <div className='expense-date__day'>{day}.</div>
    </div>
  );
}
