import React from "react";
import { ScrollView, Image, StyleSheet, View, Text, Pressable } from "react-native";
import Tags from "./Tags";
import { router } from "expo-router";

const article = [
    { id: 1, author: 'Botaniste', contains: "Les 5 astuces à absolument faire", image: require('../assets/images/image5.png') },
];

const opinion = [
    { id: 1, author: 'Client 2', contains: "J'adore la couleur de mes fleurs", image: require('../assets/images/imageRose.png') },
  ];



const TopProduct =  () => {
  return (
    <ScrollView
      style={styles.grid}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
{article.map((article, index) => (
  <Pressable key={article.id} style={styles.productItem} onPress={() => router.navigate({ pathname: '/(reviews)/reviewsmodal', params: {id:article.id}})}>
    <Image key={index} source={article.image} style={styles.productImage} />
    <View style={styles.textContent}>
          <Text style={styles.title}>{article.contains}</Text>
          <Tags label="Expert" />
        </View>
        <View style={[styles.avatar, styles.avatarFlexBox]}>
            <View style={styles.avatar1} />
            <View style={styles.titleWrapper}>
            <Text style={[styles.title1, styles.subtitleTypo]} numberOfLines={1}>{article.author}</Text>
            </View>
        </View>
        <View style={[styles.iconButtons, styles.avatarFlexBox]}>
            <Text style={styles.icon} numberOfLines={1}>💧</Text>
            <Text style={styles.icon} numberOfLines={1}>💬</Text>
        </View>
  </Pressable>
  ))}

{opinion.map((opinion, index) => (
  <View key={opinion.id} style={styles.productItem}>
    <Image key={index} source={opinion.image} style={styles.productImage} />
    <View style={styles.textContent}>
          <Text style={styles.title}>{opinion.contains}</Text>
          <Tags label="Client satisfait" />
        </View>
        <View style={[styles.avatar, styles.avatarFlexBox]}>
            <View style={styles.avatar1} />
            <View style={styles.titleWrapper}>
            <Text style={[styles.title1, styles.subtitleTypo]} numberOfLines={1}>{opinion.author}</Text>
            </View>
        </View>
        <View style={[styles.iconButtons, styles.avatarFlexBox]}>
            <Text style={styles.icon} numberOfLines={1}>👍</Text>
            <Text style={styles.icon} numberOfLines={1}>💬</Text>
        </View>
  </View>
  ))}
</ScrollView>
  );
};

const styles = StyleSheet.create({
    grid: {
        padding: 10,
      },
      productItem: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        padding: 5,
        marginBottom: 50,
        minWidth: 230
      },
      productImage: {
        // Styles pour l'image du produit
        width: '100%',
        height: 150,
        borderRadius: 4,
      },
      productIcon:{
    
      },
      productName: {
        // Styles pour le nom du produit
        marginTop: 8,
        fontSize: 16,
        fontWeight: 'bold',
      },
      productPrice: {
        // Styles pour le prix du produit
        fontSize: 14,
        color: '#666',
        marginTop: 4,
      },
      textContent: {
        padding: 8,
      },
      title: {
        textAlign: "left",
        color: "#064a09",
        fontSize: 12,
        marginBottom: 8,
      },
      avatar1: {
        borderRadius: 20,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        width: 20,
        height: 20,
        overflow: "hidden"
     },
     title1: {
        lineHeight: 16,
        height: 16,
        fontSize: 12,
        fontWeight: "500",
        overflow: "hidden"
    },
  titleWrapper: {
        marginLeft: 8,
        flex: 1
  },
  avatar: {
    flexDirection: "row",
    flex: 1
},
avatarFlexBox: {
    alignItems: "center",
    flexDirection: "row"
},
subtitleTypo: {
    fontSize: 12,
    textAlign: "left",
    alignSelf: "stretch"
},
icon: {
    lineHeight: 24,
    color: "#000",
    textAlign: "left",
    display: "flex",
    width: 24,
    height: 24,
    fontSize: 16,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center"
},
iconButtons: {
    marginLeft: 8,
    flexDirection: "row"
},
});

export default TopProduct;
