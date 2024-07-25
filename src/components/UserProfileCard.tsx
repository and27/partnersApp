import { Image, Text, View, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { COLORS } from '../colors';

const img = require('../../assets/avatar4.jpg');

export default function UserProfileCard({ user }) {
  return (
    <View>
      <View style={styles.listItem}>
        <Image source={img} style={styles.userImg} />
        <View style={styles.userInfo}>
          <Text style={styles.title}>{user?.name}</Text>
          <Text style={styles.listItemSubtitle}>{user?.ocupation}</Text>
          <Text style={styles.listItemSubtitle}>{user?.city}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    marginBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: 8,
    paddingTop: 36
  },

  userInfo: {
    display: 'flex',
    gap: 2
  },

  title: {
    color: COLORS.green,
    fontWeight: '500'
  },

  listItemSubtitle: {
    color: '#444',
    fontSize: 12
  },

  userImg: {
    width: 56,
    height: 56,
    borderRadius: 100
  },

  social: {
    marginLeft: 'auto',
    marginRight: 10,
    marginTop: 16,
    alignSelf: 'flex-start',
    backgroundColor: '#444',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5
  }
});
