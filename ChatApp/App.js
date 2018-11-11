import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Dashboard from './components/dashboard/Dashboard'
import Home from './components/Auth/Home'
export default class App extends Component {
  render() {
    return (
      
      <Router>
        <Scene key="root" >
          <Scene key="home" component={Home} />
          <Scene key="tab1" component={Dashboard} />
        </Scene>
      </Router>

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
