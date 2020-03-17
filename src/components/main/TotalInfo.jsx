import React, { Component } from 'react';
import './main.scss';

export default class TotalInfo extends Component {
  render() {
    return (
      <div className="wallet_info_block font-weight-bold">
        <div className="balance alert alert-dark text-dark" role="alert">
          Total balance: &nbsp;
          {this.props.incomesTotalSum - this.props.expensesTotalSum}
        </div>
        <div className="month_expenses alert alert-dark text-dark">
          Total expenses: &nbsp;
          {this.props.expensesTotalSum}
        </div>
        <div className="month_income alert alert-dark text-dark">
          Total income: &nbsp;
          {this.props.incomesTotalSum}
        </div>
      </div>
    )
  }
}
