import React, { useContext } from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import users from '../data/users';
import ChatItem from '../components/ChatItem';
import { COLORS } from '../constants/colors';
import { Context } from '../../App';
import Login from './Login';
const logo = require('../../assets/logo.png');

export default function Chat() {
  const { isSignedIn } = useContext(Context);

  if (!isSignedIn) {
    return <Login />;
  }
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.filters}>
          <Text style={styles.filterAll}>All</Text>
          <Text>Active</Text>
          <Text>Blocked</Text>
        </View>
        <View style={{ padding: 16 }}>
          <ChatItem
            item={{
              id: '1',
              name: 'Mabe de Partners',
              img: logo,
              message: 'Bienvenido a tu nuevo espacio de conexión.s'
            }}
          />
          <FlatList
            data={users}
            renderItem={({ item }) => <ChatItem item={item} />}
            keyExtractor={item => item.id}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryWhite,
    minHeight: '100%'
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

  filters: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 20,
    paddingHorizontal: 16,
    paddingVertical: 16
  },
  filterAll: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingHorizontal: 5
  }
});
