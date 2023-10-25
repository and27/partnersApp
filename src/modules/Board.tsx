import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LearningCard from '../components/LearningCard';
import { COLORS } from '../colors';

const photoUser3 = require('../../assets/persona2.png');
const photoUser2 = require('../../assets/persona3.png');
const photoUser1 = require('../../assets/persona.png');

export default function Board() {
  const learningPaths = [
    {
      title: 'Programación y Desarrollo de Software',
      category: 'Iniciando',
      steps: [
        {
          title: 'Marie Clark',
          position: 'Abogada',
          description:
            'Partners ha sido importante en mi vida para encontrar a un gran equipo y lograr continuar mi proyecto con personas comprometidas'
        },
        {
          title: 'Ana Rodriguez',
          position: 'Diseñadora Gráfica',
          description:
            'En mi carrera creativa, Partners ha sido un lugar donde puedo expresar mi visión artística y contribuir ...'
        },
        {
          title: 'Carlos López',
          position: 'Gerente de Ventas',
          description:
            'Trabajar con Partners me ha permitido liderar un equipo de ventas excepcionales y alcanzar metas comerciales ...'
        }
      ]
    },
    {
      title: 'Ciencia y Tecnología',
      category: 'Desarrollo',
      steps: [
        {
          title: 'Ayesha Bazmi',
          position: 'Abogada',
          description:
            'Partners ha sido importante en mi vida para encontrar a un gran equipo y lograr continuar mi proyecto con personas comprometidas'
        },
        {
          title: 'David Smith',
          position: 'Ingeniero de Software',
          description:
            'Partners me ha brindado la oportunidad de trabajar en proyectos innovadores y colaborar ...'
        },
        {
          title: 'Ayesha Bazmi',
          position: 'Abogada',
          description:
            'Partners ha sido importante en mi vida para encontrar a un gran equipo y lograr continuar mi proyecto con personas comprometidas'
        }
      ]
    }
  ];

  return (
    <>
      <ScrollView contentContainerStyle={styles.container2}>
        <Text>Equipos</Text>
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
    backgroundColor: COLORS.primaryWhite
  }
});
