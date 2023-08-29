import { Image, Text, View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Social from '../components/Social';

const img = require('../../assets/persona.png');

export default function ProfileUser({ item }) {
  const navigation = useNavigation();
  return (
    <View style={styles.listItem}>
      <Image source={img} style={styles.userImg} />
      <View style={styles.userInfo}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.listItemSubtitle}>{item.expertise}</Text>
        <Text style={styles.listItemSubtitle}>{item.city}</Text>
      </View>
      <Social />
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    marginBottom: 4,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    paddingVertical: 16,
    alignItems: 'center'
  },

  userInfo: {
    display: 'flex',
    alignItems: 'center'
  },

  title: {
    color: '#2E4D8E',
    fontWeight: '500'
  },

  listItemSubtitle: {
    color: '#777'
  },

  userImg: {
    width: 70,
    height: 70,
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
