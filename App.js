

import React, {Component} from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import TextInt from './src/components/textInt'
import Form from './src/components/form'
import { createStackNavigator, createAppContainer } from "react-navigation";


export default class App extends React.Component {
  render() {
    return (
      <ImageBackground source={require('./assets/img/car.png')} style={styles.container}>
      <View style={styles.view}>
        <TextInt/>
        <Form/>
      
      </View>
        
    </ImageBackground>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

export default createAppContainer(AppNavigator);

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
  }
});
