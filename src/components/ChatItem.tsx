import { Image, Text, View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../colors';

export default function ChatItem({ item }) {
  const navigation = useNavigation();
  return (
    <View style={styles.listItem}>
      <Image source={item.img} style={styles.userImg} />
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '90%'
          }}
        >
          <Text style={styles.listItemTitle}>{item.name}</Text>
          <Text style={styles.time}>25m</Text>
        </View>
        <View style={styles.chat}>
          <Text style={styles.chatText}>Hola, ¿cómo estás?</Text>
          <View
            style={{
              height: 10,
              width: 10,
              backgroundColor: COLORS.primaryBlue,
              borderRadius: 100
            }}
          ></View>
        </View>
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

  listItemTitle: {
    fontWeight: '600',
    color: '#555'
  },

  listItemSubtitle: {
    color: '#777'
  },

  userImg: {
    width: 42,
    height: 42,
    borderRadius: 100
  },
  chat: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%'
  },
  time: {
    color: '#777',
    fontSize: 12,
    marginBottom: 4
  },
  chatText: {
    color: COLORS.primaryBlue,
    fontSize: 12
  }
});
