import * as React from "react";
import {StyleSheet} from "react-native";
import { Text, View } from '../components/Themed';
const BillBoard = () => {
  	
  	return (
    		<View style={styles.image}>
      			<Text style={[styles.title, styles.titleFlexBox]}>Découvre les plantes autour de chez toi</Text>
      			<View style={[styles.pagination, styles.titleFlexBox]}>
        				<View style={[styles.paginationChild, styles.paginationLayout]} />
        				<View style={[styles.paginationItem, styles.paginationLayout]} />
        				<View style={[styles.paginationItem, styles.paginationLayout]} />
        				<View style={[styles.paginationItem, styles.paginationLayout]} />
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	titleFlexBox: {
    		justifyContent: "center",
    		alignItems: "center",
    		position: "absolute"
  	},
  	paginationLayout: {
    		height: 4,
    		borderRadius: 100
  	},
  	title: {
    		marginTop: -8,
    		top: "50%",
    		left: 16,
    		fontSize: 16,
    		lineHeight: 22,
    		fontWeight: "500",
    		color: "#000",
    		textAlign: "center",
    		display: "flex",
    		width: 358,
    		height: 16
  	},
  	paginationChild: {
    		backgroundColor: "#fff",
    		width: 20
  	},
  	paginationItem: {
    		backgroundColor: "rgba(0, 0, 0, 0.23)",
    		width: 4,
    		marginLeft: 4
  	},
  	pagination: {
    		marginLeft: -22,
    		bottom: 8,
    		left: "50%",
    		flexDirection: "row"
  	},
  	image: {
    		alignSelf: "stretch",
    		flex: 1,
    		borderRadius: 6,
    		backgroundColor: "rgba(0, 226, 50, 0.12)",
    		borderStyle: "solid",
    		borderColor: "#68ec18",
    		borderWidth: 1,
    		width: "100%"
  	}
});

export default BillBoard;
