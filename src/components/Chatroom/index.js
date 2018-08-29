import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import rep from '../../images/rep.jpg';
import logo from '../../images/logo-header.svg';
import Message from '../Message'
class Chatroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: [{
        username: "Robot",
        content: <p>Hi, How can we help you today?</p>,
        img: rep,
      }, {
        username: "Customer",
        content: <p>Hey, I need help with checking in online.</p>,
        img: "",
      },{
        username: "Robot",
        content: <p>Sure, whats your booking reference number?</p>,
        img: rep,
      }]
    };
    this.submitMessage = this.submitMessage.bind(this);
  }
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom() {
    ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
  }
  submitMessage(e) {
    e.preventDefault();

    this.setState({
      chats: this.state.chats.concat([{
        username: "Customer",
        content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,
        img: ""
      }])
    }, () => {
        ReactDOM.findDOMNode(this.refs.msg).value = "";
    });
  }
  render() {
    const username = "Customer";
    const {chats} = this.state;

    return (
      <div className="chatroom">
        <div class="logo-contain"><img src={logo} /></div>
        <ul className="chats" ref="chats">
          {
            chats.map((chat) =>
              <Message chat={chat} user={username} />
            )
          }
        </ul>
        <form className = "input" onSubmit={(e) => this.submitMessage(e)}>
          <input type="text" ref="msg" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

}

export default Chatroom;
