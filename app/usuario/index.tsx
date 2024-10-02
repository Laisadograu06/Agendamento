import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import { Link } from "expo-router";

export default function Home() {
    const [texto, setTexto] = useState('');

    return (
        <View style={styles.container}>
           <View style={styles.left}>
                <Image source={require('../../assets/image/inicio.png')} style={styles.cima} />
                <Text style={styles.titulo}>Boas-vindas!</Text>
            </View>
            <View style={styles.quadrado}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite a especialidade"
                    value={texto}
                    onChangeText={setTexto}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua localização"
                    value={texto}
                    onChangeText={setTexto}
                />
                
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.botaoText}>Buscar</Text>
                </TouchableOpacity>
            </View> 
            
            <Text style={styles.depoimentoTitulo}>Depoimentos</Text>
            <Text style={styles.depoimentos}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            </Text>
            <Text style={styles.titulodepoimento}>Júlio, 40 anos, São Paulo/SP.</Text>
            
            <Text style={styles.depoimentos}>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
            </Text>
            <Text style={styles.titulodepoimento}>Júlio, 40 anos, São Paulo/SP.</Text>
            
            <Text style={styles.depoimentos}>
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        
        backgroundColor: '#ffffff'

    },
    left: {
        alignSelf: 'flex-start', 
        marginLeft: 40, 
    },
    cima:{
        width: 150,
        height: 100,
    },
    titulo: {
        fontSize: 26,
        color: '#1E90FF',
        fontWeight: 'bold',
    },
    quadrado: {
        borderRadius: 10,
        padding: 30,
        marginTop: 50,
        width: '90%',
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: '#f8f8f8',
        fontSize: 16,
    },

    link: {
        marginTop: 20,
    },
    botao: {
        backgroundColor: '#1E90FF',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    botaoText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    depoimentos: {
        width: '90%',
        marginTop: 10,
        fontSize: 14,
        color: '#555',
        lineHeight: 20,
    },
    depoimentoTitulo: {
        marginTop: 30,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1E90FF',
    },
    titulodepoimento: {
        marginTop: 10,
        fontSize: 15,
        fontStyle: 'italic',
        color: '#1E90FF',
    },
});
