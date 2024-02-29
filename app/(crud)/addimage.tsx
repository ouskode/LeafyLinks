import React, { useState } from 'react'; // Correction ici
import { StyleSheet, Text, View, ScrollView, Alert, TouchableOpacity } from 'react-native';

import ImageUpload from '../../components/ImageUpload';


export default function AddImage() {

  

  return (
    <View>
      <Text style={styles.title}>Prendre ou upload Photo</Text>
      <View style={styles.section}>
        <ImageUpload />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    padding: 20
  },
  section: {
    padding: 20,
  },
  title: {
    alignSelf: "stretch",
    paddingTop: 15,
    fontSize: 20,
    lineHeight: 20,
    fontWeight: "700",
    paddingBottom: 10, // Ajouté pour espacer le titre du contenu suivant
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});
