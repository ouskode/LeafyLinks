import { StyleSheet, Text, View, ScrollView } from 'react-native';

import SearchBar from '../../components/SearchBar';
import PlantsList from '../../components/PlantsList';
import AddButton from '../../components/AddButton';
import React, { useEffect, useState } from 'react';



// const plantschild = [
//   { id: 1, name: 'Bonsai Ulmus Parvifolia', price: 15.5, image: require('../../assets/images/bonzai1.png') },
//   { id: 2, name: 'Bonsai Carmona', price: 15.5, image: require('../../assets/images/bonzai2.png') },
//   { id: 3, name: 'Savoy Cabbage', price: 15.5, image: require('../../assets/images/bonzai3.png') },
  
// ];

type plants = {
  price: number;
  id: number;
  location_id: number;
  trefle_id: number;
  name: string;
  desc: string;
  garden_needed: number;
  garden_start: string | null;
  garden_end: string | null;
  created_at: string;
  updated_at: string;
  day: number;
  image?: string;

}

export default function PlantesChildsScreen() {

  const performSearch = (query: any) => {
    // Effectuez la recherche avec la requête `query`
    console.log('Recherche pour :', query);
  }
  const [products, setProducts] = useState<plants[]>([]); // Define state for products

   // Premier useEffect pour charger les données des produits
   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://leafylinks.maxim-le-cookie.fr/api/plants', {
          headers: {
            Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
          },
        });
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
  
        setProducts(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Deuxième useEffect pour charger les images après que les produits ont été chargés
  useEffect(() => {
    const fetchProductImage = async (product: plants) => {
      try {
        const imageUrl = `https://trefle.io/api/v1/plants/${product.trefle_id}?token=-MzkPLMWtg_qzBIkk63Prcy5eiAkJ0aGf4otU9g1AKY`;
        const response = await fetch(imageUrl);
        if (!response.ok) {
          throw new Error(`Image request failed with status ${response.status}`);
        }
        const imageData = await response.blob();
        // Cette partie pourrait nécessiter un ajustement selon la manière dont vous souhaitez gérer les blobs d'images en React Native
        const imageUri = URL.createObjectURL(imageData);
        setProducts((prevProducts) =>
          prevProducts.map((p) => (p.id === product.id ? { ...p, image: imageUri } : p))
        );
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    products.forEach(fetchProductImage);
  }, [products]); // Cette dépendance pourrait causer un rechargement en boucle si les produits sont mis à jour à chaque fois. Assurez-vous de contrôler cela.
  return (
    <View>
      <Text style={styles.title}>{`Fleurs &
Plantes ornementales`}</Text>
      <SearchBar onSearch={performSearch}/>
      <ScrollView style={styles.container}>
        {products.map((plantschild, index) => (
        <PlantsList key={plantschild.id} id={plantschild.id} title={plantschild.name} price={plantschild.price} image={{ uri: plantschild.image }}></PlantsList>
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
