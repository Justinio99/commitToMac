import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import store from './src/store'
import firebase from 'react-native-firebase'
import { Provider } from 'react-redux'
import Login from './src/components/Auth/Login'
import Home from './src/components/Auth/Home'
import SignUp from './src/components/Auth/SignUp'
import Navbar from './src/components/layout/Navbar'
import PostSnap from './src/components/Pages/PostSnap'
export default class App extends Component {
  
  render() {
    const currentUser = firebase.auth().currentUser;
    return (
      <Provider store={store}>
       <View style={{flex: 1}}>
      
      <Router >
        <Scene key="root" >
          <Scene key="home" component={Home} />
          <Scene key="login" component={Login} />
          <Scene key="signUp" component={SignUp} />
          <Scene key="post" component={PostSnap} />
        </Scene>
      </Router>
      <Navbar/>
      </View>
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
