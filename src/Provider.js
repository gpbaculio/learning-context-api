import React, { Component } from 'react'

export const MyContext = React.createContext()

export default class Provider extends Component {
  state = {
    viewer: null,
    name: ''
  }
  login = () => {
    const { name } = this.state
    this.setState({ viewer: name })
  }
  logout = () => {
    this.setState({ viewer: null, name: '' })
  }
  handleChange = e => {
    this.setState({ name: e.target.value })
  }
  render() {
    return (
      <MyContext.Provider // 5. state and actions passed to Login without prop drilling, it's Like Redux
        value={{
          state: this.state,
          actions: {
            login: this.login,
            logout: this.logout,
            handleChange: this.handleChange,
          }
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
