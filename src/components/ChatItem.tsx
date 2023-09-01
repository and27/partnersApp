import { Image, Text, View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ChatItem({ item }) {
  const navigation = useNavigation();
  return (
    <View style={styles.listItem}>
      <Image source={item.img} style={styles.userImg} />
      <View>
        <Text style={styles.listItemTitle}>{item.name}</Text>
        <Text style={styles.listItemSubtitle}>11:00</Text>
      </View>
      <View style={styles.social}>
        <Text>Hola Estoy interesada en trabajar contigo.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    marginBottom: 4,
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    paddingVertical: 16,
    alignItems: 'center',
    borderBottomColor: '#ddd',
    borderBottomWidth: 0.5
  },

  listItemTitle: {},

  listItemSubtitle: {
    color: '#777'
  },

  userImg: {
    width: 50,
    height: 50,
    borderRadius: 100
  },
  social: {
    alignSelf: 'center',
    marginLeft: 32,
    maxWidth: 150
  }
});
