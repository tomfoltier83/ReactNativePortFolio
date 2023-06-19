import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { colors } from '../../utils/colors';
import { fontSizes } from '../../utils/sizes';

const NavBar = ({ onGoHome }) => {
  return (
    <View style={styles.navbarContainer}>
      <TouchableOpacity onPress={() => onGoHome()}>
        <Text style={styles.backButton}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  navbarContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  backButton: {
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    color: colors.white,
  },
};

export default NavBar;
