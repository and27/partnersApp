import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS } from '../constants/colors';
import ProgressDots from './ProgressDots';
import ConnectionCardActions from './ConnectionCardActions';

const { width } = Dimensions.get('window');
const entrepreneurImg = require('../../assets/entrepreneur.webp');

interface ConnectionCardProps {
  suggestedConnection: any;
  handleNextProfile: () => void;
  carouselItems: any;
  match: () => void;
}
const ConnectionCard = ({
  suggestedConnection,
  handleNextProfile,
  carouselItems,
  match
}: ConnectionCardProps) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const user = suggestedConnection;

  return (
    <View>
      <ScrollView style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: user.image }} style={styles.userImg} />
          <View style={styles.gradientOverlay} />
          <ConnectionCardActions
            handleNextProfile={handleNextProfile}
            match={match}
          />

          <View style={styles.textOverlay}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.position}>{user.ocupation}</Text>
            <Text style={styles.city}>{user.city}</Text>
          </View>
        </View>
        <ProgressDots currentStep={carouselIndex + 1} />

        <Carousel
          data={carouselItems}
          renderItem={({ item }) => item.content}
          sliderWidth={width * 0.9}
          itemWidth={width * 0.9}
          onSnapToItem={index => {
            setCarouselIndex(index);
          }}
        />
      </ScrollView>
    </View>
  );
};

export default ConnectionCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.primaryWhite,
    flex: 1
  },
  imageContainer: {
    position: 'relative',
    borderRadius: 24,
    overflow: 'hidden',
    marginBottom: 16
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
    top: 16,
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
    alignItems: 'flex-start',
    paddingHorizontal: 16
  },
  compatibility: {
    color: COLORS.green,
    marginBottom: 8
  },
  quoteCard: {
    backgroundColor: '#eaeaea',
    borderRadius: 8,
    padding: 12
  },
  quoteText: {
    fontSize: 14,
    fontStyle: 'italic',
    color: COLORS.black
  },
  description: {
    color: COLORS.darkGray,
    fontSize: 14,
    marginBottom: 16
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
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
  }
});
