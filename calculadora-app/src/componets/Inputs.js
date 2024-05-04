
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Inputs({ text_label, valor_numero, set_valor_numero }) {
    return (
        <>
            <View>
                <Text style={styles.texto}>{text_label}</Text>

                <TextInput
                    style={styles.inputCaja}
                    placeholder={text_label}
                    keyboardType='number-pad'
                    value={valor_numero}
                    onChangeText={set_valor_numero}
                />
            </View>
        </>
    );

}
const styles = StyleSheet.create({
    inputCaja: {
        backgroundColor: 'lightgrey',
        width: 300,
        padding: 10,
        margin: 5,
        color: 'black',
        borderRadius: 5,
    }, texto: {
        fontSize: 30,
        backgroundColor: 'blue',
        padding: 10,
        marginBottom: 20,
        color: 'white',
    },

});
