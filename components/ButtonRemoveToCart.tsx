import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

// Props type definition
type ButtonRemoveToCartProps = {
    onPress: () => void;
};

const ButtonRemoveToCart: React.FC<ButtonRemoveToCartProps> = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image
                style={styles.icon}
                resizeMode="cover"
                source={require('../assets/images/redcross.png')}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        marginRight: 10,
        backgroundColor: "#FE3206",
        padding: 10,
        borderRadius: 8,
    },
    icon: {
        width: 20,
        height: 20,
    },
});

export default ButtonRemoveToCart;
