import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default class TextInt extends Component {
  render() {
    return (

    <View>
        <Text style={styles.title}>Drivers ALL</Text>
        <Text style={styles.info}>Gerenciador de aplicativos 
        de transporte</Text>
        <Text style={styles.subt}>Comece a ganhar mais!</Text>
    </View>
    
    );
  }
}

const styles = StyleSheet.create({
  
  
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
