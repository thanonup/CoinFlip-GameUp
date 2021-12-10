import React, { useState } from 'react';
import { StyleSheet, Text, View , Button , TouchableOpacity} from 'react-native';
import LoadingScene from './src/LoadingScene';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    Olylum: require('./src/fonts/Olylum-Font.ttf'),
    FcMinimal: require('./src/fonts/FC-Minimal-Regular.ttf'),
    Pind: require('./src/fonts/Pind-text.ttf'),
  });

  const [play, setPlay] = useState(false)

  const [coinSelect, setSelect] = useState(0)

  const onPress = (select) => {
      setPlay(true)
      setSelect(select)
  };

  return play ? (
      <LoadingScene coinState={coinSelect} doOnClick={() => setPlay(false)} />
    ): (
    <View style={styles.container}>
        <Text style={styles.logo}>🥮</Text>
        <Text style={styles.header}>Welcome to FlipCoin <br/>Up Project!</Text>
      <View style={styles.buttonGroup}>
      </View>
    <View>
      <Text style={styles.title}>
        เลือก "หัว" หรือ "ก้อย"
      </Text>
      <View style={styles.fixToText}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onPress(0)}
        >
          <Text style={styles.textButton}>    หัว    </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.button}
        onPress={() => onPress(1)}
        >
          <Text style={styles.textButton}>  ก้อย  </Text>
      </TouchableOpacity>
      </View>
    </View>
    </View>
    );
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffda79',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    fontFamily: 'FcMinimal',
    fontSize: 40,
    padding: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#222f3e',
  },
  logo:{
    marginBottom: -10,
    fontSize:80,
  },
  title: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "white",
    textAlign: 'center',
    marginVertical: 8,
    fontWeight: 'bold',
    marginTop: -10,
    color: '#222f3e',
    fontFamily : 'FcMinimal',
    fontSize: 25,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#192a56',
    paddingVertical: 10,
    paddingHorizontal : 20,
  },
  textButton: {
    color: '#fbc531',
    fontWeight: 'bold',
  },
  fixToText: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
