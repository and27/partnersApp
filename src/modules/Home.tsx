import React from 'react';
import { View, StyleSheet, Text, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS } from '../colors';

const photoUser1 = require('../../assets/persona.png');
const emprendimiento = require('../../assets/emprendimiento.png');
const ciencia = require('../../assets/ciencia.png');
const eventos = require('../../assets/eventos.png');
const talento = require('../../assets/talento.png');
const equipos = require('../../assets/equipos.png');

export default function Home() {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView contentContainerStyle={styles.container2}>
        <View style={styles.userContainer}>
          <View style={styles.heading}>
            <Image source={photoUser1} style={styles.userImg} />
            <View>
              <Text style={styles.title}>{'Ayesha'}</Text>
              <Text style={styles.position}>{'Marketing Manager'}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Áreas de interes</Text>
        <View style={styles.section}>
          <Pressable
            style={styles.card}
            onPress={() => navigation.navigate('Noticias' as never)}
          >
            <Image source={ciencia} style={styles.img} />

            <Text>Ciencia</Text>
          </Pressable>
          <Pressable
            style={styles.card}
            onPress={() => navigation.navigate('Noticias' as never)}
          >
            <Image source={emprendimiento} style={styles.img} />

            <Text>Emprendimiento</Text>
          </Pressable>
          <Pressable
            style={styles.card}
            onPress={() => navigation.navigate('Noticias' as never)}
          >
            <Image source={eventos} style={styles.img} />

            <Text>Eventos</Text>
          </Pressable>
        </View>

        <Text style={styles.sectionTitle}>Anuncios</Text>
        <View style={styles.section}>
          <Pressable
            style={styles.card}
            onPress={() => navigation.navigate('Noticias' as never)}
          >
            <Image source={equipos} style={styles.img} />
            <Text>Equipos</Text>
          </Pressable>
          <Pressable
            style={styles.card}
            onPress={() => navigation.navigate('Noticias' as never)}
          >
            <Image source={talento} style={styles.img} />

            <Text>Talento</Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container2: {
    paddingLeft: 16,
    paddingTop: 16
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    flexWrap: 'wrap'
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.primaryBlue,
    marginTop: 24
  },

  card: {
    paddingBottom: 24,
    paddingTop: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  },

  img: {
    width: 70,
    height: 70,
    borderRadius: 100
  },

  //profile user
  heading: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },

  userImg: { width: 50, height: 50 },

  title: {
    fontWeight: '500',
    color: COLORS.green,
    marginTop: 0
  },

  position: {
    marginTop: 2,
    fontSize: 12,
    color: '#777'
  },

  userContainer: {
    paddingTop: 24,
    marginBottom: 36
  }
});
