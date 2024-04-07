import React, { useState } from 'react'; // Correction ici
import { StyleSheet, Text, View, ScrollView, Alert, TouchableOpacity } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export default function AddComments() {
  const [location, setLocation] = useState<{ latitude: number; longitude: number; } | null>(null);
  const [selectedId, setSelectedId] = useState('');
  
  const options = ["Plantes d'intérieur", "Plantes d'extérieur", "Plantes aromatiques", "Plantes grasses", "Plantes à fleurs", "Plantes facile d'entretien", "Plantes de saison", "Plantes potagères"];

  const handleSelect = (option: any) => {
    setSelectedId(option);
    console.log('Selected:', option);
  };

  const sendDataToAPI = async () => {
    try {
      const response = await fetch('https://leafylinks.maxim-le-cookie.fr/api/comments', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${SecureStore.getItem}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          location,
          category: selectedId,
        }),
      });

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      // Traiter la réponse de l'API ici
      const data = await response.json();
      console.log(data);
      Alert.alert("Succès", "Les données ont été envoyées avec succès.");
    } catch (error) {
      console.error(error);
      Alert.alert("Erreur", "Une erreur s'est produite lors de l'envoi des données.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <Text style={styles.title}>Prendre ou upload Photo</Text>
      <View style={styles.section}>
      </View>
      <TouchableOpacity onPress={sendDataToAPI} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Envoyer</Text>
      </TouchableOpacity>
    </ScrollView>
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
