import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { render, shallow } from 'enzyme';

import App from './App';

describe('<App />', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App.WrappedComponent isLoading getChatLog={() => {}} getMembersList={() => {}} />, div);
  });

  describe('should call getChatLog()', () => {

    it('getChatLog', () => {
      const onClick = sinon.spy();
      const wrapper = shallow(<App.WrappedComponent isLoading getChatLog={onClick} getMembersList={() => {}} />);

      expect(onClick.calledOnce).toBeTrue;
    });

  });

  describe('should call getMembersList()', () => {

    it('getMembersList', () => {
      const onClick = sinon.spy();
      const wrapper = shallow(<App.WrappedComponent isLoading getChatLog={() => {}} getMembersList={onClick} />);

      expect(onClick.calledOnce).toBeTrue;
    });

  });
});
