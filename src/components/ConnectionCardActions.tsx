import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

const ConnectionCardActions = ({ handleNextProfile, match }) => {
  return (
    <View style={styles.actionButtons}>
      <TouchableOpacity
        style={{ ...styles.actionBtn, backgroundColor: COLORS.primaryWhite }}
        onPress={match}
      >
        <Ionicons name="rocket-outline" size={24} color={COLORS.primaryBlue} />
      </TouchableOpacity>
      {/* <TouchableOpacity
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
      </TouchableOpacity> */}
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
    bottom: -3,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: -3
  },
  actionBtn: {
    padding: 20,
    borderRadius: 50,
    backgroundColor: COLORS.primaryWhite,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
