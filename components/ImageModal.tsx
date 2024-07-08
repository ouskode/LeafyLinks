import React, { useEffect, useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import * as SecureStore from 'expo-secure-store';


type Prop = {
	id: any;
}

type ApiData = {
	id: any;
	trefle_id: any;
	image?: string;
}

const ImageModal : React.FC<Prop> = ({id}) => {
	const [datas, setData] = useState<ApiData | null>(null);
	useEffect(() => {
		const fetchData = async () => {
			try {
			  const response = await fetch(new URL (`plants/${id.id}`,process.env.EXPO_PUBLIC_API_URL).href,{
			  headers: {
				Authorization: `Bearer ${SecureStore.getItem('authToken')}`,
			  },
			}); 
			if (!response.ok) {
				throw new Error(`API request failed with status ${response.status}`);
			}
			  const jsonData = await response.json();
			  setData(jsonData.data); 
			} catch (error) {
			  console.error("Erreur lors du fetch des données de l'API :", error);
			}
		  };
	  
		  fetchData();
		}, [id]); 

	useEffect(() => {
		if (datas) {
		  const fetchProductImage = async () => {
			try {
			  const imageUrl = `https://trefle.io/api/v1/plants/${datas.trefle_id}?token=-MzkPLMWtg_qzBIkk63Prcy5eiAkJ0aGf4otU9g1AKY`;
			  const response = await fetch(imageUrl);
			  if (!response.ok) {
				throw new Error(`Image request failed with status ${response.status}`);
			  }
			  const imageData = await response.json();
			  const imageUri = imageData.data.image_url;
			  setData(currentData => ({ ...currentData, image: imageUri }));
			} catch (error) {
			  console.error('Error fetching image:', error);
			}
		  };
	
		  fetchProductImage();
		}
	  }, [datas]); 
	
  	return (
    		<Image style={styles.mediaIcon} resizeMode="cover" source={{ uri: datas?.image}} />);
};

const styles = StyleSheet.create({
  	mediaIcon: {
    		flex: 1,
    		width: "100%",
    		height: 358
  	}
});

export default ImageModal;


