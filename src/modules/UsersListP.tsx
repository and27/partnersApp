import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput
} from 'react-native';
import { COLORS } from '../colors';
import Button from '../components/Button';

const UserCard = ({ user }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardInner}>
        <View style={styles.content}>
          <View style={styles.heading}>
            <Image source={user.img} style={styles.userImg} />
            <View>
              <Text>{user.name}</Text>
              <Text style={styles.position}>{user.position}</Text>
            </View>
          </View>
          <Text style={styles.description}>{user.description}</Text>
          <Button onPress={() => {}}>Conectar</Button>
        </View>
      </View>
    </View>
  );
};

export default function UsersListP() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <TextInput style={styles.input} placeholder="🔍 Buscar" />
          <UserCard
            user={{
              name: 'Erick Cadena',
              position: 'Biólogo',
              description:
                'Soy un biólogo apasionado y especializado en microbiología, dedicado a explorar el fascinante mundo de los microorganismos.',
              img: require('../../assets/ciencia1.png')
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryWhite,
    minHeight: '100%'
  },
  innerContainer: {
    padding: 24,
    display: 'flex',
    gap: 16
  },
  card: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.green,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primaryWhite,
    padding: 8
  },
  cardInner: {
    backgroundColor: COLORS.primaryWhite,
    padding: 8,
    width: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center'
  },
  content: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 4
  },
  heading: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  userImg: {
    width: 40,
    height: 40,
    borderRadius: 20
  },

  position: {
    fontSize: 12,
    color: '#777'
  },
  description: {
    color: '#777',
    maxWidth: 200,
    marginTop: 16,
    fontSize: 12
  },

  input: {
    height: 40,
    alignSelf: 'stretch',
    borderColor: '#bbb',
    borderWidth: 1,
    padding: 5,
    borderRadius: 8,
    marginTop: 8,
    backgroundColor: COLORS.primaryWhite
  }
});
