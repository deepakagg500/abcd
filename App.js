import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Alphabet from "./components/Alphabet/Alphabet";
import AlphabetHome from "./components/AlphabetHome";


export default function App() {
  return (
    <View style={styles.container}>
      <AlphabetHome/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d94a3c',
    alignItems: 'center',
    justifyContent: 'center',
  },

  home: {
    flex:1
  }
});
