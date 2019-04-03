import React, {Component} from 'react'
import {StyleSheet, Text, View, ImageBackground } from 'react-native'

export default class Splash extends Component {
    render(){     
        return (
            <ImageBackground source={require('../assets/img/car.png')}
            style={styles.container}>
                <Text style={styles.title}>Drivers ALL</Text>
            
            </ImageBackground>
            
               

            
        )

    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,       
        alignItems: 'center',       
        justifyContent: 'center',
    }, 
    title: {
        fontSize: 50,
        color: '#FFFFFF'
    }
})