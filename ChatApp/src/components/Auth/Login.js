import { connect } from 'react-redux'
import React, { Component } from 'react'
import { signIn } from '../../store/actions/AuthAction'
import {Button, StyleSheet, Text, View, TextInput} from 'react-native';
export class Login extends Component {

  state = {
    email: '',
    password: ''
  }

  login(){
    this.props.signIn(this.state);
  }
  

render() {
  return (
    <View>
      <Text>email</Text>
      <TextInput onChangeText={(email)=> this.state.email = email} style={styles.textInput}></TextInput>
      <Text>Password</Text>
      <TextInput onChangeText={(pass)=> this.state.password = pass} style={styles.textInput}></TextInput>
      <Button onPress={()=> this.login()} title={'Login'}></Button>
    </View>
  )
}
}
const mapStateToProps = (state) => {
  return{
  authError: state.authError
  }
}
const mapDispachToProps = (dispatch) =>{
  return{
    signIn: (credentials) => dispatch(signIn(credentials))
  }
}

export default connect(mapStateToProps, mapDispachToProps)(Login)

const styles = StyleSheet.create({
  textInput:{
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 0.5,
    height: 40,
    width:250,
  },
});

