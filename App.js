import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  ImageBackground,
} from 'react-native';
import { colors } from './src/utils/colors';
import { fontSizes } from './src/utils/sizes';
import Formation from './src/components/Formation/Formation';
import NavBar from './src/components/NavBar/NavBar';
import Projects from './src/components/Projects/Projects';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  firstText: {
    color: colors.orange,
    textAlign: 'center',
    fontSize: fontSizes.md,
    fontWeight: 'bold',
  },
  secondText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: fontSizes.lg,
    marginVertical: 15,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
    width: '100%',
    height: '100%',
  },
  competences: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  competencesText: {
    color: colors.white,
  },
  profilPicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 15,
  },
  detailsButton: {
    backgroundColor: 'none',
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.white,
  },
});

const PortfolioScreen = () => {
  const [detailsShown, setDetailsShown] = useState(false);

  const profile = {
    lastName: 'Foltier',
    firstName: 'Tom',
    birthDay: '23/09/2000',
    city: 'Romorantin-Lanthenay',
    pictureURL:
      'https://media.licdn.com/dms/image/C4E03AQH4JOSv36_sPQ/profile-displayphoto-shrink_200_200/0/1657266914557?e=1692230400&v=beta&t=fYNjaFeT1Vv8kbFE9nhRbq2QG4e_3E-P8VPWtv3m-XI',
    formation: [
      {
        diploma: 'Bac S spécialité Mathématiques',
        obtentionYear: 2008,
      },
      {
        diploma: 'Prépa MPSI',
        obtentionYear: 2010,
      },
      {
        diploma: "École d'ingénieur ISEN, Toulon",
        obtentionYear: 2013,
      },
    ],
    projects: [
      {
        name: 'Projet 1',
        description: 'Description du Projet 1',
      },
      {
        name: 'Projet 2',
        description: 'Description du Projet 2',
      },
      // etc...
    ],
    cvURL: 'url_de_cv',
  };

  const background = require('./assets/background.png');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground source={background} style={styles.backgroundImage}>
        <SafeAreaView style={styles.safeContainer}>
          {detailsShown ? (
            <>
              <Formation />
              <Projects />
              <NavBar onGoHome={() => setDetailsShown(false)} />
            </>
          ) : (
            <>
              <Image
                source={{ uri: profile.pictureURL }}
                style={styles.profilPicture}
              />
              <Text style={styles.firstText}>Hello, World.</Text>
              <Text style={styles.secondText}>I am Tom Foltier.</Text>
              <View style={styles.competences}>
                <Text style={styles.competencesText}>
                  Full Stack Developper
                </Text>
                <Text style={styles.competencesText}> | </Text>
                <Text style={styles.competencesText}>UI Designer</Text>
              </View>
              <TouchableOpacity
                style={styles.detailsButton}
                onPress={() => setDetailsShown(!detailsShown)}>
                <Text style={{ color: 'white', textTransform: 'capitalize' }}>
                  More about me
                </Text>
              </TouchableOpacity>
            </>
          )}
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default PortfolioScreen;
