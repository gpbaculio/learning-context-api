import React, { Component } from 'react'
import { MyContext } from './Provider'

export default class Login extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {({ state, actions }) => { // 4. We consume the data from context here, we passed the state and actions from Provider Component
          const { viewer, name } = state
          const {
            logout,
            handleChange,
            login,
          } = actions
          return viewer ? (
            <React.Fragment >
              <h2>Logged in as {viewer}</h2>
              <button
                style={{ fontSize: '24px' }}
                onClick={logout}
              >
                Logout
              </button>
            </React.Fragment>
          ) : (
              <React.Fragment>
                <input
                  value={name}
                  placeholder="Please Login"
                  onChange={handleChange}
                  style={{ fontSize: '24px' }}
                />
                <button
                  style={{ fontSize: '24px' }}
                  type="submit"
                  onClick={login}
                >
                  Login
                </button>
              </React.Fragment>)
        }}
      </MyContext.Consumer>
    )
  }
}
