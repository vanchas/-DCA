import React, { Component } from 'react'

export default class ItemOfListTransaction extends Component {
  render() {
    const transaction = this.props.transaction;
    return (
      <div 
      className={`${
        (+transaction.month % 2 === 0) 
        ? 'transaction-even'
        : 'transaction-odd'
      } transaction-item text-secondary border-bottom`}>
        <b>{transaction.sum}</b> -
        <small> {transaction.date}</small><br />
        <span>{transaction.comment}</span>
      </div>
    )
  }
}
