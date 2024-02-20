import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

type Props = {
  onSelect: any
}

const Location: React.FC<Props> = ({ onSelect }) => {
  const [markerPosition, setMarkerPosition] = useState<{ latitude: number; longitude: number; } | null>(null);

  // La fonction de rappel pour gérer la pression sur la carte. Type d'événement inféré.
  const handleMapPress = (e: any) => {
    const newLocation = {
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
    };
    onSelect(newLocation); // Appelle la fonction de rappel avec les nouvelles coordonnées
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
        {markerPosition && (<Marker coordinate={markerPosition} />)}
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
    ...StyleSheet.absoluteFillObject,
  },
  coordinates: {
    position: 'absolute',
    bottom: 10,
    backgroundColor: 'rgba(255,255,255,0.7)',
    padding: 5,
  },
});

export default Location;
function setMarkerCoords(coordinate: any) {
  throw new Error('Function not implemented.');
}

