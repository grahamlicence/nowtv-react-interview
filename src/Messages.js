import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getById } from './util';

import './Messages.css';

class Messages extends Component {
  constructor(props) {
      super(props);

      this.renderAvatar = this.renderAvatar.bind(this);
      this.renderDate = this.renderDate.bind(this);
      this.renderMessage = this.renderMessage.bind(this);
  }

  static propTypes = {
    messages: PropTypes.array.isRequired,
    members: PropTypes.array.isRequired
  }

  renderDate(date) {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };

   return new Date(date).toLocaleString('en-GB', options);
  }

  renderAvatar(member) {
    if (!member) {
      return;
    }

    const name = `${member.firstName} ${member.lastName}`;
    const image = member.avatar || 'https://dummyimage.com/100x100/000/fff&text=default';

    return (
      <img src={image} alt={name} className="message__avatar" />
    )
  }

  renderMessage(message, ind) {
    const { members } = this.props;
    const member = getById(members, message.userId);

    return (
      <li className="message" key={ind}>
        {this.renderAvatar(member)}
        <p className="message__content">
          <span className="message__text">{message.message}</span>
          <span className="message__date">{this.renderDate(message.timestamp)}</span>
          {member &&
            <span className="message__email">{member.email}</span>
          }
        </p>
      </li>
    );
  }

  renderAllMessages() {
    const { messages } = this.props;

    messages.sort((a, b) => (new Date(b.timestamp) - new Date(a.timestamp)));
    return messages.map(this.renderMessage)
  }

  render() {

    return (
      <ul className="messages">
        {this.renderAllMessages()}
      </ul>
    );
  }
}

export default Messages;
