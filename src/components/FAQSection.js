import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FAQSection = ({ faqs }) => {
  return (
    <View style={styles.section}>
      {faqs.map((faq, index) => (
        <TouchableOpacity key={index} style={styles.faq}>
          <Text style={styles.question}>{faq.question}</Text>
          <Text style={styles.answer}>{faq.answer}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    padding: 20,
  },
  faq: {
    marginBottom: 20,
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  answer: {
    fontSize: 14,
  },
});

export default FAQSection;