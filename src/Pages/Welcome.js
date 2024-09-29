import React from 'react'
import logo from '../logo.svg'

const Welcome = () => {
  return (
    <div id="welcome">
     <h2 style={{fontWeight:'600', fontsize: '40px', textAlign: 'center'}}>Welcome to the React community!</h2>
     <img src={logo} className="App-logo" alt="logo" />
    </div>
  )
}

export default Welcome
