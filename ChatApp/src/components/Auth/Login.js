import { connect } from 'react-redux'
import React, { Component } from 'react'
import { signIn } from '../../store/actions/AuthAction'
import {Button, StyleSheet, Text, View, TextInput, CameraRoll} from 'react-native';
export class Login extends Component {

  state = {
    email: '',
    password: '',
    image: ''
  }

  login(){
    this.props.signIn(this.state);
    console.log(this.props)
  }
  getPhotos = () =>{
    CameraRoll.getPhotos({
      first: 10,
      assetType: 'All'
    }).then((r)=>{
      console.log(r)
    })
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
  console.log(state)
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

