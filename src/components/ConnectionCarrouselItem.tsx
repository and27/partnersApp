import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
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
    height: height * 0.8 // Aumentamos un poco la altura para acomodar todo
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
  },
  actionButtons: {
    position: 'absolute',
    bottom: 48,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 48
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
  }
});

export const getCarouselItems = user => [
  {
    content: (
      <View style={styles.cardContent}>
        <Text style={styles.description}>{user.bio}</Text>
      </View>
    )
  },
  {
    content: (
      <View style={styles.cardContent}>
        {/* <Text style={styles.compatibility}>{user.compatibility}</Text> */}
        <View style={styles.quoteCard}>
          <Text style={styles.quoteText}>{user.valueProposition}</Text>
        </View>
      </View>
    )
  },
  {
    content: (
      <View style={styles.cardContent}>
        <View style={styles.tagsContainer}>
          {user.tags.map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>#{tag}</Text>
            </View>
          ))}
        </View>
      </View>
    )
  },
  {
    content: (
      <View style={styles.cardContent}>
        <Text style={styles.description}>{user.name} está buscando:</Text>
        <Text style={styles.description}>{user.lookingFor}</Text>
      </View>
    )
  }
];
