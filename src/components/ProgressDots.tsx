import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../colors';

const ProgressDots = ({ currentStep }) => {
  return (
    <View style={styles.container}>
      {[1, 2, 3, 4].map(step => (
        <View
          key={step}
          style={[
            styles.dot,
            currentStep >= step ? styles.activeDot : styles.inactiveDot
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4
  },
  activeDot: {
    backgroundColor: COLORS.primaryBlue
  },
  inactiveDot: {
    backgroundColor: COLORS.lightGray
  }
});

export default ProgressDots;
