import * as React from "react";
import {StyleSheet, Text, View} from "react-native";
import { Image } from 'expo-image';


type CommentaryList = {
	id: number;
	user_id: number;
	plant_id: number;
	up_vote: number;
	down_vote: number;
	text: string;
	image?: string;
	created_at: string;
	updated_at: string;	
  
  }

const CommentaryList: React.FC = () => {
	const commentary = [
		{ id: 1, name: 'Rosa pendulina', author: 'John Doe' ,  contains: '10 Tips for a Cozy Home', image: require('../assets/images/imageRose.png') },
	  ];
	const article = [
		{ id: 1, name: 'Hyacinthoides non-scripta', author: 'Jane Smith', contains: 'Comment choisir la fleur idéale pour vous', image: require('../assets/images/image5.png') },
	];
  	return (
    		<View style={styles.list}>
				{commentary.map((commentary, index) => (
      			<View key={commentary.id} style={styles.articleFlexBox}>
        				<View style={styles.imageContainer}>
          					<Image key={index} style={[styles.imageIcon, styles.imageIconLayout]} contentFit="cover" source={commentary.image} />
        				</View>
        				<View style={styles.titleParent}>
          					<Text style={styles.title}>Dernier commentaire</Text>
          					<Text style={[styles.subtitle, styles.subtitleTypo]}>By {commentary.author}</Text>
          					<Text style={[styles.subtitle1, styles.subtitleTypo]}>{commentary.contains}</Text>
          					<View style={styles.user}>
            						<View style={[styles.avatar, styles.avatarFlexBox]}>
              							<View style={styles.avatar1} />
              							<View style={styles.titleWrapper}>
                								<Text style={[styles.title1, styles.subtitleTypo]} numberOfLines={1}>{commentary.author}</Text>
              							</View>
            						</View>
            						<View style={[styles.iconButtons, styles.avatarFlexBox]}>
              							<Text style={styles.icon} numberOfLines={1}>📖</Text>
            						</View>
          					</View>
        				</View>
      			</View>
				))}
				<View style={styles.separator} />
				{article.map((article, index) => (
      			<View key={article.id} style={[styles.article1, styles.articleFlexBox]}>
        				<View style={styles.imageContainer}>
          					<View style={styles.image} />
          					<Image key={index} style={styles.image5Icon} contentFit="cover" source={article.image} />
        				</View>
        				<View style={styles.titleParent}>
          					<Text style={styles.title}>Article en vedette</Text>
          					<Text style={[styles.subtitle, styles.subtitleTypo]}>By {article.author}</Text>
          					<Text style={[styles.subtitle1, styles.subtitleTypo]}>{article.contains}</Text>
          					<View style={styles.user}>
            						<View style={[styles.avatar, styles.avatarFlexBox]}>
              							<View style={styles.avatar1} />
              							<View style={styles.titleWrapper}>
                								<Text style={[styles.title1, styles.subtitleTypo]} numberOfLines={1}>{article.author}</Text>
              							</View>
            						</View>
            						<View style={[styles.iconButtons, styles.avatarFlexBox]}>
              							<Text style={styles.icon} numberOfLines={1}>📖</Text>
            						</View>
          					</View>
        				</View>
      			</View>
				))}
				<View style={styles.separator} />
    		</View>);
};

const styles = StyleSheet.create({
  	imageIconLayout: {
    		maxHeight: "100%",
    		maxWidth: "100%",
    		overflow: "hidden"
  	},
  	subtitleTypo: {
    		fontSize: 12,
    		textAlign: "left",
    		alignSelf: "stretch"
  	},
  	avatarFlexBox: {
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	articleFlexBox: {
    		paddingVertical: 8,
    		paddingHorizontal: 0,
    		flexDirection: "row",
    		justifyContent: "center",
    		alignSelf: "stretch"
  	},
  	imageIcon: {
    		width: "100%",
    		maxHeight: "100%",
    		maxWidth: "100%",
    		flex: 1,
    		alignSelf: "stretch"
  	},
  	imageContainer: {
    		width: 80,
    		zIndex: 0,
    		overflow: "hidden",
    		height: 80,
    		flexDirection: "row"
  	},
  	title: {
    		textAlign: "left",
    		fontWeight: "500",
    		lineHeight: 20,
    		fontSize: 16,
    		alignSelf: "stretch"
  	},
  	subtitle: {
    		lineHeight: 20
  	},
  	subtitle1: {
    		fontSize: 12,
    		lineHeight: 20
  	},
  	avatar1: {
    		borderRadius: 20,
    		backgroundColor: "rgba(0, 0, 0, 0.1)",
    		width: 20,
    		height: 20,
    		overflow: "hidden"
  	},
  	title1: {
    		lineHeight: 16,
    		height: 16,
    		fontSize: 12,
    		fontWeight: "500",
    		overflow: "hidden"
  	},
  	titleWrapper: {
    		marginLeft: 8,
    		flex: 1
  	},
  	avatar: {
    		flexDirection: "row",
    		flex: 1
  	},
  	icon: {
    		lineHeight: 24,
    		color: "#000",
    		textAlign: "center",
    		display: "flex",
    		width: 24,
    		height: 24,
    		fontSize: 16,
    		overflow: "hidden",
    		justifyContent: "center",
    		alignItems: "center"
  	},
  	iconButtons: {
    		marginLeft: 8,
    		flexDirection: "row"
  	},
  	user: {
    		paddingVertical: 4,
    		paddingHorizontal: 0,
    		flexDirection: "row",
    		alignItems: "center",
    		alignSelf: "stretch"
  	},
  	titleParent: {
    		zIndex: 1,
    		marginLeft: 12,
    		flex: 1
  	},
  	articleChild: {
    		position: "absolute",
    		right: 0,
    		bottom: -1,
    		left: 0,
    		zIndex: 2
  	},
  	image: {
    		backgroundColor: "rgba(0, 0, 0, 0.05)",
    		flex: 1,
    		alignSelf: "stretch"
  	},
  	image5Icon: {
    		width: 79,
    		height: 80
  	},
  	article1: {
    		marginTop: 8
  	},
  	list: {
    		paddingHorizontal: 12,
    		paddingVertical: 0,
    		justifyContent: "center",
    		alignItems: "center",
    		width: "100%",
    		flex: 1,
    		alignSelf: "stretch"
  	},
	separator: {
		marginVertical: 5,
		height: 1,
		width: '95%',
		backgroundColor: '#303030'
	  },
});

export default CommentaryList;
