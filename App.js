import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Login from './src/screens/login';

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    );
  }
}

