import React, { useContext } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import ProfileUser from './ProfileUser';
import { ScrollView } from 'react-native-gesture-handler';
import { Context } from '../../App';
import { ExperienceList } from '../components/ExperienceList';
import { COLORS } from '../colors';
import Social from '../components/Social';

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

  const userInfo = {
    about:
      'Soy un biólogo apasionado y especializado en microbiología, dedicado a explorar el fascinante mundo de los microorganismos.',
    experience: [
      'Investigador en microbiología',
      'Profesor de biología',
      'Consultor en salud ambiental'
    ]
  };

  const { setIsSignedIn } = useContext(Context);
  return (
    <>
      <ScrollView contentContainerStyle={styles.container2}>
        <ProfileUser item={user} />
        <View style={styles.containerInner}>
          <View style={styles.goal}>
            <Text style={styles.title}>Sobre mi: </Text>
            <Text style={styles.description}>{userInfo.about}</Text>
          </View>
          <Social />
          <ExperienceList />
        </View>
        <View>
          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>Editar </Text>
          </Pressable>
          <Pressable onPress={() => setIsSignedIn(false)}>
            <Text style={{ paddingVertical: 8 }}>Cerrar sesión</Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container2: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: 20,
    paddingHorizontal: 32
  },
  containerInner: {
    display: 'flex',
    alignItems: 'flex-start'
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
    color: '#2E4D8E',
    fontWeight: '500'
  },
  description: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '300',
    marginBottom: 16
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
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  },
  btnText: {
    color: COLORS.primaryWhite,
    fontSize: 16
  }
});
