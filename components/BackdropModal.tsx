import * as React from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import HeartButton from "./HeartButton";
import ButtonAddToCart from "./ButtonAddToCart";

const Backdrop = () => {
  	
  	return (
    		<View style={styles.backdrop}>
      			<View style={styles.backdropBase} />
      			<Text style={styles.bonsaiUlmusParvifolia}>Bonsai Ulmus Parvifolia</Text>
      			<View style={[styles.buttonSecondary, styles.priceFlexBox]}>
                  <HeartButton onPress={() => console.log('Ajouté aux favoris')} />
      			</View>
      			<View style={[styles.buttonprimaryWithIcon, styles.priceFlexBox]}>
                    <ButtonAddToCart onPress={() => console.log('Ajout au panier')} />
      			</View>
      			<View style={[styles.price, styles.priceFlexBox]}>
        				<Text style={[styles.xxx, styles.xxxLayout]}>X.XX</Text>
        				<Text style={[styles.jours, styles.xxxLayout]}>€ / Jours</Text>
      			</View>
      			<Text style={[styles.title, styles.titleTypo]}>Instruction spéciales</Text>
      			<Text style={[styles.text, styles.textTypo]}>Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.</Text>
      			<Text style={[styles.text1, styles.textTypo]}>{`~ Durée estimée de X Jours
        				Du XX/XX/XXXX au XX/XX/XXXX`}</Text>
    		</View>);
};

const styles = StyleSheet.create({
  	priceFlexBox: {
    		flexDirection: "row",
    		alignItems: "center",
    		position: "absolute"
  	},
  	titleTypo: {
    		textAlign: "left",
    		letterSpacing: 0
  	},
  	xxxLayout: {
    		lineHeight: 43,
    		letterSpacing: -1,
  	},
  	textTypo: {
    		lineHeight: 26,
    		fontSize: 17,
    		textAlign: "left",
    		letterSpacing: 0,
    		position: "absolute"
  	},
  	backdropBase: {
    		top: 0,
    		right: 0,
    		bottom: 0,
    		left: 0,
    		borderTopLeftRadius: 30,
    		borderTopRightRadius: 30,
    		backgroundColor: "#fff",
    		position: "absolute"
  	},
  	bonsaiUlmusParvifolia: {
    		top: 37,
    		fontSize: 30,
    		lineHeight: 41,
    		display: "flex",
    		width: 374,
    		alignItems: "center",
    		letterSpacing: 0,
    		textAlign: "left",
    		color: "#2d0c57",
    		fontWeight: "700",
    		left: 20,
    		position: "absolute"
  	},
  	iconheart: {
    		width: 20,
    		height: 20,
    		overflow: "hidden"
  	},
  	buttonSecondary: {
    		marginLeft: -187,
    		borderStyle: "solid",
    		borderColor: "#5cc71a",
    		borderWidth: 1,
    		paddingHorizontal: 29,
    		paddingVertical: 10,
    		overflow: "hidden",
    		borderRadius: 8,
    		left: "50%",
    		bottom: 65,
    		top: 494,
    		flexDirection: "row",
    		backgroundColor: "#fff"
  	},
  	addToCart: {
    		fontSize: 15,
    		lineHeight: 18,
    		textTransform: "uppercase",
    		fontWeight: "600",
    		color: "#fff",
    		marginLeft: 16
  	},
  	buttonprimaryWithIcon: {
    		marginLeft: -67.5,
    		backgroundColor: "#0bce83",
    		paddingHorizontal: 68,
    		paddingVertical: 16,
    		borderRadius: 8,
    		left: "50%",
    		bottom: 65,
    		top: 494,
    		flexDirection: "row"
  	},
  	xxx: {
    		fontSize: 32,
    		textAlign: "left",
    		lineHeight: 43,
    		letterSpacing: -1,
    		color: "#2d0c57",
    		fontWeight: "700"
  	},
  	jours: {
    		fontSize: 24,
    		textAlign: "center",
    		marginLeft: 5,
    		color: "#9586a8"
  	},
  	price: {
    		top: 94,
    		overflow: "hidden",
    		left: 20
  	},
  	title: {
    		top: 204,
    		fontSize: 22,
    		lineHeight: 22,
    		width: 275,
    		height: 24,
    		color: "#2d0c57",
    		fontWeight: "700",
    		left: 20,
    		position: "absolute"
  	},
  	text: {
    		top: 244,
    		left: 21,
    		width: 373,
    		height: 194,
    		color: "#9586a8"
  	},
  	text1: {
    		top: 146,
    		fontWeight: "500",
    		color: "#06be77",
    		left: 20
  	},
  	backdrop: {
    		flex: 1,
    		width: "100%",
    		height: 615
  	}
});

export default Backdrop;
