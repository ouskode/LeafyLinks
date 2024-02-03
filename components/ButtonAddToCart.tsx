import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

// Props type definition
type ButtonProps = {
  onPress: () => void;
};

const ButtonAddToCart: React.FC<ButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require('../assets/images/shopping-cart.png')} // Assurez-vous d'ajuster le chemin
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: 10,
    backgroundColor: "#0bce83",
    padding: 10,
    borderRadius: 8,
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default ButtonAddToCart;
