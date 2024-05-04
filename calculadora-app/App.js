import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Inputs from './src/components/Inputs';
import Botones from './src/components/Botones';

export default function App() {
    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [resultado, setResultado] = useState(0);

    const Sumar = () => {
        setResultado(parseFloat(numero1) + parseFloat(numero2));
    };

    const Restar = () => {
        setResultado(parseFloat(numero1) - parseFloat(numero2));
    };
    const Multiplicar = () => {
        setResultado(parseFloat(numero1) * parseFloat(numero2));
    };
    const Dividir = () => {
        setResultado(parseFloat(numero1) / parseFloat(numero2));
    };

    const clean = () => {
        setNumero1('');
        setNumero2('');
    };


    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Calcular entre dos números</Text>

            <Inputs
                text_label='Ingrese el número 1:'
                valor_numero={numero1}
                set_valor_numero={setNumero1}
            />
            <Inputs
                text_label='Ingrese el número 2:'
                valor_numero={numero2}
                set_valor_numero={setNumero2}
            />

            <StatusBar style="auto" />
            <TouchableOpacity
                style={styles.boton}
                onPress={Sumar}
            >
                <Text style={{ textAlign: 'center' }}>Sumar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.botonR}
                onPress={Restar}
            >
                <Text style={{ textAlign: 'center' }}>Restar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.botonM}
                onPress={Multiplicar}
            >
                <Text style={{ textAlign: 'center' }}>Multiplicar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.botonD}
                onPress={Dividir}
            >
                <Text style={{ textAlign: 'center' }}>Dividir</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.botonC}
                onPress={clean}
            >
                <Text style={{ textAlign: 'center' }}>Limpiar Campos</Text>
            </TouchableOpacity>


            <Text>
                numero 1: {numero1}
            </Text>

            <Text>
                numero 2: {numero2}
            </Text>
            <Text>

                Resultado: {resultado}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    boton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    textoBoton: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }, texto: {
        fontSize: 30,
        padding: 10,
        marginBottom: 20,
        color: 'black',
    },botonR:{
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },botonM:{
        backgroundColor: 'orange',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },botonD:{
        backgroundColor: 'yellow',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },botonC:{
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        color:'#fff',
        marginBottom: 30,
    }
});