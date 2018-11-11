import React, { Component } from 'react';
import {Image, StyleSheet, Text, View, Button, ImageBackground,TouchableHighlight} from 'react-native';
import { Actions } from 'react-native-router-flux'
class Home extends Component {
  render(){
    return (
        <ImageBackground source={require('../../assets/background.jpg')} style={styles.backgroundContainer}> 
            <View style={styles.ContentContainer} >
                <View style={styles.box1}>
                    <Image source= {require('../../assets/logo.png')} style={{width:70, height:70}} />
                    <Text style={{fontSize:25, fontWeight: '700'}}>App Name</Text>
                </View>
                <View style={styles.box2}>

                <TouchableHighlight style ={styles.buttonStyle1}  onPress={() => Actions.login()}>
                <Text style={{fontSize:20, fontWeight: '600', color: 'white'}}>Login</Text>
                </TouchableHighlight> 

                <TouchableHighlight style ={styles.buttonStyle2} onPress={() => {}}>
                <Text style={{fontSize:20, fontWeight: '600', color: 'black'}}>Sign Up</Text>
                </TouchableHighlight> 

                </View>         
           </View>
        </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
    backgroundContainer:{
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
        
    },
    ContentContainer:{
        backgroundColor: 'rgba(100, 48, 34, 0.7)', 
        flex: 1
    },
    box1:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box1Content:{
        flex: 1,
        
    },
    box2:{
        flex: 2,
        alignItems: 'center'
        
    },
    buttonStyle1: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width:250,
        borderRadius:10,
        borderColor: 'white',
        borderStyle: 'solid',
        borderWidth: 0.5,
        marginLeft :50,
        marginRight:50,
        marginTop :20
    },
    buttonStyle2: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width:250,
        backgroundColor: 'white',
        borderRadius:10,
        borderColor: 'white',
        borderStyle: 'solid',
        borderWidth: 0.5,
        marginLeft :50,
        marginRight:50,
        marginTop :20
    },
 
  });
  
export default Home;