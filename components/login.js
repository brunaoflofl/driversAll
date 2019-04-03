

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, 
                  View, Button, Image,
                  TouchableWithoutFeedback, StatusBar,
                  TextInput, SafeAreaView, Keyboard, 
                  TouchableOpacity, KeyboardAvoidingView, ImageBackground } from 'react-native';

import Botoes from '../components/botoes'



export default class Login extends Component {
  render() {
    return (
    <ImageBackground source={require('../assets/img/car.png')} style={styles.container}>
      <View style={styles.view}>
      <Text style={styles.title}>Drivers ALL</Text>
      <Text style={styles.info}>Gerenciador de aplicativos 
      de transporte</Text>
      <Text style={styles.subt}>Comece a ganhar mais!</Text>
        
        <Botoes></Botoes>
      </View>
    </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  view: {
    width: '80%',
    height: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)'
  },
  title: {
    marginTop: 60,
    margin: 15,    
    textAlign: 'center',
    color: '#000000',
    fontSize: 60
  },
  info: {
    textAlign: 'center',
    fontSize: 20
  },
  subt: {
    textAlign: 'center',
    fontSize: 25,
    color: '#000000',
    marginTop: 15

  }


});
