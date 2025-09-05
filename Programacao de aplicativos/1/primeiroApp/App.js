import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
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
    <View style={styles.container}>
      <Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
