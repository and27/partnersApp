import {
  Image,
  Text,
  View,
  StyleSheet,
  Pressable,
  Linking
} from 'react-native';
import { COLORS } from '../constants/colors';

export default function ChatItem({ item }) {
  const openWhatsApp = (number, text) => {
    let url = `whatsapp://send?phone=${number}&text=${encodeURIComponent(
      text
    )}`;
    Linking.openURL(url)
      .then(() => {
        console.log('WhatsApp opened');
      })
      .catch(() => {
        alert('Make sure WhatsApp is installed on your device');
      });
  };
  return (
    <Pressable
      style={styles.listItem}
      onPress={() => openWhatsApp('+593997019475', 'Hello!')}
    >
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
          <Text style={styles.chatText}>{item.message}</Text>
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
    </Pressable>
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
    color: COLORS.green
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
    color: '#666',
    fontSize: 11,
    marginBottom: 4
  },
  chatText: {
    color: '#666',
    fontSize: 12
  }
});
