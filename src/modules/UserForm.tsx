import { Controller, useForm } from 'react-hook-form';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Dimensions,
  Pressable
} from 'react-native';
import { COLORS } from '../constants/colors';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { upsertUserInfo } from '../utils/partnersDB';

const windowWidth = Dimensions.get('window').width;

export default function UserInfoForm() {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async userInfo => {
    const { data, error } = await upsertUserInfo(userInfo);
    if (error) {
      console.log(error);
    } else {
      navigation.navigate('Perfil' as never);
    }
  };

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="name"
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
              placeholder="Nombre"
              value={value}
              onChangeText={onChange}
              secureTextEntry
            />
            {errors.name && (
              <Text style={[styles.errorText, { marginBottom: 16 }]}>
                {error.message}
              </Text>
            )}
          </View>
        )}
        rules={{
          required: 'Ingresa tu nombre'
        }}
      />
      <Controller
        control={control}
        name="ocupation"
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
              placeholder="Ocupation"
              value={value}
              onChangeText={onChange}
              secureTextEntry
            />
            {errors.ocupation && (
              <Text style={[styles.errorText, { marginBottom: 16 }]}>
                {error.message}
              </Text>
            )}
          </View>
        )}
      />
      <Controller
        control={control}
        name="bio"
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
              placeholder="Acerda de ti"
              value={value}
              onChangeText={onChange}
              secureTextEntry
            />
            {errors.bio && (
              <Text style={[styles.errorText, { marginBottom: 16 }]}>
                {error.message}
              </Text>
            )}
          </View>
        )}
        rules={{
          required: 'Ingresa tu biografía'
        }}
      />
      <Controller
        control={control}
        name="experience"
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
              placeholder="Experiencia"
              value={value}
              onChangeText={onChange}
              secureTextEntry
            />
            {errors.experience && (
              <Text style={[styles.errorText, { marginBottom: 16 }]}>
                {error.message}
              </Text>
            )}
          </View>
        )}
      />
      <Button onPress={handleSubmit(onSubmit)}>Guardar</Button>
      <Pressable
        style={{ paddingVertical: 16 }}
        onPress={() => navigation.navigate('Perfil' as never)}
      >
        <Text>Omitir</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
    backgroundColor: COLORS.primaryWhite
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
  errorText: {
    color: COLORS.error,
    fontSize: 12,
    marginTop: 1
  }
});
