import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import loader from './images/01-progress.gif';
import * as ChatActionCreators from './service';
import Messages from './Messages';

import './App.css';

class App extends Component {
  static propTypes = {
    messages: PropTypes.array,
    isLoading: PropTypes.bool.isRequired
  }

  componentWillMount() {
    this.props.getChatLog();
    this.props.getMembersList();
  }

  render() {
    const { isLoading, messages, members } = this.props;

    return (
      <div className="chatroom">
        <h1>Hello!</h1>
        { isLoading && <img src={loader} alt="Loading" className="loader" />}
        { !isLoading && <Messages messages={messages} members={members} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { messages, members } = state;
  return {
    messages,
    members,
    isLoading: !messages
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(ChatActionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
