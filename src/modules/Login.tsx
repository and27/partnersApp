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
import { getUserInfo } from '../utils/partnersDB';

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

    const userId = data?.session?.user?.id;
    const { data: userInfo, error: userError } = await getUserInfo(userId);
    if (error) {
      console.error(error);
    } else {
      const user = {
        id: userId,
        name: userInfo[0]?.name,
        bio: userInfo[0]?.bio,
        city: userInfo[0]?.city,
        ocupation: userInfo[0]?.ocupation
      };
      const parsedUserInfo = JSON.stringify(user);
      await AsyncStorage.setItem('user', parsedUserInfo);
    }

    setIsLoading(false);
    setIsSignedIn(true);
    navigation.navigate('Perfil' as never);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerInner}>
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
              <View style={{ height: 64 }}>
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
              <View style={{ height: 58 }}>
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

          <Button
            onPress={handleSubmit(onSubmit, onError)}
            textStyles={styles.btnText}
          >
            {isLoading ? <ActivityIndicator size="small" /> : 'Ingresa'}
          </Button>
          <Pressable>
            <Text style={[styles.btnSecondary, { marginTop: 8 }]}>
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
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryWhite,
    flex: 1
  },
  containerInner: {
    padding: 24,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    alignSelf: 'stretch',
    borderColor: '#bbb',
    borderWidth: 1,
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
  btnText: {
    fontSize: 16
  },
  btnSecondary: {
    color: COLORS.primaryBlack,
    fontSize: 16,
    padding: 10
  },
  errorText: {
    color: COLORS.error,
    fontSize: 12,
    marginTop: 1
  }
});
