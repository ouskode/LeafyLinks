import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Text, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImageUpload = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);

  const getPermissionAsync = async () => {

    const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
    const cameraRollStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (cameraStatus.status !== 'granted' || cameraRollStatus.status !== 'granted') {
      Alert.alert('Désolé, nous avons besoin des permissions caméra pour faire cela fonctionner!');
    }
  };

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        setImageUri(result.assets[0].uri);
      }
    } catch (E) {
      console.log(E);
    }
  };

  const takePhoto = async () => {
    try {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        setImageUri(result.assets[0].uri); 
      }
    } catch (E) {
      console.log(E);
    }
  };

  useEffect(() => {
    getPermissionAsync();
  }, []);

  return (
    <View style={styles.imageContainer}>
      <TouchableOpacity style={styles.image} onPress={pickImage}>
        {!imageUri && <Text style={styles.title}>Upload votre photo 
        📷</Text>}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.fullImage} />}
      </TouchableOpacity>
      <TouchableOpacity onPress={takePhoto} style={styles.takePhotoButton}>
        <Text>Prendre une photo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    borderRadius: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    width: '80%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  fullImage: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  takePhotoButton: {
    marginTop: 10,
  },
});


export default ImageUpload;
