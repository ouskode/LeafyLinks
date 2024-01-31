import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const ItemCard = () => {
  return (
    <View style={styles.itemCard}>
      <Image
        style={styles.mediaIcon}
        resizeMode="cover"
        source={require('./path/to/Media.png')} // Assurez-vous que le chemin vers l'image est correct
      />
      <Text style={[styles.text, styles.vegetables]}>Plantes d’intérieur</Text>
      <Text style={styles.text}>(43)</Text>
      <View style={styles.cardOverlay} />
    </View>
  );
};

const styles = StyleSheet.create({
  itemCard: {
    flex: 1,
    width: "100%",
    height: 221,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#000",
    position: "relative", // Ajout pour supporter la position absolue des enfants
    justifyContent: 'center', // Centre les éléments sur l'axe secondaire (vertical)
    alignItems: 'center', // Centre les éléments sur l'axe principal (horizontal)
  },
  mediaIcon: {
    height: "65%",
    width: "100%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    position: "absolute",
    top: 0,
  },
  text: {
    textAlign: "left",
    color: "#064a09",
    fontFamily: "SF Pro Display",
    position: "absolute",
  },
  vegetables: {
    top: "70%",
    fontSize: 17,
    fontWeight: "700",
  },
  cardOverlay: {
    backgroundColor: "#fff",
    borderRadius: 8,
    position: "absolute",
    top: 0,
    bottom: "0.91%",
    left: 0,
    right: "1.12%",
    borderColor: "#fff2f2",
    borderWidth: 1,
  },
});

export default ItemCard;
