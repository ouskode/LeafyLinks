import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Circle} from 'react-native-maps';


type ZoneCoordinate = {
    latitude: number;
    longitude: number;
  };
  
  type ZoneLocationProps = {
    zoneCoordinates: ZoneCoordinate[];
  };
  
  const ZoneLocation: React.FC<ZoneLocationProps> = ({ zoneCoordinates }) => {
    if (!zoneCoordinates || zoneCoordinates.length === 0) {
      return <Text>Aucune zone définie.</Text>;
    }
  
    const defaultRegion = {
      latitude: zoneCoordinates[0].latitude,
      longitude: zoneCoordinates[0].longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };
  
    return (
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={defaultRegion}
        >
          <Circle
            center={zoneCoordinates[0]}
            radius={300}
            strokeColor="rgba(255,0,0,0.5)"
            fillColor="rgba(255,0,0,0.2)"
          />
        </MapView>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    mapContainer: {
      flex: 1,
      width: '100%',
      height: 200,
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });
  
  export default ZoneLocation;