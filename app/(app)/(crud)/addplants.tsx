import React, { useState } from 'react'; // Correction ici
import { StyleSheet, Text, View, ScrollView, Alert, TouchableOpacity } from 'react-native';
import ImageUpload from '../../../components/ImageUpload';
import DropDown from '../../../components/DropDown';
import Location from '../../../components/Location';
import DateTime from '../../../components/DateTime';

export default function AddPlants() {
  const [location, setLocation] = useState<{ latitude: number; longitude: number; } | null>(null);
  const [selectedImageUri, setSelectedImageUri] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const options = ["Plantes d'intérieur", "Plantes d'extérieur", "Plantes aromatiques", "Plantes grasses", "Plantes à fleurs", "Plantes facile d'entretien", "Plantes de saison", "Plantes potagères"];

  const handleSelect = (option: any) => {
    setSelectedCategory(option);
    console.log('Selected:', option);
  };

  const handleLocationSelect = (selectedLocation: { latitude: number; longitude: number; }) => {
    setLocation(selectedLocation);
    // Ici, vous pouvez également effectuer d'autres actions comme préparer les données à envoyer à une API
  };
  const sendDataToAPI = async () => {
    try {
      const response = await fetch('URL_DE_VOTRE_API', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          location,
          imageUri: selectedImageUri,
          category: selectedCategory,
          date: selectedDate,
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
      <ImageUpload />
      </View>
      <View style={styles.section}>
      <Location onSelect={handleLocationSelect}/>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Catégorie de plantes</Text>
        <DropDown options={options} onSelect={handleSelect} />
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Durée de la garde</Text>
        <DateTime title={"Date de début"} />
        <DateTime title={"Date de Fin"} />
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
