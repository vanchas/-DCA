import React, { Component } from 'react';
import './main.scss';
import TotalInfo from './TotalInfo';
import Expenses from './Expenses';
import Income from './Income';

export default class Main extends Component {
  render() {
    return (
      <main className="main">
        <TotalInfo
          expensesTotalSum={this.props.state.expensesTotalSum}
          incomesTotalSum={this.props.state.incomesTotalSum}
        // incomesTotalSum={this.props.incomesTotalSum}
        // expensesTotalSum={this.props.expensesTotalSum}
        />
        <Expenses
          requestAllExpenses={this.props.requestAllExpenses}
          expenses={this.props.state.expenses}
        // expenses={this.props.expenses}
        // setNewExpense={this.props.setNewExpense}
        />
        <Income
          requestAllIncomes={this.props.requestAllIncomes}
          incomes={this.props.state.incomes}
        // incomes={this.props.incomes}
        // setNewIncome={this.props.setNewIncome}
        />
      </main>
    )
  }
}
