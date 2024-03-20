import * as React from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import HeartButton from "./HeartButton";
import ButtonAddToCart from "./ButtonAddToCart";
import { useEffect, useState } from "react";
import Commentary from "./Commentary";

const article = [
    { id: 1, author: 'Botaniste', title: "Advide for grow up yout tree", contains: "Quo cognito Constantius ultra mortalem modum exarsit ac nequo casu idem Gallus de futuris incertus agitare quaedam conducentia saluti suae per itinera conaretur, remoti sunt omnes de industria milites agentes in civitatibus perviis." },
];

const ReviewModal= () => {

	
  
  	return (
    		<><View style={styles.backdrop}>
				<View style={styles.backdropBase} />
                {article.map((article,index) => (
				<><Text key={index} style={styles.bonsaiUlmusParvifolia}>{article.author}</Text>
                <View style={[styles.price, styles.priceFlexBox]}>
					<Text style={[styles.xxx, styles.xxxLayout]}></Text>
					<Text style={[styles.jours, styles.xxxLayout]}> / Jours</Text>
				</View>
                <Text style={[styles.title, styles.titleTypo]}>Contenu de l'article</Text>
                <Text style={[styles.text, styles.textTypo]}>{article.title}</Text>
                <View style={[styles.buttonSecondary, styles.priceFlexBox]}>
                    <HeartButton onPress={() => console.log('Ajouté aux favoris')} />
                </View>
                <Text style={[styles.title, styles.titleTypo]}>{article.contains}</Text></>
                ))}
			</View><View>
					<Commentary></Commentary>
				</View></>
			
			);
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

export default ReviewModal;
