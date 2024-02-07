import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ImageUpload from '../../components/ImageUpload';
import DropDown from '../../components/DropDown';




export default function AddPlants() {

  const options = ["Plantes d'intérieur", "Plantes d'extérieur", "Plantes aromatiques", "Plantes grasses", "Plantes à fleurs", "Plantes facile d'entretien", "Plantes de saison", "Plantes potagères"];

  const handleSelect = (option: any) => {
    console.log('Selected:', option);
  };

  return (
    <View style={styles.container}>
      <Text>Prendre ou upload photo</Text>
      <ImageUpload></ImageUpload>
      <View style={{ marginTop: 50, marginHorizontal: 20 }}>
      <DropDown options={options} onSelect={handleSelect} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0
  },

});
