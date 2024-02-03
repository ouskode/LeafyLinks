import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

// Props type definition
type ButtonProps = {
  onPress: () => void;
};

const HeartButton: React.FC<ButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require('../assets/images/heart.png')} // Assurez-vous d'ajuster le chemin
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#d9d0e3",
    padding: 10,
    borderRadius: 8,
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default HeartButton;
