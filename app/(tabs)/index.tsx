import { StyleSheet, Text, View, ScrollView } from 'react-native';

import SearchBar from '../../components/SearchBar';
import ProductGrid from '../../components/ProductGrid'
import BillBoard from '../../components/BillBoard';
import CommentaryList from '../../components/CommentaryList';





export default function TabOneScreen() {

  return (
    <ScrollView style={styles.container} scrollEventThrottle={16}>
      <BillBoard/>
      <SearchBar/>
      <View style={styles.separator} />
      <ProductGrid></ProductGrid>
      <CommentaryList></CommentaryList>
      
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
