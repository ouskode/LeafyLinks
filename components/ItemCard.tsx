import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';


type SelectionProps = {
  title: string;
  number: number;
  image: any;
};

const ItemCard: React.FC<SelectionProps> = () => {
  return (
    <View style={styles.itemCard}>
      <Image
        source={require('../assets/images/media23x.png')}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>Plantes d’intérieur</Text>
      <Text style={styles.subtitle}>(43)</Text>
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;
const cardWidth = screenWidth * 0.40;

const styles = StyleSheet.create({
  itemCard: {
    maxWidth: cardWidth,
    maxHeight: '25%',
    borderRadius: 8,
    overflow: 'hidden',
    borderColor: '#000',
    borderWidth: 1,
    margin: 8,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1, // Assurez-vous que l'image reste carrée
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
    marginTop: 8,
    color: '#064a09',
  },
  subtitle: {
    fontSize: 12,
    textAlign: 'center',
    color: '#064a09',
    marginBottom: 8,
  },
});

// Exemple d'utilisation :
// <ItemCard
//   title="Plantes d’intérieur"
//   subtitle="(43)"
//   image={require('./path/to/interior_plants.png')}
// />
// <ItemCard
//   title="Plantes d’extérieur"
//   subtitle="(32)"
//   image={require('./path/to/exterior_plants.png')}
// />

export default ItemCard;
