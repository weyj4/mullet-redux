import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './configureStore';
import Main from './components/Main';

class Index extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('facebook')
);
