import React, { Component } from 'react'

export default class ItemOfListTransaction extends Component {
  render() {
    return (
      <div className="transaction-item text-secondary border-bottom">
        <b>{this.props.transaction.sum}</b> -
        <small> {this.props.transaction.date}</small><br />
        <span>{this.props.transaction.comment}</span>
      </div>
    )
  }
}
