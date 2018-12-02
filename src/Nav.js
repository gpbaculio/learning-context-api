import React, { Component } from 'react'
import Login from './Login'

export default class Nav extends Component {
  render() {
    return (
      <Login /> // 3. Sample of Login Component, Nav is under Provider on the App component, Not any trace if Context here
    )
  }
}
