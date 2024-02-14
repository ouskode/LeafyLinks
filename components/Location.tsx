import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapComponent: React.FC = () => {
  const [markerCoords, setMarkerCoords] = useState<{ latitude: number; longitude: number; } | null>(null);

  // La fonction de rappel pour gérer la pression sur la carte. Type d'événement inféré.
  const handleMapPress = (e: any) => {
    setMarkerCoords(e.nativeEvent.coordinate);
    // Ici, vous pouvez traiter les coordonnées, par exemple les envoyer à une API
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 43.600857, // Exemple de coordonnées initiales (San Francisco)
          longitude: 3.911669,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={handleMapPress} // Gestionnaire pour la pression sur la carte
      >
        {markerCoords && (
          <Marker coordinate={markerCoords} /> // Marqueur positionné là où l'utilisateur a appuyé
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    marginTop: 10,
    width: 400, // Largeur fixe en pixels
    height: 300, // Hauteur fixe en pixels
    borderRadius: 10, // Optionnel: arrondit les coins de la carte
  },
});

export default MapComponent;
