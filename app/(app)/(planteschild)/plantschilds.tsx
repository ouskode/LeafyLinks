import { StyleSheet, Text, View, ScrollView } from 'react-native';

import SearchBar from '../../../components/SearchBar';
import PlantsList from '../../../components/PlantsList';
import AddButton from '../../../components/AddButton';
import React, { useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';


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
  image?: any;
  image_trefle?: any;
  user_id: number;
  comments: any;

}


export default function PlantesChildsScreen() {

  const performSearch = (query: any) => {
    
    console.log('Recherche pour :', query);
  }
  const [products, setProducts] = useState<plants[]>([]);
  
   useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await SecureStore.getItemAsync(`authToken`);
        if (!token) {
          throw new Error('No token found');
        }
        const response = await fetch(new URL ('plants',process.env.EXPO_PUBLIC_API_URL).href, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
  
        setProducts(data.data);
      } catch (error) {
        console.error('Error fetching data plantschilds:', error);
      }
    };

    fetchData();
  }, []);

  
  useEffect(() => {
    const fetchProductImage = async (product: plants) => {
      try {
        if (product.image_trefle | product.image) return;
        const imageUrl = `http://trefle.io/api/v1/plants/${product.trefle_id}?token=eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJvcmlnaW4iOiJ0cmVmbGUuaW8iLCJpcCI6bnVsbCwiZXhwaXJlIjoiMjAyNC0wNy0xMCAxMzo1MzowMCArMDAwMCIsImV4cCI6MTcyMDcwNTM4MH0.A3xnzbAnSJIRGWQZZcUGeEaCIKy_51vKkMQsz8ux-I4`;
        const response = await fetch(imageUrl);
        if (!response.ok) {
          throw new Error(`Image request failed with status ${response.status}`);
        }
        const imageData = await response.json();
        const imageUri = imageData.data.image_url;
        setProducts((prevProducts: any[]) =>
          prevProducts.map((p) => (p.id === product.id ? { ...p, image: imageUri } : p))
        );
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    products.slice(0, 5).forEach(fetchProductImage);
  }, []);



  return (
    <View>
      <Text style={styles.title}>{`Fleurs &
Plantes ornementales`}</Text>
      <SearchBar onSearch={performSearch}/>
      <ScrollView style={styles.container} scrollEventThrottle={16}>
        {products.map((plantschild, index) => (
        <PlantsList key={index} id={plantschild.id} title={plantschild.name} price={plantschild.price} image={{ uri: plantschild.image }} user_id={plantschild.user_id}></PlantsList>
        ))}
      </ScrollView>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    width: '100%',
    padding: 10,
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