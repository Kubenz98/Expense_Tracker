import './Expenses.css'

const Expenses = () => {
  return (
    <div className="expenses">
      <ul className="expenses__list">
        <li>
          <div className="expense-item">
            <div className="expense-date">
              <div className="expense-date__month">March</div>
              <div className="expense-date__year">2022</div>
              <div className="expense-date__day">10</div>
            </div>
            <div className="expense-item__description">
                <h2>New TV</h2>
                <div className="expense-item__price">$799,99</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Expenses;
