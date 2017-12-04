import React, { Component } from "react";
import "./ChatBot.css";
import ChatBot from 'react-simple-chatbot';

class Chatbot extends Component {

  render() {
    return(

      <ChatBot className="chatbot-whole"
        steps={[
          {
            id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you!',
      trigger: '4',
    },
    {
      id: '4',
      message: 'How are you?',
      trigger: '5',
    },
    {
      id: '5',
      user: true,
      trigger:'6',
    },
    {
      id: '6',
      message: 'Great! Good to hear!',
      end:true,
    },

        ]}
      />

    );
  };
}

export default Chatbot;
