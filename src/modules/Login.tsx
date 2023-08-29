import React from 'react';
import { View, StyleSheet, TextInput, Button, Text, Image } from 'react-native';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const img = require('../../assets/logo.png');

export default function Login() {
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate('Networking' as never);
  };
  return (
    <>
      <View style={styles.container2}>
        <Image source={img} style={styles.logo} />
        <TextInput style={styles.input} placeholder="Usuario" />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
        />
        <Button title="Ingresar" onPress={handleLogin} />
        <Button title="Olvidé mi contraseña" color="black" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container2: {
    margin: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 18,
    marginBottom: 8
  },
  input: {
    height: 40,
    alignSelf: 'stretch',
    borderColor: '#bbb',
    borderWidth: 1,
    margin: 8,
    padding: 5,
    borderRadius: 8,
    width: windowWidth - 40
  },
  logo: {
    width: '80%',
    height: 120,
    marginBottom: 30
  }
});
