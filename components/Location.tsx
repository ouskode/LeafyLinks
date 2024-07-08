import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';

type Props = {
  onSelect: (coordinate: { latitude: number; longitude: number }) => void;
};

const Location: React.FC<Props> = ({ onSelect }) => {
  const [markerPosition, setMarkerPosition] = useState<{ latitude: number; longitude: number } | null>(null);

  const handleMapPress = (e: any) => {
    const newLocation = {
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
    };
    setMarkerPosition(newLocation); // Met à jour la position du marqueur
    onSelect(newLocation); // Appelle la fonction de rappel avec la nouvelle position
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
        {markerPosition && <Marker coordinate={markerPosition} />}
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
    width: Dimensions.get('window').width / 1.1, // Utilise la largeur de l'écran
    height: Dimensions.get('window').height / 2, // Utilise la hauteur de l'écran
  },
});

export default Location;