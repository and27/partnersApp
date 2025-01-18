import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import UserProfileCard from './UserProfileCard';
import Social from './Social';
import { ExperienceList } from './ExperienceList';
import MatchList from './MatchList';
import { COLORS } from '../constants/colors';

export const UserProfileSection = ({ user }) => {
  const sections = [
    { key: 'profile', component: <UserProfileCard user={user} /> },
    { key: 'social', component: <Social /> },
    {
      key: 'bio',
      component: (
        <View style={styles.goal}>
          <Text style={styles.title}>Sobre mí</Text>
          <Text style={styles.description}>{user?.bio}</Text>
        </View>
      )
    },
    {
      key: 'experience',
      component: (
        <View style={styles.section}>
          <Text style={styles.title}>Experiencia</Text>
          <ExperienceList />
        </View>
      )
    },
    {
      key: 'matches',
      component: (
        <View>
          <Text style={styles.title}>Matches</Text>
          <MatchList />
        </View>
      )
    }
  ];

  return (
    <FlatList
      data={sections}
      renderItem={({ item }) => (
        <View style={styles.section}>{item.component}</View>
      )}
      keyExtractor={item => item.key}
      nestedScrollEnabled={true} // Habilitar desplazamiento anidado
    />
  );
};

const styles = StyleSheet.create({
  section: {
    marginVertical: 12
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    color: COLORS.primaryBlack
  },
  description: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
    marginBottom: 16,
    color: COLORS.darkGray
  },
  goal: {
    marginTop: 20
  }
});
