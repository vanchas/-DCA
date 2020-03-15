import React, { Component } from 'react';
import './main.scss';

export default class TotalInfo extends Component {
  render() {
    return (
      <div className="wallet_info_block">
        <div className="balance">Total balance: &nbsp; 
          {this.props.incomesTotalSum - this.props.expensesTotalSum}
        </div>
        <div className="month_expenses">Total expenses: &nbsp;
          {this.props.expensesTotalSum}
        </div>
        <div className="month_income">Total income: &nbsp;
          {this.props.incomesTotalSum}
        </div>
      </div>
    )
  }
}
