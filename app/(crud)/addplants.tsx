import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert, TouchableOpacity } from 'react-native';
import DropDown from '../../components/DropDown';
import Location from '../../components/Location';
import DateTime from '../../components/DateTime';
import ButtonAddToCart from '../../components/ButtonAddToCart';
import { router } from 'expo-router';
import { useRoute } from '@react-navigation/native';


type LocationType = {
  latitude: number;
  longitude: number;
};

export default function AddPlants() {

  const route = useRoute();
  const imageUri = route.params?.imageUri; // Assurez-vous que le paramètre est bien passé et typé

  const options = ["Plantes d'intérieur", "Plantes d'extérieur", "Plantes aromatiques", "Plantes grasses", "Plantes à fleurs", "Plantes facile d'entretien", "Plantes de saison", "Plantes potagères"];

  const handleSelect = (option: any) => {
    setSelectedCategory(option);
    console.log('Selected:', option);
  };

  const handleLocationSelect = (selectedLocation: { latitude: number; longitude: number; }) => {
    setLocation(selectedLocation);

  };
  const [location, setLocation] = useState<LocationType | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  // Options et autres fonctions inchangées

  const sendDataToAPI = async () => {
    // Premièrement, envoyez les informations de localisation
    if (location) {
      try {
        const locationResponse = await fetch('https://leafylinks.maxim-le-cookie.fr/api/location', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
          },
          body: JSON.stringify({
            name: "Nom de la localisation", // Assurez-vous de récupérer ou définir un nom
            lat: location.latitude,
            lng: location.longitude,
            address: "Adresse de la localisation", // Assurez-vous de récupérer ou définir une adresse
            public: true,
          }),
        });

        if (!locationResponse.ok) {
          throw new Error('Erreur lors de l\'envoi des informations de localisation');
        }

        // Si la localisation est envoyée avec succès, envoyez ensuite les informations de la plante
        const formData = new FormData();
        formData.append('image', {
          uri: imageUri,
          type: 'image/jpeg', // Assurez-vous que le type correspond au type de fichier
          name: 'upload.jpg',
        });

        // Ajoutez d'autres données de la plante à formData si nécessaire
        // Exemple: formData.append('category', selectedCategory);

        const plantResponse = await fetch('https://leafylinks.maxim-le-cookie.fr/api/plants', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
          },
          body: formData,
        });

        if (!plantResponse.ok) {
          throw new Error('Erreur lors de l\'envoi des données de la plante');
        }

        Alert.alert("Succès", "Les données ont été envoyées avec succès.");
      } catch (error) {
        console.error(error);
        Alert.alert("Erreur", "Une erreur s'est produite lors de l'envoi des données.");
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
    <View style={styles.section}>
      <ButtonAddToCart onPress={() => router.navigate('/addimage')} />
    </View>
    <View style={styles.section}>
      <Location onSelect={handleLocationSelect} />
    </View>
    <View style={styles.section}>
      <Text style={styles.title}>Catégorie de plantes</Text>
      <DropDown options={options} onSelect={handleSelect} />
    </View>
    <View style={styles.section}>
      <Text style={styles.title}>Durée de la garde</Text>
      <DateTime title="Date de début" onSelectDate={setStartDate} />
      <DateTime title="Date de Fin" onSelectDate={setEndDate} />
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
    padding: 20, // Ajoute un padding pour espacer le contenu des bords
  },
  section: {
    marginBottom: 20, // Espacement entre chaque section
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10, // Espacement entre le titre et le contenu suivant
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20, // Espacement au-dessus du bouton
    width: '90%', // Largeur du bouton
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18, // Taille du texte plus grande pour le bouton
  },
});
