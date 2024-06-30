import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { COLORS } from '../../colors';
const photoUser1 = require('../../../assets/avatar8.jpg');
const photoUser2 = require('../../../assets/avatar7.png');

const emprendimiento1 = require('../../../assets/emprendimiento1.png');
const emprendimiento2 = require('../../../assets/emprendimiento2.png');

export const Emprendimiento = () => {
  return (
    <ScrollView>
      <View style={styles.card}>
        <View style={styles.heading}>
          <Image source={photoUser1} style={styles.userImg} />
          <View>
            <Text style={styles.title}>{'Carolina Martínez'}</Text>
            <Text style={styles.position}>{'Marketing'}</Text>
          </View>
        </View>
        <Text style={styles.content}>
          La metodología Lean Startup gana terreno: Cada vez más emprendedores
          están adoptando la metodología Lean Startup, que se centra en la
          construcción rápida de prototipos, la validación de ideas con clientes
          reales y la iteración constante.
        </Text>
        <Text style={styles.content}>
          Esta estrategia ha demostrado ser efectiva para minimizar riesgos y
          maximizar el éxito en el lanzamiento de nuevos negocios.
        </Text>
        <Image style={styles.cardImg} source={emprendimiento1} />
      </View>

      <View style={styles.card}>
        <View style={styles.heading}>
          <Image source={photoUser2} style={styles.userImg} />
          <View>
            <Text style={styles.title}>{'Javier Pérez'}</Text>
            <Text style={styles.position}>{'Administrador'}</Text>
          </View>
        </View>
        <Text style={styles.content}>
          El Crowdfunding se convierte en una fuente principal de financiamiento
          para startups: El crowdfunding, que permite a las empresas recaudar
          fondos de una amplia base de inversores individuales en línea, está
          ganando popularidad como una fuente crucial de financiamiento para
          nuevas empresas.
        </Text>
        <Image style={styles.cardImg} source={emprendimiento2} />
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
