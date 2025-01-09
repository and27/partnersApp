import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../colors';

const { width, height } = Dimensions.get('window');

const ConnectionCardActions = ({ handleNextProfile }) => {
  return (
    <View style={styles.actionButtons}>
      <TouchableOpacity
        style={{ ...styles.actionBtn, backgroundColor: COLORS.primaryBlue }}
        onPress={() => {
          // Aquí podrías hacer algo relacionado con "rocket"
        }}
      >
        <Ionicons name="rocket-outline" size={24} color={COLORS.primaryWhite} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.actionBtn}
        onPress={() => {
          // Aquí podrías hacer algo relacionado con "bookmark"
        }}
      >
        <Ionicons
          name="bookmark-outline"
          size={24}
          color={COLORS.primaryBlue}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionBtn} onPress={handleNextProfile}>
        <Ionicons name="close-outline" size={28} color={COLORS.primaryBlue} />
      </TouchableOpacity>
    </View>
  );
};

export default ConnectionCardActions;

const styles = StyleSheet.create({
  actionButtons: {
    position: 'absolute',
    bottom: 48,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 48
  },
  actionBtn: {
    padding: 8,
    borderRadius: 50,
    backgroundColor: COLORS.primaryWhite,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
