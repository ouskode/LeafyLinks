import React from 'react';
import {Image, StyleSheet, ScrollView, Text, View } from 'react-native';


const ProductGrid: React.FC = () => {
  // Remplacez ceci par les données récupérées via une API ou un state
  const products = [
    { id: 1, name: 'Rosa pendulina', price: 'XX.XX€', day:'10 j', image: require('../assets/images/imageRose.png') },
    { id: 2, name: 'Hyacinthoides non-scripta', price: 'XX.XX€', day:'5 j', image: require('../assets/images/image2x.png') },
    { id: 3, name: 'Product 3', price: 'XX.XX€', day:'5 j', image: require('../assets/images/image5x.png') }
    
  ];

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
