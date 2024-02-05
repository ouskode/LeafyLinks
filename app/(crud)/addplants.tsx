import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ImageUpload from '../../components/ImageUpload';




export default function AddPlants() {

  return (
    <View style={styles.container}>
        <ImageUpload></ImageUpload>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0
  },

});
