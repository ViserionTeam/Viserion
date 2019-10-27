import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ScrollView }  from 'react-native';
import triangle_exclamation from '../../assets/triangle_exclamation.png';
import * as FileSystem from 'expo-file-system';


export default function Warn({navigation}){
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={triangle_exclamation}></Image>
                <Text style={{ fontSize: 30 }}>Atenção!</Text>
                <Image source={{uri: `${picture}`}} style={{height:200, width:200}}></Image>
                
                
                <Text style={{fontWeight: 'bold', fontSize: 16}}>Passar TROTE é CRIME!</Text>
                <Text>{"\n"}</Text>
                <Text style={styles.warning}>Art. 340 do Código Penal - Decreto Lei 2848/40</Text>
                <Text style={styles.warning}>Além de atrapalhar o serviço, você pode estar tirando a chance de alguém que realmente precisa ser atendido.</Text>
                <Text style={styles.warning}>Este aplicativo coleta informações referente ao seu aparelho, para identificarmos a origem do chamado.</Text>
                <Text style={styles.warning}>Em caso de trote, os dados serão repassados às autoridades competentes.</Text>
                <Text style={styles.warning}>Não passe trote! {"\n"}</Text>
                <View style={styles.btnView}>
                    <TouchableOpacity style={styles.btnVoltar} onPress={() => navigation.navigate('Main')} >
                        <Text style={styles.txtBtn}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnCiente} onPress={() => navigation.navigate('Cam')}>
                        <Text style={styles.txtBtn}>Estou Ciente</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
        
    );
    
}

function picture ({navigation}){
    let picture = navigation.getParam('item', '');
    console.log(picture)
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'flex-start',
        marginTop: '10%'
    },

    warning: {
        marginHorizontal: '5%',
        fontSize: 18,
        lineHeight: 25,
        textAlign: 'left'
    },

    btnView:{
        flexDirection: 'row',
        width: '100%',
        alignContent: 'flex-start',
        backgroundColor: 'white'
        
    },

    btnVoltar: {
        height: 60, 
        backgroundColor: 'yellow', 
        borderRadius: 10,
        width: 120,
        marginTop: 'auto',
        marginBottom: 'auto',
        marginStart: 'auto',
        marginEnd: 'auto'
    },

    btnCiente: {
        height: 60, 
            backgroundColor: 'red', 
            borderRadius: 10,
            width: 120,
            marginTop: 'auto',
            marginBottom: 'auto',
            marginStart: 'auto',
            marginEnd: 'auto'
    },
    txtBtn: {
        alignSelf: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        fontSize: 18
    }
})
