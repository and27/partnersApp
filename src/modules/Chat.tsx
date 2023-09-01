import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TextInput
} from 'react-native';
import users from '../users';
import ChatItem from '../components/ChatItem';
import { COLORS } from '../colors';

export default function Chat() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <TextInput style={styles.input} placeholder="🔍 Buscar" />
        <FlatList
          style={styles.usersList}
          data={users}
          renderItem={({ item }) => <ChatItem item={item} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: { marginHorizontal: 16 },
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
  },

  input: {
    height: 40,
    alignSelf: 'stretch',
    borderColor: '#bbb',
    borderWidth: 1,
    padding: 5,
    borderRadius: 8,
    marginTop: 8,
    backgroundColor: COLORS.primaryWhite
  }
});
