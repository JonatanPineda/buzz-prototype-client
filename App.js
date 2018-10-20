import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './components/Navigator'
import { Provider } from 'react-redux'
import store from './store'
import { doFetchRoutes } from './actions/routes'

//store.dispatch(doFetchRoutes())

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <Navigator />
      </Provider>
    );
  }
}
