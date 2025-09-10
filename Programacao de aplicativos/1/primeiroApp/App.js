import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'; //as tags tem que ser importadas antes de usar
import { useState } from 'react';

//aqui ficam as funcoes e variáveis do app
export default function App() {
// useState faz com que a variavel que aparece na tela sempre seja atualizada, não precisando utilizar comandos para mostrar na tela apos alguma alteração no valor
  const [primeiroNumero, setPrimeiroNumero] = useState(0);
  const [segundoNumero, setSegundoNumero] = useState(0);
  const [resultado, setResultado] = useState(0);

  const soma = () =>{
    const resultadoSoma = parseFloat(primeiroNumero) + parseFloat(segundoNumero);
    setResultado(resultadoSoma)
  }

  const subtracao = () =>{
    const resultadoSubtracao = parseFloat(primeiroNumero) - parseFloat(segundoNumero);
    setResultado(resultadoSubtracao)
  }

  const multiplicacao = () =>{
    const resultadoMultiplicacao = parseFloat(primeiroNumero) * parseFloat(segundoNumero);
    setResultado(resultadoMultiplicacao)
  }

  const divisao = () =>{
    const resultadoDivisao = parseFloat(primeiroNumero) / parseFloat(segundoNumero);
    setResultado(resultadoDivisao)
  }

  return (
//aqui vao as tags
    <View style={styles.container}>
      <Text style={styles.titulo} >
        Calculadora
      </Text>

      <TextInput placeholder='Primeiro número'
        style={styles.input} onChangeText={setPrimeiroNumero}
      ></TextInput>

      <TextInput placeholder='Segundo número'
        style={styles.input} onChangeText={setSegundoNumero}
      ></TextInput>
    <View style={styles.button}>

      <Button onPress={soma} title='+'></Button>

      <Button onPress={subtracao} title='–'></Button>

      <Button onPress={multiplicacao} title='×'></Button>

      <Button onPress={divisao} title='÷'></Button>
    </View>

      <Text style={styles.result}>
        {resultado}
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}
//aqui vao os styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontWeight: 'bold'
  },
  input: {
    padding: 12,
    margin: 5, 
    backgroundColor: '#888'
  },
  button: {
    flexDirection: 'row',
    gap: 5
  },
  result: {
    margin: 10,
    padding: 12,
    backgroundColor: '#444',
    fontWeight: 'bold'
  }
});
