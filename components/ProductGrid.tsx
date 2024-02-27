import React, { useEffect, useState } from 'react';
import {Image, StyleSheet, ScrollView, Text, View } from 'react-native';



  type productstype = {
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
  image?: string;

}

const ProductGrid: React.FC = () => {

  const [products, setProducts] = useState<productstype[]>([]); // Define state for products

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
        console.log(data);
        setProducts(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Deuxième useEffect pour charger les images après que les produits ont été chargés
  useEffect(() => {
    const fetchProductImage = async (product: productstype) => {
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
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.grid}>
      {products.map((product, index) => (
        <View key={index} style={styles.productItem}>
          {product.image && <Image source={{ uri: product.image }} style={styles.productImage} />}
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}> pour </Text>
          <Text style={styles.productIcon}>🌹</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  grid: {
    padding: 10,
  },
  productItem: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 5,
    marginBottom: 50,
    minWidth: 230
  },
  productImage: {
    width: '100%',
    
  },
  productIcon:{

  },
  productName: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

export default ProductGrid;
