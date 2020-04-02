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
          // incomesTotalSum={this.props.incomesTotalSum}
          // expensesTotalSum={this.props.expensesTotalSum}
          expenses={this.props.expenses}
          incomes={this.props.incomes}
        />
        <Expenses
          expenses={this.props.expenses}
          setNewExpense={this.props.setNewExpense}
        />
        <Income
          incomes={this.props.incomes}
          setNewIncome={this.props.setNewIncome}
          loadIncome={this.props.loadIncome}
        />
      </main>
    )
  }
}
