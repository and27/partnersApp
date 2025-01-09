import { View, Text, StyleSheet } from 'react-native';
import UserProfileCard from './UserProfileCard';
import Social from './Social';
import { ExperienceList } from './ExperienceList';
import { COLORS } from '../constants/colors';

export const UserProfileSection = ({ user }) => {
  return (
    <>
      <UserProfileCard user={user} />
      <View style={styles.containerInner}>
        <Social />
        <View style={styles.goal}>
          <Text style={styles.title}>Sobre mi</Text>
          <Text style={styles.description}>{user?.bio}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Experiencia </Text>
          <ExperienceList />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  containerInner: {
    display: 'flex',
    alignItems: 'flex-start'
  },
  section: {
    marginTop: 24
  },
  title: {
    fontSize: 14,
    color: COLORS.primaryBlack,
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
  goal: {
    marginTop: 20
  }
});
