import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import User from './User';
import Social from '../components/Social';

export default function PublicProfile() {
  const user = { id: '0', name: 'John', expertise: 'Web dev' };
  return (
    <>
      <View style={styles.container2}>
        <User item={user} />
        <View style={styles.goal}>
          <Social />
          <Text>Sobre mi: </Text>
          <Text>
            Ayesha Bazmi is a results-driven Marketing Manager with a passion
            for leveraging innovative strategies to drive brand growth and
            customer engagement in the ever-evolving digital landscape.
          </Text>
          <Button title="Follow" />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: 20,
    marginTop: 20
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
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop: 50,
    borderRadius: 8,
    padding: 16,
    alignItems: 'flex-start'
  },
  goal: {
    marginTop: 20
  }
});
