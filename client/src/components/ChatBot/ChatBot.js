import React, { Component } from "react";
import "./ChatBot.css";
import ChatBot from 'react-simple-chatbot';

class Chatbot extends Component {

  render() {
    return(

      <ChatBot className="chatbot-whole"
        steps={[
          {
            id: 'hello-world',
            message: 'Hello World!',
            end: true,
          },
        ]}
      />

    );
  };
}

export default Chatbot;
