import { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable
} from 'react-native';
import { COLORS } from '../colors';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';
const photoUser1 = require('../../assets/avatar5.jpg');

const ciencia1 = require('../../assets/ciencia1.png');
const ciencia2 = require('../../assets/ciencia2.png');
const partners = require('../../assets/logo.png');

const items = [
  {
    title:
      'CEDIA se complace en anunciar su próximo congreso sobre emprendimiento, donde se reunirán destacados expertos y emprendedores de todo el mundo.',
    name: 'Partners',
    position: 'Administrador',
    img: ciencia1,
    userImg: partners,
    category: 'Concursos'
  },
  {
    title:
      'DEO se enorgullece de presentar el evento internacional de emprendimiento más destacado del año.',
    name: 'Partners',
    position: 'Administrador',
    img: ciencia2,
    userImg: partners,
    category: 'Concursos'
  },
  {
    title:
      'Busco equipo para participar en la competencia de robótica de la Universidad de Cuenca. Si estás interesado, ¡contáctame!',
    name: 'Erick Cadena',
    position: 'Biólogo',
    img: ciencia1,
    userImg: photoUser1,
    category: 'Talento'
  }
];

const filters = ['Todos', 'Concursos', 'Talento'];

export default function HomeNews() {
  const [filter, setFilter] = useState<string>('Todos');
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.filtersContainer}>
          {filters.map((f, index) => {
            const isActive = f === filter;
            return (
              <Pressable
                style={[
                  styles.filter,
                  {
                    borderColor: isActive ? COLORS.green : COLORS.lightGray
                  }
                ]}
                key={index}
                onPress={() => setFilter(f)}
              >
                <Text
                  style={{
                    color: isActive ? COLORS.green : '#aaa'
                  }}
                >
                  {f}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {items
          .filter(item => filter === 'Todos' || item.category === filter)
          .map((item, index) => (
            <View style={styles.card} key={index}>
              <Pressable
                style={styles.heading}
                onPress={() => navigation.navigate('PublicProfile' as never)}
              >
                <Image source={item.userImg} style={styles.userImg} />
                <View>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.position}>{item.position}</Text>
                </View>
              </Pressable>
              <Pressable
                onPress={() =>
                  navigation.navigate('PostPage', {
                    title: item.title,
                    img: item.img
                  })
                }
              >
                <Text style={styles.position} numberOfLines={2}>
                  {item.title}
                </Text>
                <Image style={styles.cardImg} source={item.img} />
              </Pressable>
            </View>
          ))}
      </ScrollView>
      <Button
        iconName="add"
        onPress={() => navigation.navigate('PostForm' as never)}
        btnStyles={styles.floatingButton}
        textStyles={{ fontSize: 14, fontWeight: '600' }}
      >
        Publicar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 10,
    right: -8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25
  },
  container2: {
    paddingLeft: 16
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
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.primaryBlue,
    marginTop: 24
  },
  filtersContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 6,
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: COLORS.primaryWhite
  },
  filter: {
    padding: 8,
    borderColor: '#eaeaea',
    borderWidth: 1,
    borderRadius: 8
  },
  card: {
    padding: 24,
    paddingTop: 16,
    display: 'flex',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: COLORS.primaryWhite
  },
  cardImg: {
    width: '100%',
    height: 120,
    borderRadius: 16,
    marginTop: 8
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 100
  },
  heading: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  userImg: { width: 50, height: 50, borderRadius: 100 },
  title: {
    fontWeight: '600',
    color: COLORS.green,
    marginTop: 0
  },
  position: {
    marginTop: 2,
    fontSize: 12,
    color: '#444'
  }
});
