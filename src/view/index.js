import React, { Component } from 'react'
import Counter from './../components/counter'
import Cart from './../components/cart'
import './index.css'
import axios from 'axios'
import { connect } from 'react-redux'

class Index extends Component {
  componentWillMount () {
    this.getDataPosts()
  }
  async getDataPosts() {
    try {
      const res = await axios.get('http://localhost:3001/posts')
      console.log(res.data);
    }
    catch(err) {
      console.error(err)
    }
  }
  render() {
    return (
      <div className="App"> 
        Hello from redux
        <Counter/>
        <Cart theCount={this.props.counter}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.totalCount
  }
}

export default connect(mapStateToProps)(Index)