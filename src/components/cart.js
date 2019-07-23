import React, { Component } from 'react'

export default class Cart extends Component {
  render() {
    return (
      <div>
        Jumlah counter {this.props.theCount}
      </div>
    )
  }
}