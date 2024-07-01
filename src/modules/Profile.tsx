import React, { useContext } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import ProfileUser from '../components/ProfileUser';
import { ScrollView } from 'react-native-gesture-handler';
import { Context } from '../../App';
import { ExperienceList } from '../components/ExperienceList';
import { COLORS } from '../colors';
import Social from '../components/Social';
import { useNavigation } from '@react-navigation/native';

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
  const { setIsSignedIn } = useContext(Context);
  const navigation = useNavigation();

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

  return (
    <>
      <ScrollView contentContainerStyle={styles.container2}>
        <ProfileUser item={user} />
        <View style={styles.containerInner}>
          <View style={styles.goal}>
            <Text style={styles.title}>Sobre mi</Text>
            <Text style={styles.description}>{userInfo.about}</Text>
          </View>
          <Social />
          <View style={styles.section}>
            <Text style={styles.title}>Experiencia </Text>
            <ExperienceList />
          </View>
        </View>
        <View>
          <Pressable
            style={styles.btn}
            onPress={() => navigation.navigate('UserForm' as never)}
          >
            <Text style={styles.btnText}>Editar </Text>
          </Pressable>
          <Pressable onPress={() => setIsSignedIn(false)}>
            <Text style={{ paddingVertical: 12, textAlign: 'center' }}>
              Cerrar sesión
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container2: {
    backgroundColor: COLORS.primaryWhite,
    minHeight: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    paddingHorizontal: 24
  },
  containerInner: {
    display: 'flex',
    alignItems: 'flex-start'
  },
  title: {
    fontSize: 12,
    color: COLORS.primaryBlue,
    fontWeight: '600',
    marginBottom: 8
  },
  description: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
    marginBottom: 16,
    color: COLORS.darkGray
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
