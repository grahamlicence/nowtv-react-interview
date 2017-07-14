import React from 'react';
import sinon from 'sinon';
import { render, shallow } from 'enzyme';
import Messages from './Messages';

describe('<Messages />', function() {
  const messagesData = [
    {
      id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
      userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
      message: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
      timestamp: '2017-02-09T04:27:38Z'
    }
  ];

  const membersData = [
    {
      id: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
      firstName: 'Albert',
      lastName: 'Rose',
      email: 'arosec@bbb.org',
      avatar: 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff',
      ip: '20.79.231.223'
    }
  ];

  describe('renders', () => {

    it('correctly', function () {
      const messages = [];
      const wrapper = render(<Messages messages={messages} members={membersData} />);
      expect(wrapper.find('.messages')).toBeTrue;
    });

    it('a message', function () {
      const wrapper = render(<Messages messages={messagesData} members={membersData} />);
      expect(wrapper.find('.message')).toBeTrue;
    });

    it('an avatar', function () {
      const wrapper = render(<Messages messages={messagesData} members={membersData} />);
      expect(wrapper.find('.message__avatar')).toBeTrue;
    });

    it('a default avatar', function () {
      membersData[0].avatar = null;
      const wrapper = render(<Messages messages={messagesData} members={membersData} />);
      expect(wrapper.find('.message__avatar').prop('src')).toEqual('https://dummyimage.com/100x100/000/fff&text=default');
    });

    it('a date in a human readable format', function () {
      const wrapper = render(<Messages messages={messagesData} members={membersData} />);
      expect(wrapper.find('.message__date').text()).toBe('Thursday, February 9, 2017, 4:27 AM');
    });
  
  });

  describe('should sort', () => {

    it('messages by time', () => {
      messagesData.push({
        id: '22a454b1-6659-400f-aa77-eaae34a77118',
        userId: '205c9b7a-345d-4aa2-9e4c-56f05f72bbe8',
        message: 'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
        timestamp: '2016-04-14T16:53:55Z'
      });
      const wrapper = render(<Messages messages={messagesData} members={membersData} />);

      expect(wrapper.find('.message__text').first().text()).toBe('Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.');
    });

  });
});
