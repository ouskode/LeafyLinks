import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ImageUpload from '../../components/ImageUpload';
import DropDown from '../../components/DropDown';
import Location from '../../components/Location';




export default function AddPlants() {

  const options = ["Plantes d'intérieur", "Plantes d'extérieur", "Plantes aromatiques", "Plantes grasses", "Plantes à fleurs", "Plantes facile d'entretien", "Plantes de saison", "Plantes potagères"];

  const handleSelect = (option: any) => {
    console.log('Selected:', option);
  };

  return (
    <ScrollView style={styles.container}>
      <Text>Prendre ou upload photo</Text>
      <ImageUpload></ImageUpload>
      <Location style={styles.map}></Location>
      <View style={{marginHorizontal: 20 }}>
      <DropDown options={options} onSelect={handleSelect} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

});
