import React, { Component } from 'react';
import './main.scss';

export default class TotalInfo extends Component {
  constructor(props) {
    super(props);
    this.incomesTotalSum = 0;
    this.expensesTotalSum = '';
  }

  updateExpensesBalance() {
    let arrOfExpensesSums = [];
    this.props.expenses.map(exp =>
      exp.storage.map(e => {
        return arrOfExpensesSums.push(+e.sum);
      })
    );
    return arrOfExpensesSums.reduce((a, b) => a + b, 0);
  }

  updateIncomesBalance() {
    let incomesSum = 0;
    this.props.incomes.map(inc => {
      return incomesSum += +inc.sum;
    }, 0);
    return incomesSum;
  }

  updateBalanceColor = () => {
    return (Math.sign(this.updateIncomesBalance() - this.updateExpensesBalance()) <= -1) ? '#7b0000' : '#216f21';
  }

  render() {
    return (
      <div className="wallet_info_block font-weight-bold">
        <div className="balance alert alert-dark" role="alert">
          Total balance: &nbsp;
          <span style={{ color: this.updateBalanceColor() }}>{this.updateIncomesBalance() - this.updateExpensesBalance()}</span>
        </div>
        <div className="month_expenses alert alert-dark text-dark">
          Total expenses: &nbsp; 
          <span>{this.updateExpensesBalance()}</span>
        </div>
        <div className="month_income alert alert-dark text-dark">
          Total incomes: &nbsp;
          <span>{this.updateIncomesBalance()}</span>
        </div>
      </div>
    )
  }
}
