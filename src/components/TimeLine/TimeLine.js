import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colors } from '../../utils/colors';
import { fontSizes } from '../../utils/sizes';

const TimeLine = () => {
  const graduatedImage = require('../../../assets/Graduated.png');

  return (
    <View style={styles.container}>
      <View style={styles.timelineBar} />
      <Image
        source={graduatedImage}
        style={[styles.timelineDot, { position: 'absolute', top: 0 }]}
      />
      <Image
        source={graduatedImage}
        style={[styles.timelineDot, { position: 'absolute', top: '45%' }]}
      />
      <Image
        source={graduatedImage}
        style={[styles.timelineDot, { position: 'absolute', bottom: 0 }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'none',
    paddingHorizontal: 10,
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    height: "80%"
  },
  timelineBar: {
    height: '100%',
    backgroundColor: 'white',
    width: 2,
    position: 'absolute',
    left: 0,
    top: 0,
    transform: [{ translateX: 10 }],
  },
  timelineDot: {
    width: 24,
    height: 24,
    backgroundColor: colors.grey,
    borderRadius: '50%',
  },
});

export default TimeLine;
