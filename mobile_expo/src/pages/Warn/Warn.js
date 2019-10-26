import React from 'react';
import { View, Text, Button, Image }  from 'react-native';

import triangle_exclamation from '../../assets/triangle_exclamation.png';

export default function Warn({navigation}){
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={triangle_exclamation}></Image>
            <Text style={{ fontSize: 30 }}>This is a modal!</Text>
            <Button
            onPress={() => navigation.navigate('Main')}
            title="Dismiss"
            />
        </View>
    );
}
