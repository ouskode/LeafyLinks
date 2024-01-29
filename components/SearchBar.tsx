// SearchBar.tsx

import React, { useState } from 'react';
import { SearchBar } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import { TextInput, View } from '../components/Themed';


type SearchBarComponentProps = {};

const SwitchComponent: React.FunctionComponent<SearchBarComponentProps> = () => {
const [search, setSearch] = useState("");

const updateSearch = (search: React.SetStateAction<string>) => {
  setSearch(search);
};

return (
  <View style={styles.view}>
    <SearchBar
      placeholder="Type Here..."
      onChangeText={updateSearch}
      value={search}
    />
  </View>
);
};

const styles = StyleSheet.create({
view: {
  margin: 10,
},
});

export default SearchBar;

