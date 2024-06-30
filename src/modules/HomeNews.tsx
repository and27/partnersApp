import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable
} from 'react-native';
import { COLORS } from '../colors';
import { useState } from 'react';
const photoUser1 = require('../../assets/avatar5.jpg');
const photoUser2 = require('../../assets/avatar6.jpg');

const ciencia1 = require('../../assets/ciencia1.png');
const ciencia2 = require('../../assets/ciencia2.png');

const items = [
  {
    title:
      'CEDIA se complace en anunciar su próximo congreso sobre emprendimiento, donde se reunirán destacados expertos y emprendedores de todo el mundo.',
    name: 'Partners',
    position: 'Administrador',
    img: ciencia1
  },
  {
    title:
      'DEO se enorgullece de presentar el evento internacional de emprendimiento más destacado del año.',
    name: 'Partners',
    position: 'Administrador',
    img: ciencia2
  },
  {
    title:
      'Busco equipo para participar en la competencia de robótica de la Universidad de Cuenca. Si estás interesado, ¡contáctame!',
    name: 'Erick Cadena',
    position: 'Biólogo',
    img: ciencia1
  }
];

const filters = ['Todos', 'Eventos', 'Emprendimiento', 'Ciencia'];

export default function HomeNews() {
  const [filter, setFilter] = useState<string>('Todos');
  console.log(filter);

  return (
    <ScrollView>
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

      {items.map((item, index) => (
        <View style={styles.card} key={index}>
          <View style={styles.heading}>
            <Image
              source={index % 2 === 0 ? photoUser1 : photoUser2}
              style={styles.userImg}
            />
            <View>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.position}>{item.position}</Text>
            </View>
          </View>
          <Text style={styles.position}>{item.title}</Text>
          <Image style={styles.cardImg} source={item.img} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
    gap: 10,
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

  //profile user
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
