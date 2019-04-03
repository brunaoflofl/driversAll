
import React, {Component} from 'react';
import { StyleSheet, Text, 
                  View, 
                  TouchableOpacity } from 'react-native';

                  export default class Botoes extends Component {
                      render(){
                          return(
                            <View  style={styles.infoContainer}>
                   
                            <TouchableOpacity style={styles.btnContainer}>
                                <Text style={styles.btnText}>Entrar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnContainer}>
                                <Text style={styles.btnText}>Cadastrar</Text>
                            </TouchableOpacity>
                              <Text style={styles.recuperarS}>Esqueci minha senha</Text>
                        </View>

                          )
                      }
                  }
            const styles = StyleSheet.create({
                btnContainer: {
                    marginBottom: 20,
                    paddingVertical: 15,
                    backgroundColor: '#ffaa1c',
                }, 
                btnText: {
                    textAlign: 'center',
                    color: '#FFFFFF',
                    fontWeight: 'bold',
                    fontSize: 18
                },
                recuperarS: {
                  color: '#000000',
                  fontSize: 12,
                  textAlign: 'center'
                
            },
            infoContainer: {
              flex: 3,
              height: 180,
              padding: 20,   
              justifyContent: 'flex-end'
            }
        });
              

          