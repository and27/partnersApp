import React from 'react';
import { View, StyleSheet, Text, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS } from '../colors';

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
        {/* <View style={styles.userContainer}>
          <View style={styles.heading}>
            <Image source={photoUser1} style={styles.userImg} />
            <View>
              <Text style={styles.title}>{'Erick Cadena'}</Text>
              <Text style={styles.position}>{'Biólogo'}</Text>
            </View>
          </View>
          <Ionicons name="notifications" size={20} color={COLORS.green} />
        </View> */}
        <Text style={styles.sectionTitle}>Áreas de interes</Text>
        <View style={styles.section}>
          <Pressable
            style={styles.card}
            onPress={() => navigation.navigate('Ciencia' as never)}
          >
            <Image source={ciencia} style={styles.img} />

            <Text style={{ color: '#111', fontWeight: '300', fontSize: 15 }}>
              Ciencia
            </Text>
          </Pressable>
          <Pressable
            style={styles.card}
            onPress={() => navigation.navigate('Emprendimiento' as never)}
          >
            <Image source={emprendimiento} style={styles.img} />

            <Text style={{ color: '#111', fontWeight: '300', fontSize: 15 }}>
              Emprendimiento
            </Text>
          </Pressable>
          <Pressable
            style={styles.card}
            onPress={() => navigation.navigate('Eventos' as never)}
          >
            <Image source={eventos} style={styles.img} />

            <Text style={{ color: '#111', fontWeight: '300', fontSize: 15 }}>
              Eventos
            </Text>
          </Pressable>
        </View>

        <Text style={styles.sectionTitle}>Anuncios</Text>
        <View style={styles.section}>
          <Pressable
            style={styles.card}
            onPress={() => navigation.navigate('Equipos' as never)}
          >
            <Image source={equipos} style={styles.img} />
            <Text style={{ color: '#111', fontWeight: '300', fontSize: 15 }}>
              Equipos
            </Text>
          </Pressable>
          <Pressable
            style={styles.card}
            onPress={() => navigation.navigate('Talento' as never)}
          >
            <Image source={talento} style={styles.img} />

            <Text style={{ color: '#111', fontWeight: '300', fontSize: 15 }}>
              Talento
            </Text>
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
    justifyContent: 'center',
    flexWrap: 'wrap'
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.primaryBlue,
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 8
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
    width: 80,
    height: 80,
    borderRadius: 20
  },

  //profile user
  heading: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },

  userImg: { width: 60, height: 60, borderRadius: 100 },

  title: {
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
