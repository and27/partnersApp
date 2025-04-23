import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Button,
  ActivityIndicator
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../constants/colors';
import ConnectionCard from '../components/ConnectionCard';
import { useSuggestedConnections } from '../hooks/useSuggestedConnections';

const NO_SUGGESTIONS_TEXT = 'No hay más sugerencias de conexión por ahora.';
const GENERIC_ERROR_TEXT = 'Ocurrió un error al cargar las sugerencias.';

const { width, height } = Dimensions.get('window');

export default function SuggestedConnections() {
  const navigation = useNavigation();
  const {
    isLoading,
    error,
    suggestedConnection,
    carouselItems,
    handleNextProfile,
    match
  } = useSuggestedConnections();

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={[styles.innerContainer, styles.centerContent]}>
          <ActivityIndicator size="large" color={COLORS.green} />
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={[styles.innerContainer, styles.centerContent]}>
          <Text style={styles.errorText}>{error || GENERIC_ERROR_TEXT}</Text>
          {/* Aquí podrías añadir un botón de Reintentar si el hook lo soporta */}
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        {suggestedConnection ? (
          <ConnectionCard
            suggestedConnection={suggestedConnection}
            handleNextProfile={handleNextProfile}
            carouselItems={carouselItems}
            match={match}
          />
        ) : (
          <View style={styles.endContainer}>
            <Text style={styles.endText}>{NO_SUGGESTIONS_TEXT}</Text>
            <View style={styles.buttonContainer}>
              <Button
                title="Ver mis Matches"
                onPress={() => navigation.navigate('Chat' as never)}
                color={COLORS.green}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title="Revisar mi Perfil"
                onPress={() => navigation.navigate('Perfil' as never)}
                color={COLORS.blue}
              />
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryWhite
  },
  innerContainer: {
    flex: 1,
    padding: 12,
    alignItems: 'center'
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorText: {
    color: COLORS.red, // Asegúrate que COLORS.red exista o usa 'red'
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20
  },
  endContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  endText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 24,
    color: COLORS.darkGray // Asegúrate que COLORS.darkGray exista
  },
  buttonContainer: {
    width: '80%',
    marginVertical: 8
  },
  card: {
    width: width * 0.9,
    borderRadius: 16,
    backgroundColor: COLORS.primaryWhite,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
    position: 'relative',
    marginBottom: 56, // Considera si este margen inferior es necesario con flex: 1
    height: height * 0.73 // Ten cuidado con alturas fijas, podrían cortar contenido
  },
  imageContainer: {
    position: 'relative',
    borderRadius: 24,
    overflow: 'hidden'
  },
  userImg: {
    width: '100%',
    height: width * 0.9
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  textOverlay: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.primaryWhite
  },
  position: {
    fontSize: 14,
    color: COLORS.primaryWhite
  },
  city: {
    fontSize: 12,
    color: COLORS.primaryWhite,
    marginTop: 4
  }
});
