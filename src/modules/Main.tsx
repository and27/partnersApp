import React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { Dimensions } from 'react-native';
import { useNavigate } from 'react-router-native';

const windowWidth = Dimensions.get('window').width;

export default function Main() {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/profile');
  }
  return (
    <>
      <View style={styles.container2}>
        <Text style={styles.title}>PProject</Text>
        <View>
          <TextInput style={styles.input} placeholder="Username" />
          <TextInput style={styles.input} placeholder="Password" />
          <Button
            title="Learn More"
            accessibilityLabel="Learn more about this purple button"
            onPress={handleClick}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container2: {
    margin: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 18,
    marginBottom: 8
  },
  input: {
    height: 40,
    alignSelf: 'stretch',
    borderColor: '#bbb',
    borderWidth: 1,
    margin: 8,
    padding: 5,
    borderRadius: 8,
    width: windowWidth - 40
  }
});
