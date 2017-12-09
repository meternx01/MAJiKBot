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

 constructor(props) {
    super(props);

    this.state = {
      loading: true,
      result: '',
      trigger: false,
    };

    this.triggetNext = this.triggetNext.bind(this);
  }

  componentWillMount() {
    const self = this;
    const { steps } = this.props;
    const search = steps.search.value;
    const endpoint = encodeURI('https://dbpedia.org');
    const query = encodeURI(`
      select * where {
      ?x rdfs:label "${search}"@en .
      ?x rdfs:comment ?comment .
      FILTER (lang(?comment) = 'en')
      } LIMIT 100
    `);

    const queryUrl = `https://dbpedia.org/sparql/?default-graph-uri=${endpoint}&query=${query}&format=json`;

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', readyStateChange);

    function readyStateChange() {
      if (this.readyState === 4) {
        const data = JSON.parse(this.responseText);
        const bindings = data.results.bindings;
        if (bindings && bindings.length > 0) {
          self.setState({ loading: false, result: bindings[0].comment.value });
        } else {
          self.setState({ loading: false, result: 'Not found.' });
        }
      }
    }

    xhr.open('GET', queryUrl);
    xhr.send();
  }

  triggetNext() {
    this.setState({ trigger: true }, () => {
      this.props.triggerNextStep();
    });
  }

  render() {
    const { trigger, loading, result } = this.state;

    return (
      <div className="dbpedia">
        { loading ? <Loading /> : result }
        {
          !loading &&
          <div
            style={{
              textAlign: 'center',
              marginTop: 20,
            }}
          >
            {
              !trigger &&
              <button
                onClick={() => this.triggetNext()}
              >
                Search Again
              </button>
            }
          </div>
        }
      </div>
    );
  }
}

DBPedia.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
};

DBPedia.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
};

const ExampleDBPedia = () => (
  <ChatBot
    steps={[
      {
        id: '1',
        message: 'Type something to search on Wikipédia. (Ex.: Brazil)',
        trigger: 'search',
      },
      {
        id: 'search',
        user: true,
        trigger: '3',
      },
      {
        id: '3',
        component: <DBPedia />,
        waitAction: true,
        trigger: '1',
      },
    ]}
  />
);

export default Chatbot;
