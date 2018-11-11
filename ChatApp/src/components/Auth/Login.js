import { connect } from 'react-redux'
import React, { Component } from 'react'
import { signIn } from '../../store/actions/AuthAction'

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
  const { authError } = this.props;

  return (
    <View>

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