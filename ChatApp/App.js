import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import store from './src/store'
import { Provider } from 'react-redux'
import Login from './src/components/Auth/Login'
import Home from './src/components/Auth/Home'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <Scene key="root" >
          <Scene key="home" component={Home} />
          <Scene key="login" component={Login} key="login"/>
        </Scene>
      </Router>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
