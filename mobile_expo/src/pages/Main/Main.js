import React from 'react';
import { View, Image, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

import logo from '../../assets/logo.png';

export default function Main({navigation}) {
    return (
        <View style={styles.container}>
                <Image style={styles.logo} source={logo}/>

                <Text>Em caso de Emergência, ligue 193!</Text>

                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Warn')}>
                    <Text style={styles.btnText}>Novo Chamado</Text>
                </TouchableOpacity>
                <View style={styles.comoUsar}>
                    <Text style={{textDecorationLine: 'underline', fontSize: 18}}>Como usar:</Text>
                    <Text>- Tire uma foto do local do incidente</Text>
                    <Text>- Caso tenha alguma observação, preencha no local indicado</Text>
                </View>

                <TouchableOpacity style={styles.termosDeUso} >
                    <Text style={styles.termosDeUso}>Termos de Uso</Text>
                </TouchableOpacity>

             
        </View>
    
    );
}

    const styles = StyleSheet.create({
        container: {
            flex: 1,            
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: '#ad3e03',
        },

        logo: {           
           marginTop: '10%'
        },

        btn: {
            height: 100, 
            backgroundColor: '#fff', 
            borderRadius: 10,
            width: '80%',
            marginTop: 'auto',
            marginBottom: 'auto',
            marginStart: 'auto',
            marginEnd: 'auto',
            
        },

        btnText: {
            fontSize: 30,
            alignSelf: 'center',
            marginTop: 'auto',
            marginBottom: 'auto',
        },

        termosDeUso: {
            marginTop: 'auto',
            fontSize: 16,
            borderColor: '#000',
            borderWidth: 1,
            borderRadius: 5,
            padding: 2
        },

        comoUsar: {
            marginBottom: 'auto',
            width: '80%',
            fontSize: 16

        }

    })
