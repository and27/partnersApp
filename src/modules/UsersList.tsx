import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import User from './User';
import users from '../users';

export default function UsersList() {
  return (
    <>
      <SafeAreaView>
        <FlatList
          style={styles.usersList}
          data={users}
          renderItem={({ item }) => <User item={item} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    marginBottom: 8
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch'
  },

  usersList: {
    paddingHorizontal: 16
  }
});
