import * as React from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import HeartButton from "./HeartButton";
import ButtonAddToCart from "./ButtonAddToCart";
import { useEffect, useState } from "react";
import Commentary from "./Commentary";

type prop = {
	id: object;
};

type reviews = {
	id: number;
	user_id: number;
	plant_id: number;
	comment: string;
	up_votes: number;
	down_votes: number;
  };

type user = {
	id: number;
	username: string;
  };

  const ReviewModal: React.FC<prop> = ({ id }) => {
	const [reviews, setReviews] = useState<reviews[]>([]);
	const [user, setUser] = useState<user | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchComment = async () => {
			try {
				const response = await fetch(new URL(`comments/${id}`, process.env.EXPO_PUBLIC_API_URL).href, {
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
					},
				});

				if (response.ok) {
					const data = await response.json();
					setReviews(data.data.comments); // Assurez-vous que la structure de la réponse correspond à cette ligne
				} else {
					console.log('Erreur d\'authentification');
				}
			} catch (error) {
				console.error('Erreur de connexion :', error);
			}
		};

		const fetchUser = async () => {
			try {
				const response = await fetch(new URL(`users/${id}`, process.env.EXPO_PUBLIC_API_URL).href, {
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
					},
				});

				if (response.ok) {
					const data = await response.json();
					setUser(data.data.user); // Assurez-vous que la structure de la réponse correspond à cette ligne
				} else {
					console.log('Erreur d\'authentification');
				}
			} catch (error) {
				console.error('Erreur de connexion :', error);
			}
		};

		fetchUser();
		fetchComment();
		setLoading(false);
	}, [id]);

	if (loading) {
		return <Text>Chargement...</Text>;
	}
	
  
	return (
		<>
			<View style={styles.backdrop}>
				<View style={styles.backdropBase} />
				{reviews.map((review, index) => (
					<View key={index}>
						<Text style={styles.bonsaiUlmusParvifolia}>{user?.username}</Text>
						<View style={[styles.price, styles.priceFlexBox]}>
							<Text style={[styles.xxx, styles.xxxLayout]}></Text>
							<Text style={[styles.jours, styles.xxxLayout]}> / Jours</Text>
						</View>
						<Text style={[styles.title, styles.titleTypo]}>Contenu de l'article</Text>
						<Text style={[styles.text, styles.textTypo]}>{review.comment}</Text>
						<View style={[styles.buttonSecondary, styles.priceFlexBox]}>
							<HeartButton onPress={() => console.log('Ajouté aux favoris')} />
						</View>
						<Text style={[styles.title, styles.titleTypo]}>{review.comment}</Text>
					</View>
				))}
			</View>
			<View>
				<Commentary />
			</View>
		</>
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
