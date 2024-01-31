import { StyleSheet, ScrollView} from 'react-native';

import ItemCard from '../../components/ItemCard';
import { View } from '../../components/Themed';

export default function TabPlanteScreen() {
  return (
    <ScrollView style={styles.container}>
      <ItemCard></ItemCard>
      <ItemCard></ItemCard>
      <ItemCard></ItemCard>
      <ItemCard></ItemCard>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
