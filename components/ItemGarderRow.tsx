import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const ItemRowView = () => {
  return (
    <View style={styles.itemRowView}>
      <View style={styles.container} />
      <Image style={styles.mediaIcon} resizeMode="cover" source={image} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.price}>
        <Text style={[styles.text, styles.textTypo]}>x.xx</Text>
        <Text style={styles.prix}>{prix}</Text>
      </View>
      <View style={[styles.buttonSecondary, styles.buttonSecondarySpaceBlock]}>
        <Image style={styles.iconHeartLayout} resizeMode="cover" source={imageBasket} />
      </View>
      <View style={[styles.iconHeartWrapper, styles.buttonSecondarySpaceBlock]}>
        <Image style={[styles.iconHeart, styles.iconHeartLayout]} resizeMode="cover" source={imageLike} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    color: "#064a09",
    fontFamily: "SF Pro Text",
    lineHeight: 22,
    letterSpacing: 0,
  },
  buttonSecondarySpaceBlock: {
    paddingVertical: 10,
    paddingHorizontal: 29,
    alignItems: "center",
    top: 104,
    flexDirection: "row",
    overflow: "hidden",
    borderRadius: 8,
    position: "absolute",
  },
  iconHeartLayout: {
    height: 20,
    width: 20,
  },
  container: {
    flex: 1,
    position: "absolute",
    width: "100%",
  },
  mediaIcon: {
    height: "80%",
    right: "52.42%",
    bottom: "10%",
    left: "4.83%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    borderRadius: 8,
    top: "10%",
    width: "42.75%",
    position: "absolute",
  },
  bostonLettuce: {
    height: "15%",
    left: "52.42%",
    fontSize: 18,
    fontWeight: "600",
    top: "10%",
    width: "42.75%",
    textAlign: "left",
    position: "absolute",
  },
  text: {
    fontSize: 22,
    fontWeight: "700",
  },
  piece: {
    fontSize: 16,
    textAlign: "center",
    marginLeft: 2,
    color: "#064a09",
    fontFamily: "SF Pro Text",
    lineHeight: 22,
    letterSpacing: 0,
  },
  price: {
    top: 52,
    alignItems: "flex-end",
    flexDirection: "row",
    left: 218,
    overflow: "hidden",
    position: "absolute",
  },
  buttonSecondary: {
    left: 316,
    backgroundColor: "#0bce83",
  },
  iconHeart: {
    overflow: "hidden",
  },
  iconHeartWrapper: {
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#d9d0e3",
    borderWidth: 1,
    left: 218,
    paddingVertical: 10,
    paddingHorizontal: 29,
    alignItems: "center",
    top: 104,
  },
  itemRowView: {
    flex: 1,
    height: 160,
    width: "100%",
  },
});

export default ItemRowView;
