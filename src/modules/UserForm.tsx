import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, TextInput, View, Text, Dimensions } from 'react-native';
import { COLORS } from '../colors';
import Button from '../components/Button';

const windowWidth = Dimensions.get('window').width;

export default function UserInfoForm() {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm();

  return (
    <View>
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
          required: 'Ingresa tu contraseña',
          minLength: {
            value: 8,
            message: 'La contraseña debe tener al menos 8 caracteres'
          }
        }}
      />
      <Controller
        control={control}
        name="about"
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
            {errors.about && (
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
      <Button onPress={handleSubmit(() => console.log('submit'))}>
        Guardar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
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
