import React, { Component } from 'react'

class UsernameForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.state.username, this.state.password)
  }

  onChangeUsername(e) {
    this.setState({ username: e.target.value })
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value })
  }

  render() {
    const formStyle = {
      margin: 10,
    }
    
    return (
      <div>
        <div>
          <form style={formStyle} onSubmit={this.onSubmit}>
            <p>What is your username?</p>
            <p>
            <input
              type="text"
              placeholder="Username"
              onChange={this.onChangeUsername}
            />
            </p>
            <p>What is your password?</p>
            <p><input
              type="password"
              placeholder="Password"
              onChange={this.onChangePassword}
            />
            </p>
            <input type="submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default UsernameForm
