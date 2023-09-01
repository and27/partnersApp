import React, { useContext } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import ProfileUser from './ProfileUser';
import { ScrollView } from 'react-native-gesture-handler';
import { Context } from '../../App';

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
    name: 'Ayesha Bazmi',
    expertise: 'Marketing Manager',
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
              Ayesha Bazmi is a results-driven Marketing Manager with a passion
              for leveraging innovative strategies to drive brand growth and
              customer engagement in the ever-evolving digital landscape.
            </Text>
          </View>
          <UserSection title="Favorite industries" items={['Pharma', 'Tech']} />
          <UserSection title="Favorite ODS" items={['1', '2']} />
          <Button onPress={() => setIsSignedIn(false)} title="Cerrar sesión" />
        </View>
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
    fontWeight: '300'
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
  }
});
