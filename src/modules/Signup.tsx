import React, { useContext } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Image,
  Pressable,
  Alert
} from 'react-native';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../constants/colors';
import { Controller, SubmitErrorHandler, useForm } from 'react-hook-form';
import { signupWithPassword } from '../utils/supabase';
import { Context } from '../../App';
import { upsertUserInfo } from '../utils/partnersDB';
import Button from '../components/Button';

const windowWidth = Dimensions.get('window').width;
const img = require('../../assets/logo.png');
type FormValues = {
  name: string;
  email: string;
  password: string;
};

export default function Signup() {
  const navigation = useNavigation();
  const { setIsSignedIn } = useContext(Context);

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm();

  const onSubmit = (userCredentials: FormValues) => {
    handleSignup(userCredentials);
  };

  const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
    return console.error(errors);
  };

  const handleSignup = async (userCredentials: FormValues) => {
    const { data, error } = await signupWithPassword({
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
      return setIsSignedIn(false);
    } else {
      navigation.navigate('Ingresa' as never);
      upsertUserInfo({
        uid: data.user.id,
        name: data.user.email,
        city: 'CDMX',
        ocupation: 'designer'
      });
    }
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
          name="name"
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
                placeholder="Nombre"
                value={value}
                onChangeText={onChange}
              />
              {errors.name && (
                <Text style={styles.errorText}>{error.message}</Text>
              )}
            </View>
          )}
          rules={{
            required: 'Ingresa tu nombre',
            minLength: {
              value: 3,
              message: 'El nombre debe tener al menos 3 caractéres'
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
                style={{
                  ...styles.input,
                  borderColor: error ? COLORS.error : COLORS.lightGray
                }}
                onBlur={onBlur}
                placeholder="Contraseña"
                value={value}
                onChangeText={onChange}
                secureTextEntry
              />
              {errors.password && (
                <Text style={styles.errorText}>{error.message}</Text>
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
        <Button
          onPress={handleSubmit(onSubmit, onError)}
          textStyles={styles.btnText}
        >
          Registrarme
        </Button>
        <Pressable
          onPress={() => {
            navigation.navigate('Ingresa' as never);
          }}
        >
          <Text style={[styles.btnSecondary, { marginTop: 8 }]}>
            Ya tengo una cuenta
          </Text>
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
    marginBottom: 8,
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
    fontSize: 16
  },
  errorText: {
    color: COLORS.error,
    fontSize: 12,
    marginTop: 4
  },
  btnSecondary: {
    color: COLORS.primaryBlack,
    fontSize: 16,
    padding: 10
  }
});
