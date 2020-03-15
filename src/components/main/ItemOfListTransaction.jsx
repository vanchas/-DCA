import React, { Component } from 'react'

export default class ItemOfListTransaction extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const date = `${this.props.transaction.date.getDate()}.${this.props.transaction.date.getMonth()+1}.${this.props.transaction.date.getFullYear()}`;
    return (
      <div>
        <mark>{this.props.transaction.sum}</mark> - 
        <small> {date}</small><br/>
        <small>{this.props.transaction.comment}</small>
      </div>
    )
  }
}
