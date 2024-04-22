import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContentSection = ({ title, content }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>{title}</Text>
      <Text>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ContentSection;