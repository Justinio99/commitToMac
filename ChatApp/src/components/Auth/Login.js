import { connect } from 'react-redux'
import React, { Component } from 'react'
import { signIn } from '../../store/actions/AuthAction'
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';
export class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) =>{
   e.preventDefault();
   this.props.signIn(this.state);
    this.props.history.push('/');

   
  }

render() {
  return (
    <View>
    <Text>email</Text>
    <TextInput onChangeText={(text)=> this.state.email = text}></TextInput>
    </View>
  )
}
}
const mapStateToProps = (state) => {
  return{
  testLogin: true
  }
}
const mapDispachToProps = (dispatch) =>{
  return{
   
  }
}

export default connect(mapStateToProps, mapDispachToProps)(Login)