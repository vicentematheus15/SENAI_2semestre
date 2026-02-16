import {View, Text, Button, TextInput, StyleSheet} from 'react-native'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Login() {
    const [nomeUsuario, setNomeUsuario] = useState()
    const [senha, setSenha] = useState()
//async significa que sera uma função assincrona e mais embaixo tem um await, que indica que é pra esperar, pois provavelmente é alguma função que está fazendo alguma requisição e vai demorar um pouco
    const entrar = async () => {
//verifica no localstorage os usuarios cadastrados e se existir,pega o que tiver la, da um parse e coloca na variavel data, depois na lista de usuarios. Se não tiver nada, recebe uma array vazia
        const data = await AsyncStorage.getItem('usuarios');
        const listaUsuarios = data ? JSON.parse(data) : [];
//cria o isvalid para verificar se o usuario é válido e determina ele como false de inicio
        let isValid = false;
//faz um for in verificando cada index da array lista de usuarios. Se algum par de chave, nome e senha da arayn bater com o que foi digitado na tentativa de login, troca valor de isValid pra true e da um break na verificação dos indices da array, saindo do for e seguindo o codigo
        for (const index in listaUsuarios){
            if(listaUsuarios[index].nomeUsuario === nomeUsuario &&
                listaUsuarios[index].senha === senha
            ){
                isValid = true
                break
            }
        }
//se o isvalid for true, mostra que pode entrar, senao for, mostra que nao pode entrar
        if (isValid) {
            alert(nomeUsuario + ' Pode entrar')
        }else{
            alert(nomeUsuario + ' Não pode entrar')
        }

    }

    return(
        <View>
            <Text>Login</Text>

            <TextInput placeholder='Nome de Usuário'
                value={nomeUsuario}
                onChangeText={setNomeUsuario}
                

            ></TextInput>

            <TextInput placeholder='Senha'
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            ></TextInput>

            <Button title='Entrar' color='#28a745' onPress={entrar}
            ></Button>


        </View>
    )
}