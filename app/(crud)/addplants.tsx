import React , { StyleSheet, Text, View, ScrollView } from 'react-native';
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
      <View>
      <Location></Location>
      </View>
      <Text style={styles.title}>Prendre ou upload Photo</Text>
      <View>
      <ImageUpload ></ImageUpload>
      </View>
      <View>
      <Text style={styles.title}>Catégorie de plantes</Text>
      <DropDown options={options} onSelect={handleSelect} />
      </View>
      <View style={styles.View}>
      <Text style={styles.title}>Durée de la garde</Text>
      </View>
      <DateTime></DateTime>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1, // Utilisez flex: 1 pour s'assurer que ScrollView utilise tout l'espace disponible
  },
  View: {
    flex: 1,
  },
  container: {
    flexGrow: 1,

    alignItems: 'center', // Centre les enfants horizontalement
    padding: 10, // Ajoute un peu d'espace autour des bords du conteneur parent
  },
  title: {
    alignSelf: "stretch",
    paddingTop: 15,
    fontSize: 20,
    lineHeight: 20,
    fontWeight: "700",
  },

});
