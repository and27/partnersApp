import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import User from './User';
import users from '../users';

export default function UsersListP() {
  return (
    <>
      <SafeAreaView>
        <View style={styles.filters}>
          <View style={styles.filterAll}>
            <Text>All</Text>
          </View>
          <Text>Same city</Text>
          <Text>Same industry</Text>
        </View>
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
