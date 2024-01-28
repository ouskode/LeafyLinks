// SearchBar.tsx
import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput, View } from '../components/Themed';

const SearchBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Recherche"
        style={styles.input}
        // Ajoutez ici les props nécessaires pour la fonctionnalité de recherche
      />
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",

  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
    border: "solid",
  },
});

export default SearchBar;

