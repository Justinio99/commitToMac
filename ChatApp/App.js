import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard'

export default class App extends Component {
  render() {
    return (
      
     <Router navBar = {Navbar}>

      <Scene key="root" >
     
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
