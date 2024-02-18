import React from 'react';
import { StyleSheet, Text, Image, Dimensions, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { router } from 'expo-router';

type SelectionProps = {
  title: string;
  number: number;
  image: ImageSourcePropType;
  path: any;

};



const ItemCard: React.FC<SelectionProps> = ({title, number, image, path}) => {

  const handlePress = () => {
    router.push(path)
  };

  return (
    <TouchableOpacity style={styles.itemCard} onPress={handlePress}>
      <Image
        source={image}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>({number})</Text>
    </TouchableOpacity>
  );
};

const screenWidth = Dimensions.get('window').width;
const cardWidth = screenWidth * 0.35;

const styles = StyleSheet.create({
  itemCard: {
    maxWidth: cardWidth * 1.1,
    minWidth: cardWidth,
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
    aspectRatio: 1,
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
