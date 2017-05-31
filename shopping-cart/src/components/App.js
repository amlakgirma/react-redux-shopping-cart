import React, { Component } from 'react'
import Cart from '../containers/Cart'

import '../stylesheets/App.css'
function mapStateToProps(state,ownProps) {
  return {
    user:state.users[ownProps.userId]
  }
}
class App extends Component {

  render() {
    return (
      <Cart />
    );
  }
}

export default App
