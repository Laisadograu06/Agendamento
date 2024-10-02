import React, { useState } from 'react';
import { View, TextInput, Text, Alert, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { clienteDatabase } from '../database/clienteDatabase';
import { router } from 'expo-router';
import CheckBox from 'expo-checkbox';

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaConfirmacao, setSenhaConfirmacao] = useState('');
    const [complemento, setComplemento] = useState('');
    const [step, setStep] = useState(1);
    const [planoSaude, setPlanoSaude] = useState('');

    const { cadastrar } = clienteDatabase();

    const handleSalvarCliente = async () => {
        if (!nome || !email || !cep || !endereco || !numero || !telefone || !senha || !senhaConfirmacao || !planoSaude || !complemento) {
            Alert.alert("Erro", "Todos os campos são obrigatórios");
            return;
        }

        if (senha !== senhaConfirmacao) {
            Alert.alert("Erro", "As senhas não coincidem");
            return;
        }

        try {
            await cadastrar({
                nome,
                email,
                cep,
                endereco,
                numero: parseInt(numero),
                telefone,
                senha,
                complemento,
                planoSaude,
            });

            Alert.alert("Sucesso", "Cliente cadastrado com sucesso!");

            setNome('');
            setEmail('');
            setCep('');
            setEndereco('');
            setNumero('');
            setTelefone('');
            setSenha('');
            setSenhaConfirmacao('');
            setComplemento('');
            setPlanoSaude('');

        } catch (error) {
            console.error("Erro ao adicionar o cliente:", error);
            Alert.alert("Erro", "Não foi possível cadastrar o cliente");
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={require('../../assets/image/logo1.png')} style={styles.logo} />

                {step === 1 && (
                    <View style={styles.conteudo}>
                        <Text style={styles.escrita}>Insira alguns dados básicos:</Text>

                        <Text style={styles.label}>Nome:</Text>
                        <TextInput
                            value={nome}
                            onChangeText={setNome}
                            placeholder="Digite o nome"
                            style={styles.input}
                        />

                        <Text style={styles.label}>Email:</Text>
                        <TextInput
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Digite o email"
                            keyboardType="email-address"
                            style={styles.input}
                        />

                        <Text style={styles.label}>Crie uma senha:</Text>
                        <TextInput
                            value={senha}
                            onChangeText={setSenha}
                            placeholder="Digite a senha"
                            secureTextEntry
                            style={styles.input}
                        />

                        <Text style={styles.label}>Repita a senha:</Text>
                        <TextInput
                            value={senhaConfirmacao}
                            onChangeText={setSenhaConfirmacao}
                            placeholder="Repita a senha"
                            secureTextEntry
                            style={styles.input}
                        />

                        <TouchableOpacity style={styles.botaoVoltar} onPress={() => router.push('/')}>
                            <Text style={styles.textoBotao}>Voltar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.botao} onPress={() => setStep(2)}>
                            <Text style={styles.textoBotao}>Avançar</Text>
                        </TouchableOpacity>
                    </View>
                )}

                {step === 2 && (
                    <View style={styles.conteudo}>
                        <Text style={styles.escrita}>Agora, mais alguns dados sobre você:</Text>

                        <Text style={styles.label}>CEP:</Text>
                        <TextInput
                            value={cep}
                            onChangeText={setCep}
                            placeholder="Digite o CEP"
                            keyboardType="numeric"
                            style={styles.input}
                        />

                        <Text style={styles.label}>Endereço:</Text>
                        <TextInput
                            value={endereco}
                            onChangeText={setEndereco}
                            placeholder="Digite o endereço"
                            style={styles.input}
                        />

                        <Text style={styles.label}>Número:</Text>
                        <TextInput
                            value={numero}
                            onChangeText={setNumero}
                            placeholder="Digite o número"
                            keyboardType="numeric"
                            style={styles.input}
                        />

                        <Text style={styles.label}>Complemento:</Text>
                        <TextInput
                            value={complemento}
                            onChangeText={setComplemento}
                            placeholder="Digite o complemento"
                            style={styles.input}
                        />

                        <Text style={styles.label}>Telefone:</Text>
                        <TextInput
                            value={telefone}
                            onChangeText={setTelefone}
                            placeholder="Digite o telefone"
                            keyboardType="numeric"
                            style={styles.input}
                        />

                        <TouchableOpacity style={styles.botaoVoltar} onPress={() => setStep(1)}>
                            <Text style={styles.textoBotao}>Voltar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.botao} onPress={() => setStep(3)}>
                            <Text style={styles.textoBotao}>Avançar</Text>
                        </TouchableOpacity>
                    </View>
                )}

                {step === 3 && (
                    <View style={styles.conteudo}>
                        <Text style={styles.escrita}>Para finalizar, qual seu plano de saúde?</Text>
                        <Text style={styles.check}>Selecione o plano:</Text>

                        {['Sulamerica', 'Unimed', 'Bradesco', 'Amil', 'Biosaúde', 'Biovida', 'Outros', 'Nenhum'].map((plano) => (
                            <View style={styles.opcao} key={plano}>
                                <CheckBox
                                    value={planoSaude === plano}
                                    onValueChange={() => setPlanoSaude(plano)}
                                />
                                <Text style={{ marginLeft: 10 }}>{plano}</Text>
                            </View>
                        ))}

                        <TouchableOpacity style={styles.botaoVoltar} onPress={() => setStep(2)}>
                            <Text style={styles.textoBotao}>Voltar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.botao} onPress={handleSalvarCliente}>
                            <Text style={styles.textoBotao}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        margin: 20
    },
    conteudo: {
        width: '100%',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333',
        width: '100%',
    },
    input: {
        borderWidth: 1,
        borderColor: 'transparent',
        padding: 10,
        borderRadius: 5,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: '#F8F8F8',
        width: '100%',
    },
    escrita: {
        fontSize: 25,
        marginTop: 100
    },
    logo: {
        top: 70,
    },
    botao: {
        backgroundColor: '#191970',
        padding: 15,
        margin: 10,
        borderRadius: 10,
        width: '100%'
    },
    textoBotao: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center'
    },
    botaoVoltar: {
        backgroundColor: '#cccccc',
        padding: 15,
        margin: 10,
        borderRadius: 10,
        width: '100%'
    },
    opcao: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%',
        margin: 10,
        marginTop: 5,
    },
    check: {

    },

});

