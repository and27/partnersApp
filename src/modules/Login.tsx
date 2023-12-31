import React, { useContext } from 'react';
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
import { Context } from '../../App';

const windowWidth = Dimensions.get('window').width;
const img = require('../../assets/logo.png');

export default function Login() {
  const { setIsSignedIn } = useContext(Context);
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate('Perfil' as never);
    setIsSignedIn(true);
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
        <Pressable style={styles.btn} onPress={handleLogin}>
          <Text style={styles.btnText}>Ingresar</Text>
        </Pressable>
        <Button title="Olvidé mi contraseña" color="black" />
        <Button
          title="Registrarme"
          onPress={() => {
            navigation.navigate('Registro' as never);
          }}
        />
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
    marginTop: 8,
    padding: 5,
    borderRadius: 8,
    width: windowWidth - 40,
    backgroundColor: COLORS.primaryWhite
  },
  logo: {
    width: '80%',
    height: 120,
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
