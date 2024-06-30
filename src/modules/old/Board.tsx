import React from 'react';
import { View, StyleSheet, Text, TextInput, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LearningCard from '../../components/LearningCard';
import { COLORS } from '../../colors';

const photoUser3 = require('../../assets/avatar12.png');
const photoUser2 = require('../../assets/avatar4.jpg');
const photoUser1 = require('../../assets/avatar5.jpg');
const windowWidth = Dimensions.get('window').width;

export default function Board() {
  const learningPaths = [
    {
      title: 'Programación y Desarrollo de Software',
      category: 'Iniciando',
      steps: [
        {
          title: 'Marie Rodriguez',
          position: 'Abogada',
          description:
            'Únete a Proyecto CodeCraft: Equipo dinámico busca desarrollador talentoso. Haz historia con nosotros en programación y desarrollo de software. ¡Aplica ahora y codifica el futuro!'
        },
        {
          title: 'Andres Lopez',
          position: 'Diseñador Gráfica',
          description:
            'Sé líder en Proyecto InnovateX: Equipo de élite busca programador excepcional. Crea soluciones innovadoras. ¡Aplica y sé parte del éxito en desarrollo de software!'
        },
        {
          title: 'Carlos López',
          position: 'Desarrollador estrella para Proyecto ImpactoTech',
          description:
            'Únete a nuestro apasionado equipo. Juntos, creamos software impactante. ¡Aplica ahora y cambia el juego tecnológico!'
        }
      ]
    },
    {
      title: 'Ciencia y Tecnología',
      category: 'Desarrollo',
      steps: [
        {
          title: 'María Delgado',
          position: 'Asesora legal',
          description:
            'Bioquímicos para Proyecto BioCode. Fusionamos ciencia y tecnología para la innovación. Únete y sé parte del cambio biotecnológico. ¡Aplica ahora y reimagina la bioinformática!'
        },
        {
          title: 'David Zavala',
          position: 'Ingeniero de Software',
          description:
            'Analistas de datos, BioTech espera por ustedes. Únanse a nuestro equipo en Proyecto Genoma. Conviertan datos en descubrimientos. ¡Aplica ahora y sé parte de la revolución genómica!'
        },
        {
          title: 'Bryan González',
          position: 'Abogada',
          description:
            'Ingenieros para Proyecto Horizonte. Convierte ideas en innovación. Únete a nuestro equipo en ciencia y tecnología. ¡Aplica hoy y construyamos juntos el futuro!'
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
    backgroundColor: COLORS.primaryWhite,
    width: windowWidth - 32
  }
});
