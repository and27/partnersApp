import React, { useContext } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Image,
  Pressable,
  Alert,
  ActivityIndicator
} from 'react-native';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../colors';
import { Context } from '../../App';
import { Controller, SubmitErrorHandler, useForm } from 'react-hook-form';
import { login } from '../utils/supabase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../components/Button';

const windowWidth = Dimensions.get('window').width;
const img = require('../../assets/logo.png');
type FormValues = {
  email: string;
  password: string;
};

export default function Login() {
  const { setIsSignedIn } = useContext(Context);
  const [isLoading, setIsLoading] = React.useState(false);
  const navigation = useNavigation();

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm();

  const onSubmit = (userCredentials: FormValues) => {
    setIsLoading(true);
    handlePasswordLogin(userCredentials);
  };

  const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
    return console.error(errors);
  };

  const handlePasswordLogin = async (userCredentials: FormValues) => {
    const { data, error } = await login({
      email: userCredentials?.email,
      password: userCredentials?.password
    });

    if (error) {
      Alert.alert('Error', error.message, [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        { text: 'OK' }
      ]);
      setIsLoading(false);
      return setIsSignedIn(false);
    }

    const userInfo = {
      id: data?.session?.user?.id,
      name: data?.session?.user?.email
    };
    const parsedUserInfo = JSON.stringify(userInfo);

    try {
      await AsyncStorage.setItem('user', parsedUserInfo);
    } catch (e) {
      console.error(e);
    }

    setIsLoading(false);
    setIsSignedIn(true);
    navigation.navigate('Perfil' as never);
  };

  return (
    <>
      <View style={styles.container2}>
        <View style={styles.logoContainer}>
          <Image source={img} style={styles.logo} />
        </View>
        <Controller
          control={control}
          name="email"
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error }
          }) => (
            <View>
              <TextInput
                style={{
                  ...styles.input,
                  borderColor: error ? COLORS.error : COLORS.lightGray
                }}
                onBlur={onBlur}
                placeholder="Correo"
                value={value}
                onChangeText={onChange}
              />
              {errors.email && (
                <Text style={styles.errorText}>{error.message}</Text>
              )}
            </View>
          )}
          rules={{
            required: 'Ingresa tu correo',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Ingresa un correo válido'
            }
          }}
        />
        <Controller
          control={control}
          name="password"
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error }
          }) => (
            <View>
              <TextInput
                style={[
                  styles.input,
                  {
                    borderColor: error ? COLORS.error : COLORS.lightGray
                  }
                ]}
                onBlur={onBlur}
                placeholder="Contraseña"
                value={value}
                onChangeText={onChange}
                secureTextEntry
              />
              {errors.password && (
                <Text style={[styles.errorText, { marginBottom: 16 }]}>
                  {error.message}
                </Text>
              )}
            </View>
          )}
          rules={{
            required: 'Ingresa tu contraseña',
            minLength: {
              value: 8,
              message: 'La contraseña debe tener al menos 8 caracteres'
            }
          }}
        />

        <Button onPress={handleSubmit(onSubmit, onError)}>
          {isLoading ? <ActivityIndicator size="small" /> : 'Ingresa'}
        </Button>
        <Pressable>
          <Text style={[styles.btnSecondary, { marginTop: 16 }]}>
            Olvidé mi contraseña
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate('Registro' as never);
          }}
        >
          <Text style={[styles.btnSecondary]}>Registrarme</Text>
        </Pressable>
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
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 160,
    height: 'auto',
    objectFit: 'contain',
    aspectRatio: 2,
    marginBottom: 30
  },

  btnSecondary: {
    color: COLORS.primaryBlack,
    fontSize: 16,
    marginTop: 8
  },
  errorText: {
    color: COLORS.error,
    fontSize: 12,
    marginTop: 4
  }
});
