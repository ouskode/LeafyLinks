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
				const token = await SecureStore.getItemAsync(`authToken`);
                if (!token) {
                  throw new Error('No token found');
                }    
			  const response = await fetch(new URL (`plants/${id.id}`,process.env.EXPO_PUBLIC_API_URL).href,{
			  headers: {
				Authorization: `Bearer ${token}`,
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


