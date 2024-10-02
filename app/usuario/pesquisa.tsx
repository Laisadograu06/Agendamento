import { View, Text, StyleSheet, Image,TextInput } from "react-native";
import React, { useState } from 'react';
import { Link } from 'expo-router';

export default function Pesquisa() {
    const [texto, setTexto] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.maior}>
                <View style={styles.barra}>
                    <TextInput
                style={styles.input}
                placeholder="Digite a especialidade"
                value={texto}
                onChangeText={setTexto}
                />
                </View>

                <View style={styles.barra}>
                    <TextInput
                style={styles.input}
                placeholder="Digite sua localização"
                value={texto}
                onChangeText={setTexto}
                />
                </View>
                
                <Link href="/usuario" style={styles.botao}>
                    <Text style={styles.textoBotao}>Busca</Text>
                </Link>
            </View>

            <Text style={styles.subtitle}>Resultado da busca</Text>

            <View style={styles.card}>
                <Text style={styles.nome}>Dra. Ana Lúcia</Text>
                <Image source={require('../../assets/image/foto.png')} style={styles.logo} />
                <Text style={styles.dados}>Angiologista</Text>
                <Text style={styles.dados}>14/02/2023 14:00</Text>

                <Link href="/cadastro" style={styles.botao}>
                    <Text style={styles.textoBotao}>Agendar outra consulta</Text>
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
 
    textoBotao: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 10,
        color: '#1E90FF',
    },
    card: {
        width: '90%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        marginTop: 10,
        alignItems: 'center',  // Alinha o conteúdo do card
    },
    nome: {
        color: '#000080',
        fontSize: 16,
        marginBottom: 10,
    },
    dados: {
        color: '#000',
        fontSize: 14,
        marginBottom: 5,
    },
    botao: {
        backgroundColor: '#191970',
        padding: 15,
        width: '90%',
        margin: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    barra: {
        backgroundColor: '#F8F8F8',
        padding: 15,
        width: '90%',
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    maior: {
        backgroundColor: '#F8F8F8',
        padding: 15,
        width: '90%',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        marginBottom: 30,
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    input:{
        
    }
});