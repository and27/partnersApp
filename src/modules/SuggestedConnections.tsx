import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { COLORS } from '../constants/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ConnectionCard from '../components/ConnectionCard';
import { profiles } from '../data/profiles';
import { getCarouselItems } from '../components/ConnectionCarrouselItem';
import useMatchStore from '../stores/useMatchStore';

const { width, height } = Dimensions.get('window');

export default function SuggestedConnections() {
  const [suggestedConnection, setSuggestedConnection] = useState(null);
  const [connectionIndex, setConnectionIndex] = useState<number>(0);
  const [carouselItems, setCarouselItems] = useState([]);
  const addMatch = useMatchStore(state => state.addMatch);

  const match = () => {
    addMatch(suggestedConnection);
    handleNextProfile();
  };

  const handleNextProfile = () => {
    console.log(connectionIndex < profiles.length);
    if (connectionIndex < profiles.length - 1) {
      setConnectionIndex(connectionIndex);
      setSuggestedConnection(profiles[connectionIndex]);
    } else {
      setSuggestedConnection(null);
    }
  };

  useEffect(() => {
    const getConnections = async () => {
      const user = await AsyncStorage.getItem('user');
      const currentConnection = profiles[connectionIndex];
      setSuggestedConnection(currentConnection);
      const connectionInfo = getCarouselItems(currentConnection);
      setCarouselItems(connectionInfo);

      // const { data, error } = await getSuggestedConnections(userId);
      // if (error) {
      //   console.error(error);
      // } else {
      //   setSuggestedConnection(data[0]);
      // }
    };

    getConnections();
  }, []);

  return (
    <>
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
            <Text>No hay sugerencias de conexión.</Text>
          )}
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryWhite,
    minHeight: '100%'
  },
  innerContainer: {
    padding: 12,
    display: 'flex',
    gap: 16,
    alignItems: 'center'
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
    marginBottom: 56,
    height: height * 0.73
  },
  imageContainer: {
    position: 'relative',
    borderRadius: 24,
    overflow: 'hidden'
  },
  userImg: {
    width: '100%',
    height: width * 0.9 // cuadrado
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)' // Gradiente oscuro sobre toda la imagen
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
  },
  cardContent: {
    padding: 16,
    alignItems: 'center'
  },
  compatibility: {
    fontSize: 14,
    color: COLORS.green,
    marginBottom: 8
  },
  quoteCard: {
    backgroundColor: COLORS.lightGray,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16
  },
  quoteText: {
    fontSize: 14,
    fontStyle: 'italic',
    color: COLORS.black,
    textAlign: 'center'
  },
  description: {
    color: COLORS.darkGray,
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16
  },
  showMore: {
    color: COLORS.blue,
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 8
  },
  tag: {
    backgroundColor: COLORS.lightGray,
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 10,
    margin: 4
  },
  tagText: {
    color: COLORS.black,
    fontSize: 12
  },
  actionButtons: {
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: COLORS.primaryWhite
  },
  actionBtn: {
    padding: 8,
    borderRadius: 50,
    backgroundColor: COLORS.primaryWhite,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    fontSize: 12,
    color: COLORS.darkGray,
    marginTop: 4,
    textAlign: 'center'
  }
});
