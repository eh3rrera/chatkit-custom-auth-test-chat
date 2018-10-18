import React, { Component } from 'react'
import UsernameForm from './components/UsernameForm'
import ChatScreen from './ChatScreen'
import Chatkit from '@pusher/chatkit'

const CHATKIT_INSTANCE = 'YOUR_CHATKIT_INSTANCE';
const AUTH_SERVER_URL = 'YOUR_AUTH_ENDPOINT_URL';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: null,
      currentScreen: 'WhatIsYourUsernameScreen',
    }
    this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this)
  }

  onUsernameSubmitted(username, password) {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: CHATKIT_INSTANCE,
      userId: username,
      tokenProvider: new Chatkit.TokenProvider({
        url: AUTH_SERVER_URL,
        queryParams: {
          passw: password,
        },
      }),
    })
    chatManager
      .connect()
      .then(user => {
        this.setState({
          currentUser: user,
          currentScreen: 'ChatScreen',
        })
      })
      .catch(error => alert(error.info))
  }
  render() {
    if (this.state.currentScreen === 'WhatIsYourUsernameScreen') {
      return <UsernameForm onSubmit={this.onUsernameSubmitted} />
    }
    if (this.state.currentScreen === 'ChatScreen') {
      return <ChatScreen currentUser={this.state.currentUser} />
    }
  }
}

export default App
