import { connect } from 'react-redux'
import React, { Component } from 'react'
import { signUp } from '../../store/actions/AuthAction'
import {Button, StyleSheet, Text, View, TextInput} from 'react-native';

class SignUp extends Component {

  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }

  signUp(){
    this.props.signUp(this.state);
  }
  

render() {
  const { authError } = this.props;
  return (
    <View>
      <Text>email</Text>
      <TextInput onChangeText={(email)=> this.state.email = email} style={styles.textInput}></TextInput>

      <Text>Password</Text>
      <TextInput onChangeText={(pass)=> this.state.password = pass} style={styles.textInput}></TextInput>

      <Text>Firstname</Text>
      <TextInput onChangeText={(firstName)=> this.state.firstName = firstName} style={styles.textInput}></TextInput>

        <Text>Lastname</Text>
      <TextInput onChangeText={(lastName)=> this.state.lastName = lastName} style={styles.textInput}></TextInput>
      <View>
        {authError ? <Text style={{color: 'red'}}>{authError}</Text> : null}
      </View>
      <Button onPress={()=> this.signUp()} title={'SignUp'}></Button>
   
    </View>
  )
}
}
const mapStateToProps = (state) => {
  return {
   // auth: state.firebase.auth,
    authError: state.authReducer.authError
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    signUp: (creds) => dispatch(signUp(creds)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

const styles = StyleSheet.create({
  textInput:{
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 0.5,
    height: 40,
    width:250,
  },
});

