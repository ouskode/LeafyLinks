import * as React from "react";
import {Image, StyleSheet} from "react-native";

const ImageModal = () => {
  	
  	return (
    		<Image style={styles.mediaIcon} resizeMode="cover" source={require('../assets/images/bonzai3.png')} />);
};

const styles = StyleSheet.create({
  	mediaIcon: {
    		flex: 1,
    		width: "100%",
    		height: 358
  	}
});

export default ImageModal;
