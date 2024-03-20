import React, { useEffect, useState } from 'react';
import { Image, StyleSheet } from 'react-native';

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
			  const response = await fetch(`https://leafylinks.maxim-le-cookie.fr/api/plants/${id.id}`,{
			  headers: {
				Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
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

	// Deuxième useEffect pour charger les images après que les produits ont été chargés
	useEffect(() => {
		if (datas) { // Vérifie si datas n'est pas null
		  const fetchProductImage = async () => {
			try {
			  const imageUrl = `https://trefle.io/api/v1/plants/${datas.trefle_id}?token=MQwolJ6yPyPqf-UbqV0UvBZbwDXpCecofBAC1LPt7Ac`;
			  const response = await fetch(imageUrl);
			  if (!response.ok) {
				throw new Error(`Image request failed with status ${response.status}`);
			  }
			  const imageData = await response.json();
			  const imageUri = imageData.data.image_url; // Assurez-vous que ce chemin est correct
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


