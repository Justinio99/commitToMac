const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch(action.type){
    //Return currantState and error when Loggin Failed
    case 'LOGIN_ERROR':
      console.log('login error');
      return {
        ...state,
        authError: 'Login failed'
      }
      //Return state when loggin succeed
      case 'LOGIN_SUCCESS':
      console.log('login success');
      return {
        ...state,
        authError: null
      }
      //Return state when Signup succeed
      case 'SIGNUP_SUCCESS':
      console.log('SIGNUP_SUCCESS')
      return{
        ...state,
        authError:null
      }
      //Return currantState and error when Signup succeed
      case 'SIGNUP_ERROR':
      console.log('SIGNUP_ERROR')
      return{
        ...state,
        authError: action.err.message
      }
    default:
      return state
  }
};

export default authReducer;