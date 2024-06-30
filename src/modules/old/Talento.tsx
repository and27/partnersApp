import React from 'react';
import { View, StyleSheet, Text, TextInput, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LearningCard from '../components/LearningCard';
import { COLORS } from '../colors';

const photoUser3 = require('../../assets/persona2.png');
const photoUser2 = require('../../assets/persona3.png');
const photoUser1 = require('../../assets/persona.png');
const windowWidth = Dimensions.get('window').width;

export default function Talento() {
  const learningPaths = [
    {
      title: 'Legal',
      category: 'Iniciando',
      steps: [
        {
          title: 'Fernando González',
          position: 'Jurista creativo',
          description:
            'Expertise legal innovador. Resuelvo desafíos con ingenio. Diseñemos juntos el éxito legal. Contrátame para destacar en estrategia y legalidad.'
        },
        {
          title: 'Daniel Rodriguez',
          position: 'Abogado estratégico disponible',
          description:
            'Experiencia disruptiva y soluciones innovadoras. Diseñemos el camino hacia el éxito legal. ¡Contrátame para una asesoría legal de vanguardia!'
        },
        {
          title: 'Carlos López',
          position: 'Jurista con visión',
          description:
            'Resuelvo desafíos legales con creatividad y expertise. Diseñemos juntos soluciones innovadoras. ¡Contrátame para liderar en la excelencia jurídica!'
        }
      ]
    },
    {
      title: 'Diseño',
      category: 'Desarrollo',
      steps: [
        {
          title: 'Andrés Fernando',
          position: 'Diseñador',
          description:
            'Diseñador visionario listo para elevar tu marca. Fusiono estilo y función para crear experiencias visuales inolvidables. ¡Contrátame y redefine tu impacto visual!'
        },
        {
          title: 'David Smith',
          position: 'Creador visual ',
          description:
            'Transformo ideas en estilos impactantes. Elevemos tu marca con diseño significativo. ¡Contrátame para destacar en creatividad visual!'
        },
        {
          title: 'Derick Fernandez',
          position: 'Diseñador innovador ',
          description:
            'Transformo ideas en experiencias visuales impactantes. ¡Contrátame para llevar tu marca a nuevos horizontes estéticos y funcionales!'
        }
      ]
    }
  ];

  return (
    <>
      <ScrollView contentContainerStyle={styles.container2}>
        <Text>Talento</Text>
        <TextInput style={styles.input} placeholder="🔍 Buscar" />
        {learningPaths.map(path => {
          return (
            <View style={styles.module}>
              <View>
                <Text>{path.title}</Text>
              </View>
              <ScrollView
                contentContainerStyle={styles.steps}
                horizontal={true}
              >
                {path?.steps?.map((step, index) => {
                  const isMultipleOf3 = index % 3 === 0;
                  const isMultipleOf2 = index % 2 == 0;
                  return (
                    <LearningCard
                      title={step?.title}
                      description={step?.description}
                      position={step?.position}
                      img={
                        isMultipleOf2
                          ? isMultipleOf3
                            ? photoUser3
                            : photoUser2
                          : photoUser1
                      }
                      key={index}
                    />
                  );
                })}
              </ScrollView>
            </View>
          );
        })}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container2: {
    paddingLeft: 16,
    paddingTop: 16
  },
  module: {
    paddingTop: 16,
    paddingBottom: 16,
    alignItems: 'flex-start',
    justifyContent: 'center',
    display: 'flex',
    gap: 16
  },
  steps: {
    paddingBottom: 8,
    display: 'flex',
    gap: 16
  },

  headingText: {
    fontWeight: '600',
    color: COLORS.primaryBlue,
    fontSize: 20,
    paddingTop: 8,
    letterSpacing: '-0.8%'
  },

  input: {
    height: 40,
    alignSelf: 'stretch',
    borderColor: '#bbb',
    borderWidth: 1,
    padding: 5,
    borderRadius: 8,
    marginTop: 8,
    backgroundColor: COLORS.primaryWhite,
    width: windowWidth - 36
  }
});
