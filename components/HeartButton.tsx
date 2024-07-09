import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';


type ButtonProps = {
  onPress: () => void;
};

interface HeartButtonState {
  isPressed: boolean;
}

class HeartButton extends React.Component<ButtonProps, HeartButtonState> {
  constructor(props: ButtonProps) {
    super(props);
    this.state = { isPressed: false };
  }

  handlePress = () => {
    this.setState({ isPressed: !this.state.isPressed });
  };

  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.handlePress}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={this.state.isPressed ? require('../assets/images/heartfilled.png') : require('../assets/images/heart.png')}
        />
      </TouchableOpacity>
    );
  }
}

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
