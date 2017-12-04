import React, { Component } from "react";
import "./ChatBot.css";
import ChatBot from 'react-simple-chatbot';

class Chatbot extends Component {

  render() {
    return(

      <ChatBot className="chatbot-whole"
       recognitionEnable={true}
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
      message: 'Great!',
      trigger: '7',
    },
    {
      id: '7',
      message: 'On a scale of 1-10, how would you rate yourself?',
      trigger: '8',
    },
    {
      id: '8',
      user: true,
      validator: (value) => {
        if (isNaN(value)) {
          return 'Value should be a number';
        }
        return true;
      },
      trigger: '9',
    },
    {
      id: '9',
      message: 'A {previousValue}? Alright, if you say so. And how would you rate Mariela?',
      trigger: '10',
    },
    {
      id: '10',
      user: true,
      validator: (value) => {
        if (isNaN(value)) {
          return 'Value should be a number';
        }
        return true;
      },
      trigger: '11',
    },
    {
      id: '11',
      message: 'Well {previousValue} was a good guess but the correct answer is 20. Clearly.',
      trigger: '12',
    },
    {
      id: '12',
      message: 'Any final thoughts?',
      trigger: '13',
    },
    {
      id: '13',
      user: true,
      trigger: '14',
    },
    {
      id: '14',
      message: 'Cool story, bro! Talk to you later!',
      end: true,
    },
        ]}
      />

    );
  };
}

export default Chatbot;
