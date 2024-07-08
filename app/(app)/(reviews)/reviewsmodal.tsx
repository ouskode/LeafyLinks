import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';

import ImageModal from '../../../components/ImageModal';
import { useRoute } from "@react-navigation/native";
import ReviewModal from '../../../components/reviewModal';


export default function PlantsModalScreen() {
  
  const id = useRoute().params

  return (
    <ScrollView style={styles.container}>
      <ImageModal id={id} ></ImageModal>
      <ReviewModal id={id}></ReviewModal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
