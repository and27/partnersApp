import { Image, Text, View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function User({ item }) {
  const navigation = useNavigation();
  return (
    <View style={styles.listItem}>
      <Image source={item.img} style={styles.userImg} />
      <View>
        <Text style={styles.listItemTitle}>{item.name}</Text>
        <Text style={styles.listItemSubtitle}>{item.expertise}</Text>
        <Text style={styles.listItemSubtitle}>{item.city}</Text>
      </View>
      <View style={styles.social}>
        <Button
          title="view"
          onPress={() => navigation.navigate('PublicProfile' as never)}
        ></Button>
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
    marginLeft: 'auto',
    marginRight: 10,
    alignSelf: 'flex-start'
  },
  level: {
    backgroundColor: '#444',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
    fontSize: 12,
    color: 'white'
  }
});
