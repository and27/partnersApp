import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../colors';

export default function Social() {
  return (
    <View style={styles.social}>
      <Ionicons
        name="logo-linkedin"
        size={18}
        color={COLORS.primaryBlue}
        style={styles.item}
      />
      <Ionicons
        name="logo-instagram"
        size={18}
        color={COLORS.primaryBlue}
        style={styles.item}
      />
      <Ionicons
        name="logo-whatsapp"
        size={18}
        color={COLORS.primaryBlue}
        style={styles.item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  social: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8
  },
  item: {
    padding: 6,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 8
  }
});
