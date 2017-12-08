import React, { Component } from "react";
import "./ChatBot.css";
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';

const Balance = (props) => {
  const {steps} = props;
  if (steps.begin.value === 'no'){
    return `
    Here are your account balances.
      xxx8990 savings Balance $550.00,
      xxx7902 current Balance $22.08,
      xxx7685 CC Balance $420.78,
      xxx7685 FD Balance $50,000.00`;
  } else if (steps.three.value === 'no'){
    return `
    Here are your account balances.
      xxx8990 savings Balance $550.00,
      xxx7902 current Balance $22.08,
      xxx7685 CC Balance $420.78,
      xxx7685 FD Balance $50,000.00`;
  } else if (steps.three.value === 'yes') {
    return `
    Here are your account balances.
      xxx8990 savings Balance $550.00,
      xxx7902 current Balance $22.08,
      xxx7685 CC Balance $320.78,
      xxx7685 FD Balance $50,000.00`;
  }
};

Balance.propTypes = {
steps: PropTypes.object,
};

Balance.defaultProps = {
steps: undefined,
};

class Chatbot extends Component {

  render() {
    return(

    <ChatBot className="chatbot-whole"
     recognitionEnable={true}
      steps={[
          {
            id: 'greeting',
      message: "Hello! I'm MAJiKBot! Welcome to Majik Bank. You have some notifications, would you like to see?",
      trigger: 'begin'
    },
    {
      id: 'begin',
      options: [
        {value: 'yes', label: 'Yes', trigger: 'yes'},
        {value: 'no', label: 'No', trigger: 'no'},
      ],
    },
    {
      id: 'yes',
      message: "Your credit card payment is pending. Would you like to pay?",
      trigger: 'three',
    },
    {
      id: 'three',
      options:[
        {value: 'yes', label: 'Yes', trigger:'pay-cc'},
        {value: 'no', label: 'No', trigger: 'back'},
      ],
    },
    {
      id: 'no',
      message: 'Good! What can I do for you?',
      trigger: 'cont',
    },
    {
      id: 'cont',
      user: true,
      trigger: 'next',
    },
    {
      id: 'next',
      message: `
      Here are your account balances.
        xxx8990 savings Balance $550.00,
        xxx7902 current Balance $42.08,
        xxx7685 CC Balance $420.78,
        xxx7685 FD Balance $50,000.00,
        `,
      trigger: 'begin-transfer',
    },
    {
      id: 'pay-cc',
      message: 'Alright, should I make a payment of statement balance 100.00 to your CC account xxx7685?',
      trigger: '4',
    },
    {
      id: '4',
      options: [
        {value: 'yes', label: 'Yes', trigger: 'confirm-pay'},
        {value: 'no', label: 'No', trigger: 'cont'},
      ],
    },
    {
      id: 'confirm-pay',
      message: 'Okay, a one-time passcode has been sent to your mobile phone. Please enter the code',
      trigger: 'user-code',
    },
    {
      id: 'user-code',
      user: true,
      validator: (value) => {
        if (isNaN(value)) {
          return 'value should be a number';
        }
        return true;
      },
      trigger: 'mk-pay',
    },
    {
      id: 'mk-pay',
      message: 'Thanks, your payment has been successfully submitted. What else can I help you with? I can check balances, transfers, and transactions.',
      trigger: 'cont-new',
    },
    {
      id: 'cont-new',
      user: true,
      trigger: 'user-balance-new',
    },
    {
      id: 'user-balance-new',
      message: `
      Here are your account balances
        xxx8990 savings Balance $550.00,
        xxx7902 current Balance $42.08,
        xxx7685 CC Balance $320.78,
        xxx7685 FD Balance $50,000.00,`,
      trigger: 'begin-transfer',
    },
    {
      id: 'back',
      message: "Very well. Your mother's birthday is tomorrow. You should call her. She loves you.",
      trigger: 'sass',
    },
    {
      id: 'sass',
      user: true,
      trigger: 'so-attk',
    },
    {
      id: 'so-attk',
      message: "Just a suggestion. What else can I do for you? I can check balances, transfers, and transactions.",
      trigger: 'cont',
    },
    {
      id: 'begin-transfer',
      message: 'What else can I help you with today? I can check balances, transfers, and transactions.',
      trigger: 'st-trans',
    },
    {
      id: 'st-trans',
      user: true,
      trigger: 'mk-trans',
    },
    {
      id: 'mk-trans',
      message: `Sure, I can help you transfer money. Here are your linked accounts:
       Jason xxxxxx1234;
       Bonnie xxxxxx4321. `,
      trigger: 'mk-trans-2',
    },
    {
      id: 'mk-trans-2',
      message: 'Please enter the beneficiary account name to which you want to transfer.',
      trigger: 'mk-trans-name',
    },
    {
      id: 'mk-trans-name',
      user: true,
      trigger: 'mk-trans-amt',
    },
    {
      id: 'mk-trans-amt',
      message: 'Please enter the amount that you wish to transfer to {previousValue}.',
      trigger: 'mk-trans-amt2',
    },
    {
      id: 'mk-trans-amt2',
      user: true,
      validator: (value) => {
        if (isNaN(value)) {
          return 'value should be a number';
        }
        return true;
      },
      trigger: 'mk-trans-pay',
    },
    {
      id: 'mk-trans-pay',
      message: 'Alright, I have sent a one-time passcode to you. Please enter the code.',
      trigger: 'mk-trans-code',
    },
    {
      id: 'mk-trans-code',
      user: true,
      validator: (value) => {
        if (isNaN(value)) {
          return 'value should be a number';
        }
        return true;
      },
      trigger: 'mk-trans-pay-com',
    },
    {
      id: 'mk-trans-pay-com',
      message: 'Thanks, the amount has been transferred. It will reflect in your account in the next hour. Anything else I can help you with? I can check balances, transfers, and transactions.',
      trigger: 'chck-balance',
    },
    {
      id: 'chck-balance',
      user: true,
      trigger: 'balance-amt-new',
    },
    {
      id: 'balance-amt-new',
      message: Balance,
      trigger: 'transactions-begin',
    },
    {
      id: 'transactions-begin',
      message: 'Welcome to MAJiKBot! What else can I do for you? I can check balances, transfers, and transactions.',
      trigger: 'st-transc',
    },
    {
      id: 'st-transc',
      user: true,
      trigger: 'mk-transc',
    },
    {
      id: 'mk-transc',
      message: 'Transaction it is! Please select which option you would like to see.',
      trigger: 'monthly',
    },
    {
      id: 'monthly',
      options: [
        {value: 'one', label: 'View transactions in the last month', trigger: 'one-month'},
        {value: 'two', label: 'View transactions in the last 2 months', trigger: 'two-months'},
      ],
    },
    {
      id: 'one-month',
      message: `Here are your transactions.
        11-09-2017  12.00  McDonalds,
        11-09-2017  72.00  HEB,
        11-10-2017  100.00 AT&T,
        11-16-2017  30.10  Amazon Inc.,
        11-17-2017  16.82  Jasmine Dragon Chinese Bistro,
        11-24-2017  87.00  Toys R' US,
        11-29-2017  200.40 TicketMaster,
      `,
      trigger: 'final',
    },
    {
      id: 'two-months',
      message: `Here are your transactions.
        10-07-2017  9.99   Cam's Pawn Shop,
        10-10-2017  100.00 AT&T,
        10-19-2017  13.32  Party City,
        10-24-2017  18.99  Macy's,
        10-28-2017  24.23  Domino's,
        10-28-2017  31.09  Mary's Bakery,
        10-28-2017  8.02   Michael's,
        10-30-2017  17.09  Wal-Mart,
        11-09-2017  12.00  McDonalds,
        11-09-2017  72.00  HEB,
        11-10-2017  100.00 AT&T,
        11-16-2017  30.10  Amazon Inc,
        11-17-2017  16.82  Jasmine Dragon Chinese Bistro,
        11-24-2017  87.00  Toys R' US,
        11-29-2017  200.40 TicketMaster`,
      trigger: 'final',
    },
    {
      id: 'final',
      message: 'Welcome to MAJiKBot! What else can I do for you? I can check balances, transfers, and transactions.',
      trigger: 'final-user',
    },
    {
      id: 'final-user',
      user: true,
      trigger: 'last-msg',
    },
    {
      id: 'last-msg',
      message: "Leaving so soon? It's been real.",
      trigger: 'ten',
    },
    {
      id: 'ten',
      user: true,
      trigger: 'last-one',
    },
    {
      id: 'last-one',
      message: "Miss you. Come back soon.",
      trigger: 'last',
    },
    {
      id: 'last',
      user: true,
      end: true,
    },
        ]}
      />

    );
  };
}

export default Chatbot;
