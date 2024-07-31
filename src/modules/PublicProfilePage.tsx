import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../colors';
import { UserProfileSection } from '../components/UserProfileSection';

export default function PublicProfile() {
  const user = { id: '0', name: 'John', expertise: 'Web dev' };
  return (
    <>
      <View style={styles.container2}>
        <UserProfileSection user={user} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: 20,
    marginTop: 20
  },
  title: {
    fontSize: 18,
    marginBottom: 8
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch'
  },
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop: 50,
    borderRadius: 8,
    padding: 16,
    alignItems: 'flex-start'
  },
  goal: {
    marginTop: 20
  },
  heading: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },

  userImg: { width: 60, height: 60, borderRadius: 100 },

  title2: {
    fontWeight: '500',
    color: COLORS.green,
    fontSize: 16,
    marginTop: 0
  },

  position: {
    marginTop: 2,
    fontSize: 14,
    color: '#777'
  },

  userContainer: {
    paddingTop: 24,
    marginBottom: 36,
    paddingRight: 36,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
