import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import useMatchStore from '../stores/useMatchStore';

const MatchList = () => {
  const matches = useMatchStore(state => state.matches);

  return (
    <View>
      <FlatList
        data={matches}
        keyExtractor={item => item.id?.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 8
  },
  text: {
    fontSize: 12
  }
});

export default MatchList;
