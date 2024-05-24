import React, { useContext } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import ProfileUser from './ProfileUser';
import { ScrollView } from 'react-native-gesture-handler';
import { Context } from '../../App';
import { ExperienceList } from '../components/ExperienceList';
import { COLORS } from '../colors';

const UserSection = ({ title, items }) => (
  <View style={styles.section}>
    <Text>{title}</Text>
    <View style={styles.projects}>
      {items.map((item, index) => (
        <View style={styles.card} key={index}>
          <Text>{item}</Text>
        </View>
      ))}
    </View>
  </View>
);

export default function Profile() {
  const user = {
    id: '0',
    name: 'Erick Cadena ',
    expertise: 'Biólogo',
    city: 'Quito'
  };

  const { setIsSignedIn } = useContext(Context);
  return (
    <>
      <ScrollView contentContainerStyle={styles.container2}>
        <ProfileUser item={user} />
        <View style={styles.containerInner}>
          <View style={styles.goal}>
            <Text style={styles.title}>Sobre mi: </Text>
            <Text style={styles.description}>
              Soy un biólogo apasionado y especializado en microbiología,
              dedicado a explorar el fascinante mundo de los microorganismos.
            </Text>
            <Text style={styles.description}>
              Mi enfoque se centra en entender las complejidades de la vida
              microbiana y su impacto en la salud y el medio ambiente. Con una
              mente analítica y curiosa, siempre busco nuevas formas de abordar
              los desafíos científicos.
            </Text>
          </View>
          <ExperienceList />
        </View>
        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>Contactar</Text>
        </Pressable>
        <Pressable onPress={() => setIsSignedIn(false)}>
          <Text style={{ paddingVertical: 24 }}>Cerrar sesión</Text>
        </Pressable>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container2: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20
  },
  containerInner: {
    display: 'flex',
    alignItems: 'flex-start',
    paddingHorizontal: 36
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
    color: '#2E4D8E',
    fontWeight: '500'
  },
  description: {
    fontSize: 13,
    fontWeight: '300',
    marginBottom: 8
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch'
  },

  section: {
    marginTop: 24
  },
  projects: { display: 'flex', flexDirection: 'row', gap: 8, marginTop: 4 },
  card: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    backgroundColor: '#fff'
  },
  goal: {
    marginTop: 20
  },
  btn: {
    backgroundColor: COLORS.green,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 48,
    marginTop: 16,
    marginBottom: 24,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    width: 200
  },
  btnText: {
    color: COLORS.primaryWhite,
    fontSize: 16
  }
});
