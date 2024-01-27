// ProductGrid.tsx
import React from 'react';
import {Image, StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../components/Themed';
const ProductGrid: React.FC = () => {
  // Remplacez ceci par les données récupérées via une API ou un state
  const products = [
    { id: 1, name: 'Rosa pendulina', price: 'XX.XX€', day:'10 j', image: '../assets/images/public/image-1@2x.png' },
    { id: 2, name: 'Hyacinthoides non-scripta', price: 'XX.XX€', day:'5 j', image: '../assets/images/public/image@2x.png' },
    // Ajoutez d'autres produits ici...
  ];

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.grid}>
      {products.map((product, index) => (
        <View key={product.id} style={styles.productItem}>
          <Image key={index} source={{ uri: product.image }} style={styles.productImage} />
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>{product.price}</Text>
          {/* Vous pouvez ajouter ici d'autres éléments comme des icônes ou des boutons */}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  grid: {
    // Styles pour la vue englobante de la grille
    padding: 10,
  },
  productItem: {
    // Styles pour chaque élément de produit
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 5,
    marginBottom: 10,
  },
  productImage: {
    // Styles pour l'image du produit
    width: '100%',
    height: 150,
    borderRadius: 4,
  },
  productName: {
    // Styles pour le nom du produit
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    // Styles pour le prix du produit
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

export default ProductGrid;
