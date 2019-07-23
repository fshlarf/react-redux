import React, { Component } from 'react'
import './counter.css'
import { connect } from 'react-redux'

class Counter extends Component {
  render() {
    return (
      <div>
        <h3>
          <button onClick={this.props.decreaseCount} className="cursor">-</button>
            {this.props.counter}
          <button onClick={this.props.increaseCount} className="cursor">+</button>
        </h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.totalCount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCount: () => dispatch({type: 'INCREASE_COUNT'}),
    decreaseCount: () => dispatch({type: 'DECREASE_COUNT'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)