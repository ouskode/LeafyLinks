import { StyleSheet } from 'react-native';

import SearchBar from '../../components/SearchBar';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import ProductGrid from '../../components/ProductGrid'
import BillBoard from '../../components/BillBoard';
import CommentaryList from '../../components/CommentaryList';




export default function TabOneScreen() {

  return (
    <View style={styles.container}>
      <BillBoard></BillBoard>
      <SearchBar/>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ProductGrid></ProductGrid>
      <CommentaryList></CommentaryList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
