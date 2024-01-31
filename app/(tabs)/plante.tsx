import { StyleSheet } from 'react-native';

import ItemCard from '../../components/ItemCard';
import { Text, View } from '../../components/Themed';

export default function TabPlanteScreen() {
  return (
    <View style={styles.container}>
      <ItemCard></ItemCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
