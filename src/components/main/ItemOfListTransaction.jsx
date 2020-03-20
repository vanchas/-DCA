import React, { Component } from 'react'

export default class ItemOfListTransaction extends Component {
  render() {
    return (
      <div className="text-secondary border-bottom">
        <b>{this.props.transaction.sum}</b> -
        <small><i> {this.props.transaction.date}</i></small><br />
        <small>{this.props.transaction.comment}</small>
      </div>
    )
  }
}
