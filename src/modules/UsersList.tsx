import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

export default function UsersList() {
  const user = { name: 'John', expertise: '' };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.menu}>
          <Link to="/profile">
            <Text>Ver mi perfil</Text>
          </Link>
          <Link to="/">
            <Text>Salir</Text>
          </Link>
        </View>

        <Text style={styles.title}>Users</Text>
        <View>
          <Text>{user.name}</Text>
          <Text>{user.expertise}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 60,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 18,
    marginBottom: 8
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch'
  }
});
