import React, { Component } from 'react';
import './main.scss';

export default class TotalInfo extends Component {
  
  updateBalanceColor = () => {
      return (Math.sign(this.props.incomesTotalSum - this.props.expensesTotalSum) <= -1) ? '#7b0000' : '#216f21';
  }

  render() {
    return (
      <div className="wallet_info_block font-weight-bold">
        <div className="balance alert alert-dark" role="alert">
          Total balance: &nbsp;
          <span style={{color: this.updateBalanceColor()}}>{this.props.incomesTotalSum - this.props.expensesTotalSum}</span>
        </div>
        <div className="month_expenses alert alert-dark text-dark">
          Total expenses: &nbsp;
          <span>{this.props.expensesTotalSum}</span>
        </div>
        <div className="month_income alert alert-dark text-dark">
          Total income: &nbsp;
          <span>{this.props.incomesTotalSum}</span>
        </div>
      </div>
    )
  }
}
