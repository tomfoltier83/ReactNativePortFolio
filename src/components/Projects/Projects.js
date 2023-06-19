import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { fontSizes } from '../../utils/sizes';

const Projects = () => {
  const projects = [
    {
      name: 'Virtual Tag ',
      description:
        'A smartphone application that allows users to create and sell their NFT, using Google Maps realtime positionning, Solana Blockchain, Google Cloud Platform, React and Kotlin.',
    },
    {
      name: "Post'Hit",
      description:
        'AI powered content generation web application for social networks based in Next.js, Open AI API and Nest.js.',
    },
    {
      name: 'Valans Eland',
      description:
        'Creation of a dynamic e-scooter speedometer (Graphical User Interface), using QT5, C/C++, STM32MP157C board.',
    },
    {
      name: 'System Solution Designer',
      description:
        'Professional web application to help engineers and sellers to design solutions for their customers, based in React for front-end, Nest.js for back-end and MongoDB for Database.',
    },
  ];

  return (
    <View style={styles.container}>
      {projects.map((project, index) => (
        <View key={index} style={styles.projectContainer}>
          <Text style={styles.projectName}>{project.name}</Text>
          <Text style={styles.projectDescription}>{project.description}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1.5,
  },
  projectContainer: {
    marginBottom: 20,
  },
  projectName: {
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 10,
  },
  projectDescription: {
    fontSize: 14,
    color: colors.grey,
  },
});

export default Projects;