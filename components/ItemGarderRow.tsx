import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const ItemRowView = () => {
  return (
    <View style={styles.itemRowView}>
      <View style={styles.mediaContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={image}
        />
      </View>
      <Text style={[styles.bostonLettuce, styles.textTypo]}>
        Bonsai Ulmus Parvifolia
      </Text>
      <View style={styles.price}>
        <Text style={[styles.text, styles.textTypo]}>x.xx</Text>
        <Text style={styles.piece}>€ / Jours</Text>
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
  itemRowView: {
    flexDirection: "row",
    height: 160,
    width: "100%",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fff",
    marginVertical: 8,
  },
  mediaContainer: {
    width: "40%",
    overflow: "hidden",
    borderRadius: 8,
  },
  mediaIcon: {
    flex: 1,
    width: "100%",
    borderRadius: 8,
  },
  bostonLettuce: {
    flex: 1,
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 8,
    marginTop: 8,
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
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
  },
  buttonContainer: {
    backgroundColor: "#0bce83",
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  iconheartContainer: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#d9d0e3",
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginLeft: 8,
  },
  iconheartLayout: {
    height: 20,
    width: 20,
  },
  iconheart: {
    overflow: "hidden",
  },
});

export default ItemRowView;
