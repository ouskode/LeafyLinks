import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Alert,
    TouchableOpacity,
    TextInput,
} from "react-native";
import DropDown from "../../../components/DropDown";
import Location from "../../../components/Location";
import DateTime from "../../../components/DateTime";
import { router } from "expo-router";
import { useRoute } from "@react-navigation/native";
import ButtonAddImage from "../../../components/ButtonAddImage";
import * as SecureStore from "expo-secure-store";

type LocationType = {
    latitude: number;
    longitude: number;
};

export default function AddPlants() {
    const route = useRoute();
    const { imageUri } = route.params;

    const options = [
        "Plantes d'intérieur",
        "Plantes d'extérieur",
        "Plantes aromatiques",
        "Plantes grasses",
        "Plantes à fleurs",
        "Plantes facile d'entretien",
        "Plantes de saison",
        "Plantes potagères",
    ];

    const [location, setLocation] = useState<LocationType | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [description, setDescription] = useState<string>("");
    const [plantName, setPlantName] = useState<string>("");

    const handleSelect = (option: string) => {
        setSelectedCategory(option);
    };

    const handleLocationSelect = (selectedLocation: LocationType) => {
        setLocation(selectedLocation);
    };

    const handleStartDateSelect = (selectedDate: Date) => {
        setStartDate(selectedDate);
    };

    const handleEndDateSelect = (selectedDate: Date) => {
        setEndDate(selectedDate);
    };

    const sendDataToAPI = async () => {
        if (location) {
            try {
                const token = await SecureStore.getItemAsync('authToken');
                if (!token) {
                    throw new Error('No token found');
                }

                // Envoi de la localisation
                const locationResponse = await fetch(new URL('locations', process.env.EXPO_PUBLIC_API_URL).href, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        name: "Nom de la localisation",
                        lat: location.latitude,
                        lng: location.longitude,
                        address: "Adresse de la localisation",
                        public: true,
                    }),
                });

                if (!locationResponse.ok) {
                    throw new Error(`Erreur lors de l'envoi des informations de localisation: ${locationResponse.status}`);
                }

                const locationData = await locationResponse.json();
                const locationId = locationData.data.id;

                if (!locationId) {
                    throw new Error('location_id is undefined in the API response');
                }

                // Envoi des détails de la plante
                const formData = new FormData();
                formData.append("image", {
                    uri: imageUri,
                    type: "image/png",
                    name: "upload.png",
                });
                formData.append("location_id", locationId.toString());
                formData.append("trefle_id", "15");
                formData.append("name", plantName);
                formData.append("desc", description);

                // Ajout de journaux pour le débogage
                console.log("Sending data to plant API:", {
                    location_id: locationId.toString(),
                    name: plantName,
                    desc: description,
                    imageUri: imageUri,
                });

                const plantResponse = await fetch(new URL('plants', process.env.EXPO_PUBLIC_API_URL).href, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    body: formData,
                });

                if (!plantResponse.ok) {
                    const errorData = await plantResponse.json();
                    console.log('Plant API error response:', errorData);
                    throw new Error(`Erreur lors de l'envoi des données de la plante: ${plantResponse.status}`);
                }

                Alert.alert("Succès", "Les données ont été envoyées avec succès.");
            } catch (error) {
                console.error(error);
                Alert.alert("Erreur", "Une erreur s'est produite lors de l'envoi des données.");
            }
        } else {
            Alert.alert("Erreur", "Veuillez sélectionner une localisation.");
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.section}>
                <ButtonAddImage onPress={() => router.navigate("/addimage")} />
            </View>
            <View style={styles.location}>
                <Location onSelect={handleLocationSelect} />
            </View>
            <View style={styles.section}>
                <Text style={styles.title}>Nom de la plante</Text>
                <TextInput 
                    style={styles.input} 
                    value={plantName} 
                    onChangeText={setPlantName} 
                    placeholder="Entrez le nom de la plante"
                />
            </View>
            <View style={styles.section}>
                <Text style={styles.title}>Description de la plante</Text>
                <TextInput 
                    style={styles.input} 
                    value={description} 
                    onChangeText={setDescription} 
                    placeholder="Entrez la description de la plante"
                />
            </View>
            <View style={styles.section}>
                <Text style={styles.title}>Catégorie de plantes</Text>
                <DropDown options={options} onSelect={handleSelect} />
            </View>
            <View style={styles.section}>
                <Text style={styles.title}>Durée de la garde</Text>
                <DateTime title="Date de début" onSelectDate={handleStartDateSelect} />
                <DateTime title="Date de fin" onSelectDate={handleEndDateSelect} />
            </View>
            <TouchableOpacity onPress={sendDataToAPI} style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Envoyer</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        // fle  x: 1,
        padding: 20, // Ajoute un padding pour espacer le contenu des bords
    },
    section: {
        // flex: 1, // Espacement entre chaque section
        padding: 15,
        borderWidth: 1,
        borderRadius: 5,
    },
    location: {
        zIndex: 99,
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 10, // Espacement entre le titre et le contenu suivant
    },
    submitButton: {
        backgroundColor: "#0BCE83",
        padding: 15,
        borderRadius: 5,
        alignSelf: "center",
        marginTop: 20, // Espacement au-dessus du bouton
        width: "90%", // Largeur du bouton
    },
    submitButtonText: {
        color: "white",
        textAlign: "center",
        fontSize: 18, // Taille du texte plus grande pour le bouton
    },
    input: {
        width: "100%",
        justifyContent: "center",
        paddingVertical: 0,
        paddingHorizontal: 12,
        overflow: "hidden",
        flex: 1,
        alignSelf: "stretch",
      },
});