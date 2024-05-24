import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Social from '../components/Social';
import { COLORS } from '../colors';
const photoUser1 = require('../../assets/avatar3.png');

export default function PublicProfile() {
  const user = { id: '0', name: 'John', expertise: 'Web dev' };
  return (
    <>
      <View style={styles.container2}>
        <View style={styles.userContainer}>
          <View style={styles.heading}>
            <Image source={photoUser1} style={styles.userImg} />
            <View>
              <Text style={styles.title}>{'John Hernandez'}</Text>
              <Text style={styles.position}>{'Diseñador'}</Text>
            </View>
          </View>
        </View>
        <View style={styles.goal}>
          <Social />
          <Text>
            Mi nombre es John Hernandez, soy diseñador gráfico y me especializo
            en el diseño de interfaces de usuario. Me encanta crear diseños que
            sean simples, hermosos y fáciles de usar. Cuando no estoy
            codificando, me gusta dibujar, hacer yoga y jugar videojuegos.
          </Text>
          {/* <Button title="Follow" /> */}
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
  },
  heading: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },

  userImg: { width: 60, height: 60, borderRadius: 100 },

  title2: {
    fontWeight: '500',
    color: COLORS.green,
    fontSize: 16,
    marginTop: 0
  },

  position: {
    marginTop: 2,
    fontSize: 14,
    color: '#777'
  },

  userContainer: {
    paddingTop: 24,
    marginBottom: 36,
    paddingRight: 36,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
