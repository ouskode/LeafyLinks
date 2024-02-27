import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import BackDropModal from '../../../components/BackdropModal';
import ImageModal from '../../../components/ImageModal';


export default function PlantsModalScreen() {
  return (
    <ScrollView style={styles.container}>
      <ImageModal id={0}></ImageModal>
      <BackDropModal id={0}></BackDropModal>
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
