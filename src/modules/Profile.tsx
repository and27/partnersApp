import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { Link } from 'react-router-native';

export default function Profile() {
  const user = { name: 'John', email: 'john@email.com' };
  return (
    <>
      <View style={styles.container2}>
        <View style={styles.menu}>
          <Link to="/users">
            <Text>Buscar partners</Text>
          </Link>
          <Link to="/">
            <Text>Salir</Text>
          </Link>
        </View>
        <Text style={styles.title}>Mi Perfil</Text>
        <View>
          <Text>{user.name}</Text>
          <Text>{user.email}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container2: {
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
