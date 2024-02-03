import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import ButtonAddToCart from "./ButtonAddToCart";
import HeartButton from "./HeartButton";

const PlantsList = () => {
  // Assurez-vous que le chemin des images est correct et adapté à la structure de votre projet
  const mediaImage = require('../assets/images/bonzai1.png');


  return (
    <View style={styles.itemRowView}>
      <Image style={styles.mediaIcon} resizeMode="cover" source={mediaImage} />
      <View style={styles.detailsContainer}>
        <Text style={[styles.bostonLettuce, styles.textTypo]}>Bonsai Ulmus Parvifolia</Text>
        <View style={styles.priceContainer}>
          <Text style={[styles.text, styles.textTypo]}>x.xx</Text>
          <Text style={styles.piece}>€ / Jours</Text>
        </View>
        <View style={styles.buttonContainer}>
        <ButtonAddToCart onPress={() => console.log('Ajout au panier')} />
        <HeartButton onPress={() => console.log('Ajouté aux favoris')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemRowView: {
    flexDirection: "row",
    height: 160,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  mediaIcon: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 8,
  },
  detailsContainer: {
    flex: 1,
  },
  bostonLettuce: {
    fontSize: 18,
    fontWeight: "600",
    color: "#064a09",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  text: {
    fontSize: 22,
    fontWeight: "700",
    color: "#064a09",
  },
  piece: {
    fontSize: 16,
    marginLeft: 4,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 4,
  },
  buttonSecondary: {
    marginRight: 10,
    backgroundColor: "#0bce83",
    padding: 10,
    borderRadius: 8,
  },
  iconHeartWrapper: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#d9d0e3",
    padding: 10,
    borderRadius: 8,
  },
  iconLayout: {
    width: 20,
    height: 20,
  },
  textTypo: {
    lineHeight: 22,
  },
});

export default PlantsList;
