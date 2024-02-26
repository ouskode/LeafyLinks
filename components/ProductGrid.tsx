import React, { useEffect, useState } from 'react';
import {Image, StyleSheet, ScrollView, Text, View } from 'react-native';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';


type productstype = {
  id: number;
  name: string;
  price: string;
  day: string;
  image: any;
}

const ProductGrid: React.FC = () => {
  const [products, setProducts] = useState<productstype[]>([]); // Define state for products

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://leafylinks.maxim-le-cookie.fr/api/plants', {
          headers: {
            Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`, // Replace with your actual bearer token
            // Include other required headers, if any
          },
        }); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors appropriately, e.g., display an error message to the user
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.grid}>
      {products.map((product, index) => (
        <View key={product.id} style={styles.productItem}>
          <Image key={index} source={product.image} style={styles.productImage} />
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>{product.price} pour {product.day}</Text>
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
    height: 150,
    borderRadius: 4,
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
