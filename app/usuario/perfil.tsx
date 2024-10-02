import { View, Text, StyleSheet, Image } from "react-native";
import { Link } from 'expo-router';

export default function Perfil() {
    return (
        <View style={styles.container}>
            <View style={{alignItems:'center' }}>
                <Text style={styles.dados}>Meu perfil</Text>
                <Image source={require('../../assets/image/Perfil.png')} style={styles.perfil} />
            </View>
            <View style={{margin: 20, alignItems:'center' }}>
                <Text style={styles.dados}>Informações pessoais</Text>
                <Text style={styles.letra}>Joana Magalhães Souza</Text>
                <Text style={styles.info}>28/05/1990</Text>
                <Text style={styles.info}>São Paulo - SP</Text>
            </View>

            <View style={styles.separator} />

            <View style={{ marginTop: 20, alignItems:'center' }}>
                <Text style={styles.dados}>Histórico médico</Text>
                <Text style={styles.letra}>Bronquite</Text>
                <Text style={styles.letra}>Sinusite</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5', 
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20, 
    },
    perfil: {
        width: 100,        
        height: 100,       
        borderRadius: 75,  
        borderWidth: 2,    
        borderColor: '#ccc', 
        marginTop:20,
    },
    dados: {
        fontSize: 25,
        color: '#1E90FF',
    },
    letra: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    info: {
        fontSize: 15,
        color: '#555',
        marginBottom: 10, 
    },
    separator: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        width: '90%',
        marginVertical: 20,
    }
});