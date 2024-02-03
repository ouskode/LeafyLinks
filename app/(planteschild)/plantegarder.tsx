import { StyleSheet, Text, View, ScrollView } from 'react-native';

import SearchBar from '../../components/SearchBar';
import PlantsList from '../../components/PlantsList';





export default function PlantesChildsScreen() {

  const performSearch = (query: any) => {
    // Effectuez la recherche avec la requête `query`
    console.log('Recherche pour :', query);
  }

  return (
    <View>
      <SearchBar onSearch={performSearch}/>
      <ScrollView style={styles.container}>
        <PlantsList></PlantsList>
        <PlantsList></PlantsList>
        <PlantsList></PlantsList>
        <PlantsList></PlantsList>
        <PlantsList></PlantsList>
      </ScrollView>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15
  },
 

});
