import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { COLORS } from '../../colors';
const logo = require('../../assets/logo.png');
const events1 = require('../../assets/events1.png');
const events2 = require('../../assets/events2.png');

export const Events = () => {
  return (
    <ScrollView>
      <View style={styles.card}>
        <View style={styles.heading}>
          <Image source={logo} style={styles.userImg} />
          <View>
            <Text style={styles.title}>{'Partners'}</Text>
            <Text style={styles.position}>{'Administrador'}</Text>
          </View>
        </View>
        <Text style={styles.content}>
          CEDIA se complace en anunciar su próximo congreso sobre
          emprendimiento, donde se reunirán destacados expertos y emprendedores
          de todo el mundo.
        </Text>
        <Text style={styles.content}>
          El evento ofrecerá una plataforma única para explorar las últimas
          tendencias, estrategias y casos de éxito en el mundo del
          emprendimiento.
        </Text>
        <Image style={styles.cardImg} source={events2} />
      </View>

      <View style={styles.card}>
        <View style={styles.heading}>
          <Image source={logo} style={styles.userImg} />
          <View>
            <Text style={styles.title}>{'Partners'}</Text>
            <Text style={styles.position}>{'Administrador'}</Text>
          </View>
        </View>
        <Text style={styles.content}>
          DEO se enorgullece de presentar el evento internacional de
          emprendimiento más destacado del año.
        </Text>
        <Text style={styles.content}>
          Este evento de renombre mundial reúne a visionarios, innovadores y
          líderes empresariales de todo el globo para compartir ideas,
          inspirarse mutuamente y colaborar en la creación de soluciones
          disruptivas para los desafíos más apremiantes de nuestro tiempo
        </Text>
        <Image style={styles.cardImg} source={events1} />
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
    gap: 12,
    marginBottom: 16
  },

  cardImg: {
    width: '100%',
    height: 200,
    borderRadius: 8,
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

  userImg: { width: 100, height: 50 },

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
