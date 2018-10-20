# Chatkit Test Chat for Custom Authorization Server

Chat build with React and [Chatkit](https://pusher.com/chatkit) to test a custom authorization server. Follow the tutorial [here](https://pusher.com/tutorials/java-authentication-server-chatkit).

## Getting Started

1. Clone this repository.
2. Create a [Chatkit instance](https://dash.pusher.com/chatkit) if you haven't already.
3. In the Chatkit dashboard of your instance, in the *Instance Inspector* section, create one or two users (with the same ID of the users registered in the authorization server) and one chat room.
4. Enter your *Instance Locator ID* at the top of the file `src/App.js`, as well as the URL of the authorization endpoint of your server, and in `src/ChatScreen.js`, the ID of the chat room.
5. In a terminal window, execute `npm install` to install the dependencies of the app.
6. Make sure the authentication server is running and start the chat app with `npm start`.
7. Enter the username and password in the first screen of the app to enter the chat.
8. Optionally, open the app in another browser to sign as another user and start chatting.

### Prerequisites

- Install the authorization server you can find [here](https://github.com/eh3rrera/chatkit-custom-auth-server)
- [Chatkit account](https://dash.pusher.com)

## Built With

* [Pusher Chatkit](https://pusher.com/chatkit) - Developer-driven chat done simply

## Acknowledgments
* Thanks to [Pusher](https://pusher.com/) for sponsoring this tutorial.

## LICENSE
MIT