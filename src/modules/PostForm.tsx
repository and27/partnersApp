import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Dimensions,
  Pressable,
  Image
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { COLORS } from '../colors';
import { useNavigation } from '@react-navigation/native';
import { supabase } from '../utils/supabase';
import Button from '../components/Button';

const windowWidth = Dimensions.get('window').width;

export default function PostForm() {
  const [imageUrl, setImageUrl] = useState(null);
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const navigation = useNavigation();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.canceled) {
      setImageUrl(result.assets[0].uri);
    }
  };

  const uploadImage = async uri => {
    const formData = new FormData();
    const fileName = `images/${Date.now()}_${uri.split('/').pop()}`;

    const imageData = {
      uri,
      name: fileName,
      type: `image/jpg`
    } as unknown as Blob;

    formData.append('photo', imageData);

    const { data, error } = await supabase.storage
      .from('images')
      .upload(fileName, imageData);

    if (error) {
      console.error('Error uploading image:', error);
      return null;
    }

    if (error) {
      console.error('Error uploading image:', error);
      return null;
    }

    const { data: urlData } = supabase.storage
      .from('images')
      .getPublicUrl(fileName);

    return urlData;
  };

  const onSubmit = async data => {
    let image = null;
    if (imageUrl) {
      image = await uploadImage(imageUrl);
    }

    const { error } = await supabase.from('post').insert([
      {
        title: data.title,
        description: data.description,
        image_url: image
      }
    ]);

    if (error) {
      console.error('Error inserting post:', error);
    } else {
      navigation.navigate('Inicio' as never);
    }
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="title"
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
              placeholder="Título"
              value={value}
              onChangeText={onChange}
            />
            {errors.title && (
              <Text style={[styles.errorText, { marginBottom: 16 }]}>
                {error.message}
              </Text>
            )}
          </View>
        )}
        rules={{
          required: 'Ingresa el título de tu publicación',
          minLength: {
            value: 8,
            message: 'El título debe contener al menos 10 caracteres'
          }
        }}
      />
      <Controller
        control={control}
        name="description"
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
              placeholder="Descripción"
              value={value}
              onChangeText={onChange}
            />
            {errors.description && (
              <Text style={[styles.errorText, { marginBottom: 16 }]}>
                {error.message}
              </Text>
            )}
          </View>
        )}
        rules={{
          required: 'Ingresa la descripción de tu publicación',
          minLength: {
            value: 8,
            message: 'La descripción debe contener al menos 20 caracteres'
          }
        }}
      />

      <Pressable onPress={pickImage} style={styles.imagePicker}>
        <Text style={styles.imagePickerText}>Seleccionar Imagen</Text>
      </Pressable>

      {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}

      <Button onPress={handleSubmit(onSubmit)}>Publicar</Button>
      <Pressable
        style={{ paddingVertical: 16 }}
        onPress={() => navigation.navigate('Inicio' as never)}
      >
        <Text>Cancelar</Text>
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
  },
  imagePicker: {
    marginVertical: 16,
    padding: 10,
    borderRadius: 8,
    backgroundColor: COLORS.lightGray,
    alignItems: 'center'
  },
  imagePickerText: {
    color: COLORS.primary,
    fontSize: 16
  },
  image: {
    width: windowWidth - 40,
    height: 200,
    marginVertical: 16,
    borderRadius: 8
  }
});
