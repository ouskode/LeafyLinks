import { router } from "expo-router";
import React from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
      </View>
      <Image
        source={require("../../assets/images/icone.png")}
        resizeMode="cover"
        style={styles.logo}
      />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Se connecter ou s'inscrire</Text>
        <Text style={styles.description}>
          Veuillez sélectionner votre méthode préférée pour continuer à créer votre compte.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => {router.push('/login')}}>
          <Text style={styles.buttonText}>Poursuivre avec l'e-mail</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => {router.push('/register')}}>
          <Text style={styles.buttonText2}>S'enregistrer</Text>
        </TouchableOpacity>
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>
            Si vous créez un nouveau compte, les Conditions générales d'utilisation et la Politique de confidentialité s'appliqueront.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topContainer: {
    backgroundColor: "#70f91b",
    height: 453,
    justifyContent: "center",
    alignItems: "center",
  },
  contentIcon: {
    height: 24,
    maxWidth: "100%",
  },
  logo: {
    flex:1,
    position: "absolute",
    marginTop:150,
    marginLeft:120,
    width: 161,
    height: 215,
  },
  formContainer: {
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "left",
    color: "#1a1c29",
  },
  description: {
    fontSize: 15,
    marginTop: 8,
    textAlign: "justify",
    lineHeight: 20,
  },
  button: {
    backgroundColor: "#007aff",
    height: 54,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  button2: {
    backgroundColor: "#ffffff",
    height: 54,
    borderRadius: 14,
    borderWidth:1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  buttonText2: {
    color: "#1a1c29",
    fontSize: 16,
    fontWeight: "600",
  },
  termsContainer: {
    marginTop: 16,
  },
  termsText: {
    fontSize: 12,
    textAlign: "center",
    color: "#797979",
    lineHeight: 20,
    textDecorationLine: "underline",
  },
});

export default Welcome;
