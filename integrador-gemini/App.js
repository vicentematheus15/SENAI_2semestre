import { StyleSheet, Text, View } from 'react-native';
import Cadastro from './componentes/Cadastro';
import Login from './componentes/Login'
import Gemini from './componentes/Gemini'

export default function App() {
  return (
    <View style={styles.container}>

{/* o cadastro.js aparece na tela porque a função criada lá RETORNA o que deve ser mostrado */}
      <Gemini></Gemini>

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
});
