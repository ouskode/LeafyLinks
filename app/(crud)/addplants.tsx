import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert, TouchableOpacity } from 'react-native';
import DropDown from '../../components/DropDown';
import Location from '../../components/Location';
import DateTime from '../../components/DateTime';
import ButtonAddToCart from '../../components/ButtonAddToCart';
import { router } from 'expo-router';
import { useRoute } from '@react-navigation/native';

export default function AddPlants() {

  const { imageUri } = useRoute().params
  console.log(imageUri);
  
  const [location, setLocation] = useState<{ latitude: number; longitude: number; } | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const options = ["Plantes d'intérieur", "Plantes d'extérieur", "Plantes aromatiques", "Plantes grasses", "Plantes à fleurs", "Plantes facile d'entretien", "Plantes de saison", "Plantes potagères"];

  const handleSelect = (option: any) => {
    setSelectedCategory(option);
    console.log('Selected:', option);
  };

  const handleLocationSelect = (selectedLocation: { latitude: number; longitude: number; }) => {
    setLocation(selectedLocation);

  };
  const sendDataToAPI = async () => {
    const formData = new FormData();
    formData.append('image', {
      uri: imageUri,
      type: 'image/jpeg', // ou le type correct de votre image
      name: 'upload.jpg',
    });
    try {
      const response = await fetch('URL_DE_VOTRE_API', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          location,
          category: selectedCategory,
          date: selectedDate,
        }),
      });

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

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
      <View style={styles.section}>
      <ButtonAddToCart onPress={() => router.navigate('/addimage')} />
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
  },
  section: {
    marginBottom: 20, // Ajout d'une marge en bas pour espacer les sections
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10, // Ajout d'une marge en bas pour espacer le titre du contenu suivant
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center', // Centrer le bouton dans le ScrollView
    width: '90%', // Définir une largeur pour le bouton
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});
