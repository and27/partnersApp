import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { COLORS } from '../colors';

export const ExperienceList = () => {
  const data = [
    {
      id: '1',
      position: 'Investigador Senior en Microbiología',
      company: 'Instituto de Investigación Microbiana Avanzada'
    },
    {
      id: '2',
      position: 'Microbiólogo Clínico ',
      company: 'Hospital de Investigación Médica '
    },
    {
      id: '3',
      position: 'Investigador Asociado en Ecología Microbiana ',
      company: 'Universidad de Ciencias Biológicas '
    }
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.listTitle}>Experiencia</Text>
      {data.map((item, index) => (
        <View style={styles.listElement} key={index}>
          <Octicons name="dot-fill" size={12} color="#444" />
          <View>
            <Text style={{ color: '#555' }}>{item.position}</Text>
            {/* <Text style={styles.listElementSubtitle}>{item.company}</Text> */}
          </View>
        </View>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 36
  },

  listTitle: {
    fontSize: 18,
    marginBottom: 16,
    color: '#2E4D8E'
  },
  listElement: {
    marginBottom: 12,
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center'
  },
  listElementSubtitle: {
    fontSize: 12,
    color: '#2E4D8E',
    paddingVertical: 2
  }
});
