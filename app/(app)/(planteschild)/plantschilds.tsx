import { StyleSheet, Text, View, ScrollView } from 'react-native';

import SearchBar from '../../../components/SearchBar';
import PlantsList from '../../../components/PlantsList';

import React from 'react';



const plantschild = [
  { id: 1, name: 'Bonsai Ulmus Parvifolia', price: 15.5, image: require('../../../assets/images/bonzai1.png') },
  { id: 2, name: 'Bonsai Carmona', price: 15.5, image: require('../../../assets/images/bonzai2.png') },
  { id: 3, name: 'Savoy Cabbage', price: 15.5, image: require('../../../assets/images/bonzai3.png') },
  
];

export default function PlantesChildsScreen() {

  const performSearch = (query: any) => {
    // Effectuez la recherche avec la requête `query`
    console.log('Recherche pour :', query);
  }

  return (
    <View>
      <Text style={styles.title}>{`Fleurs &
Plantes ornementales`}</Text>
      <SearchBar onSearch={performSearch}/>
      <ScrollView style={styles.container}>
        {plantschild.map((plantschild, index) => (
        <PlantsList key={plantschild.id} title={plantschild.name} price={plantschild.price} image={plantschild.image}></PlantsList>
        ))}
      </ScrollView>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15
  },
  searchbar: {
    margin: 10,
  },
  title: {
    fontSize: 30,
    letterSpacing: 0,
    lineHeight: 41,
    fontWeight: 'bold',
    margin: 10
  }
 

});
