import { View, Text, StyleSheet,Image } from "react-native";
import { Link } from 'expo-router';

export default function Consultas() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Consultas</Text>
            
            <Link href="/cadastro" style={styles.botao}>
                <Text style={styles.textoBotao}>Agendar outra consulta</Text>
            </Link>

            <Text style={styles.subtitle}>Próximas consultas</Text>
           <View style={styles.card}>
                <Text style={styles.nome}>Dra. Ana Lúcia</Text>
                <Image source={require('../../assets/image/foto.png')} style={styles.logo} />
                <Text style={styles.dados}>Angiologista</Text>
                <Text style={styles.dados}>14/02/2023 14:00 </Text>
                 
                <Link href="/cadastro" style={styles.botao}>
                <Text style={styles.textoBotao}>Cancelar</Text>
                </Link>
            </View>
            <Text style={styles.subtitle}>Próximas consultas</Text>
            <View style={styles.cardazul}>
                <Text style={styles.nome}>Dra. Ana Lúcia</Text>
                <Image source={require('../../assets/image/foto.png')} style={styles.logo} />
                <Text style={styles.dados}>Angiologista</Text>
                <Text style={styles.dados}>14/02/2023 14:00 </Text>
                 
                <Link href="/cadastro" style={styles.botao}>
                <Text style={styles.textoBotao}>Agendar proxima consulta</Text>
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#000080', 
    },
    botao: {
        backgroundColor: '#191970',
        padding: 15,
        width: '80%',
        margin: 10,
        borderRadius: 10,
        alignItems: 'center', 
    },
    textoBotao: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold', 
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 10,
        color: '#000080', 
    },
    card: {
        width: '80%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5, 
        marginTop: 10,
    },
    nome: {
        color: '#000080',
        fontSize: 16,
    },
    cardazul: {
        width: '80%',
        padding: 20,
        backgroundColor: '#f0f8ff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5, 
        marginTop: 10,
    },
    dados:{

    },
    logo:{
        
    }
});