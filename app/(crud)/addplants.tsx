import React from 'react'; // Correction ici
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ImageUpload from '../../components/ImageUpload';
import DropDown from '../../components/DropDown';
import Location from '../../components/Location';
import DateTime from '../../components/DateTime';

export default function AddPlants() {
  const options = ["Plantes d'intérieur", "Plantes d'extérieur", "Plantes aromatiques", "Plantes grasses", "Plantes à fleurs", "Plantes facile d'entretien", "Plantes de saison", "Plantes potagères"];

  const handleSelect = (option: any) => {
    console.log('Selected:', option);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <Text style={styles.title}>Prendre ou upload Photo</Text>
      <View style={styles.section}>
      <ImageUpload />
      </View>
      <View style={styles.section}>
      <Location />
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
    padding: 20, // Appliquez un padding uniforme pour chaque section
  },
  title: {
    alignSelf: "stretch",
    paddingTop: 15,
    fontSize: 20,
    lineHeight: 20,
    fontWeight: "700",
    paddingBottom: 10, // Ajouté pour espacer le titre du contenu suivant
  },
});
