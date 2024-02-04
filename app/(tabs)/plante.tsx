import { StyleSheet, ScrollView, View, Image, Pressable} from 'react-native';
import React from 'react';
import ItemCard from '../../components/ItemCard';
import { Link } from 'expo-router';

export default function TabPlanteScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container1}>
  
      <ItemCard title="Plantes d'intérieur" number={43} image={require('../../assets/images/media23x.png')} path={'/plantschilds'}></ItemCard>
      <ItemCard title="Plantes d'extérieur" number={32} image={require('../../assets/images/media43x.png')} path={'/plantschilds'}></ItemCard>
      </View>
      <View style={styles.container1}>
      <ItemCard title="Plantes aromatiques" number={22} image={require('../../assets/images/media33x.png')} path={'/plantschilds'}></ItemCard>
      <ItemCard title="Plantes grasses" number={56} image={require('../../assets/images/media53x.png')} path={'/plantschilds'}></ItemCard>
      </View>
      <View style={styles.container1}>
      <ItemCard title="Plantes à fleurs" number={52} image={require('../../assets/images/media3x.png')} path={'/plantschilds'}></ItemCard>
      <ItemCard title="Plantes facile d'entretien" number={24} image={require('../../assets/images/media13x.png')} path={'/plantschilds'}></ItemCard>
      </View>
      <View style={styles.container1}>
      <ItemCard title="Plantes de saison" number={23} image={require('../../assets/images/media3x.png')} path={'/plantschilds'}></ItemCard>
      <ItemCard title="Plantes potagères" number={15} image={require('../../assets/images/media33x.png')} path={'/plantschilds'}></ItemCard>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15
  },
  container1: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent', 
    padding: 10

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
