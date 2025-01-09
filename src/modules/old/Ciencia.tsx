import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { COLORS } from '../../constants/colors';
const photoUser1 = require('../../assets/avatar5.jpg');
const photoUser2 = require('../../assets/avatar6.jpg');

const ciencia1 = require('../../assets/ciencia1.png');
const ciencia2 = require('../../assets/ciencia2.png');

export const Ciencia = () => {
  return (
    <ScrollView>
      <View style={styles.card}>
        <View style={styles.heading}>
          <Image source={photoUser1} style={styles.userImg} />
          <View>
            <Text style={styles.title}>{'Mateo González'}</Text>
            <Text style={styles.position}>{'Físico'}</Text>
          </View>
        </View>
        <Text>
          Un equipo de científicos ha desarrollado un nuevo material
          superconductor que funciona a temperatura ambiente.
        </Text>
        <Text>
          Este avance en la superconductividad podría revolucionar la industria
          de la energía al permitir la transmisión de electricidad sin pérdidas
          significativas a lo largo de largas distancias.
        </Text>
        <Image style={styles.cardImg} source={ciencia1} />
      </View>

      <View style={styles.card}>
        <View style={styles.heading}>
          <Image source={photoUser2} style={styles.userImg} />
          <View>
            <Text style={styles.title}>{'Andrés López'}</Text>
            <Text style={styles.position}>{'Biólogo'}</Text>
          </View>
        </View>
        <Text style={styles.content}>
          Científicos descubren una enzima modificada que acelera
          significativamente el proceso de degradación de plásticos PET en el
          medio ambiente.
        </Text>
        <Text>
          Este hallazgo podría llevar al desarrollo de tecnologías más efectivas
          para la descomposición de plásticos y la reducción de la contaminación
          por plásticos en los océanos y ecosistemas terrestres.
        </Text>
        <Image style={styles.cardImg} source={ciencia2} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container2: {
    paddingLeft: 16,
    paddingTop: 16
  },

  section: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.primaryBlue,
    marginTop: 24
  },

  card: {
    padding: 24,
    paddingTop: 16,
    display: 'flex',
    justifyContent: 'center',
    gap: 12
  },

  cardImg: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    marginTop: 8
  },

  img: {
    width: 70,
    height: 70,
    borderRadius: 100
  },

  //profile user
  heading: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8
  },

  userImg: { width: 50, height: 50, borderRadius: 100 },

  title: {
    fontWeight: '500',
    color: COLORS.green,
    marginTop: 0
  },

  position: {
    marginTop: 2,
    fontSize: 12,
    color: '#777'
  },

  content: {
    fontSize: 14,
    color: '#222',
    lineHeight: 20
  }
});
