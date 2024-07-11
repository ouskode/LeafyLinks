import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

// Props type definition
type ButtonProps = {
  onPress: () => void;
};

const ButtonAddImage: React.FC<ButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require('../assets/images/iconphoto.png')}
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
    marginLeft: 140
  },
});

export default ButtonAddImage;
