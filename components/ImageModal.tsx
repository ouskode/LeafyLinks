import * as React from "react";
import { useEffect, useState } from "react";
import {Image, StyleSheet} from "react-native";

type Prop = {
	id: any;
}

type ApiData = {
	id: any;
	trefle_id: any;
	image: any;
  };

const ImageModal : React.FC<Prop> = ({id}) => {
	const [datas, setData] = useState<ApiData | null>(null);
	useEffect(() => {
		const fetchData = async () => {
			try {
			  const response = await fetch(`https://leafylinks.maxim-le-cookie.fr/api/plants/${id.id}`,{
			  headers: {
				Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
			  },
			}); // Remplacez par votre URL d'API réelle
			if (!response.ok) {
				throw new Error(`API request failed with status ${response.status}`);
			}
			  const jsonData = await response.json();
			  setData(jsonData.data); // Stockez les données de l'API dans l'état
			} catch (error) {
			  console.error("Erreur lors du fetch des données de l'API :", error);
			}
		  };
	  
		  fetchData();
		}, [id]); // Le fetch est redéclenché si l'id change


  	return (
    		<Image style={styles.mediaIcon} resizeMode="cover" source={{ uri: id.image}} />);
};

const styles = StyleSheet.create({
  	mediaIcon: {
    		flex: 1,
    		width: "100%",
    		height: 358
  	}
});

export default ImageModal;


