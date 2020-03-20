import React, { Component } from 'react'

export default class ItemOfListTransaction extends Component {
  render() {
    return (
      <div>
        <mark>{this.props.transaction.sum}</mark> -
        <small> {this.props.transaction.date}</small><br />
        <small>{this.props.transaction.comment}</small>
      </div>
    )
  }
}
