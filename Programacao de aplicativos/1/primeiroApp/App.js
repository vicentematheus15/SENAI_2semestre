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


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

});
