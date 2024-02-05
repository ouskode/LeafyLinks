import { useRouter } from "expo-router";
import * as React from "react";
import {Image, StyleSheet, Text, TouchableOpacity} from "react-native";

type SelectionProps = {
	path:any;
}

const AddButton:React.FC<SelectionProps> = ({path}) => {
	
	const router = useRouter();
	const handlePress = () => {
	  router.push(path)
	};
  	return (
    		<TouchableOpacity style={styles.ajouter} onPress={handlePress}>
      			<Image style={styles.iconplus} resizeMode="cover" source={require('../assets/images/plus.png')} />
      			<Text style={styles.add}>Ajouter</Text>
    		</TouchableOpacity>);
};

const styles = StyleSheet.create({
  	iconplus: {
    		width: 24,
    		height: 24,
    		overflow: "hidden"
  	},
  	add: {
    		fontSize: 14,
    		letterSpacing: 0,
    		lineHeight: 22,
    		fontWeight: "500",
    		color: "#fff",
    		textAlign: "left",
    		marginLeft: 8
  	},
  	ajouter: {
    		borderRadius: 24,
    		backgroundColor: "#45d364",
    		flex: 1,
    		width: "100%",
    		height: 34,
    		flexDirection: "row",
    		alignItems: "center",
    		paddingHorizontal: 15,
    		paddingVertical: 4
  	}
});

export default AddButton;
