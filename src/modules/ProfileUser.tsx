import { Image, Text, View, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

const img = require('../../assets/avatar4.jpg');

export default function ProfileUser({ item }) {
  const [userEmail, setUserEmail] = useState<string>();

  useEffect(() => {
    const getUser = async () => {
      const user = await AsyncStorage.getItem('user');
      if (user) setUserEmail(JSON.parse(user).name);
    };

    getUser();
  }, []);

  return (
    <View>
      <View style={styles.listItem}>
        <Image source={img} style={styles.userImg} />
        <View style={styles.userInfo}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.listItemSubtitle}>{userEmail}</Text>
          <Text style={styles.listItemSubtitle}>{item.expertise}</Text>
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
    color: '#2E4D8E',
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
