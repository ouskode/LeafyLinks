import { StyleSheet, Text, View, ScrollView } from 'react-native';

import SearchBar from '../../components/SearchBar';
import ProductGrid from '../../components/ProductGrid'
import BillBoard from '../../components/BillBoard';
import CommentaryList from '../../components/CommentaryList';
import TopProduct from '../../components/TopProduct';
import React from 'react';





export default function TabOneScreen() {

  const performSearch = (query: any) => {
    console.log('Recherche pour :', query);
  }

  return (
    <ScrollView style={styles.container} scrollEventThrottle={16}>
      <BillBoard/>
      <SearchBar onSearch={performSearch}/>
      <View style={styles.separator} />
      <ProductGrid></ProductGrid>
      <CommentaryList></CommentaryList>
      <TopProduct></TopProduct>
      <View style={styles.separator} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15
  },
 
  separator: {
    marginVertical: 5,
		height: 1,
		width: '95%',
		backgroundColor: '#303030'
  },
});
