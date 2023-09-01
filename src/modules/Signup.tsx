import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Text,
  Image,
  Pressable
} from 'react-native';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../colors';

const windowWidth = Dimensions.get('window').width;
const img = require('../../assets/logo.png');

export default function Signup({ setIsSignedIn }) {
  const navigation = useNavigation();
  const handleSignup = () => {
    navigation.navigate('Networking' as never);
    setIsSignedIn(true);
  };
  return (
    <>
      <View style={styles.container2}>
        <Image source={img} style={styles.logo} />
        <TextInput style={styles.input} placeholder="Correo" />
        <TextInput style={styles.input} placeholder="Nombre" />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
        />
        <Pressable style={styles.btn} onPress={handleSignup}>
          <Text style={styles.btnText}>Registrarme</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container2: {
    marginHorizontal: 20,
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
    marginTop: 8,
    padding: 5,
    borderRadius: 8,
    width: windowWidth - 40,
    backgroundColor: COLORS.primaryWhite
  },
  logo: {
    width: '70%',
    height: 110,
    marginBottom: 30
  },
  btn: {
    backgroundColor: COLORS.green,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 48,
    marginTop: 8,
    alignSelf: 'stretch',
    display: 'flex',
    alignItems: 'center'
  },
  btnText: {
    color: COLORS.primaryWhite
  }
});
