import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TimeLine from '../TimeLine/TimeLine';
import { colors } from '../../utils/colors';
import { fontSizes } from '../../utils/sizes';

const Formation = () => {
  const diplomas = [
    { name: 'Bac S spécialité Mathématiques', year: '2018' },
    { name: 'Prépa MPSI', year: '2018-2020' },
    {
      name: "École d'ingénieur ISEN,\nSpécialité Production Logiciel",
      year: '2020-2023',
    },
  ];

  return (
    <View style={styles.container}>
      <TimeLine />
      <View style={styles.diplomas}>
        {diplomas.map((diploma, index) => (
          <View
            key={index}
            style={[
              styles.timelineItem,
              { position: 'absolute', top: index * 35 + '%' },
            ]}>
            <View style={styles.timelineContent}>
              <Text style={styles.diplomaName}>{diploma.name}</Text>
              <Text style={styles.diplomaYear}>{diploma.year}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
  },
  diplomas: {
    flex: 1,
    height: '100%',
  },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  timelineContent: {
    flex: 1,
  },
  diplomaName: {
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    marginBottom: 5,
    color: colors.white,
  },
  diplomaYear: {
    color: colors.grey,
  },
});

export default Formation;
