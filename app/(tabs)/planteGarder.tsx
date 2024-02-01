import * as React from "react";
import { Text, StyleSheet, View, Image, Scrollview } from "react-native";


import ItemCard from '../../components/ItemGarderRow';
import { View } from '../../components/Themed';
import ItemRowView from "../../components/ItemGarderRow";

const PlanteGarder = () => {
  return (
    <View style={styles.planteGarder}>
        <ItemRowView></ItemRowView>
    </View>
  );
};

const styles = StyleSheet.create({
  iconuser: {
    width: 24,
    height: 24,
    borderRadius: 12, 
  },
  mediaIcon: {
    borderRadius: 6,
    height: "80%",
    width: "42.75%",
    position: "absolute",
    left: "4.83%",
    top: "10%",
  },
  savoyCabbage: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    color: "#064a09",
    width: "42.75%",
    position: "absolute",
    left: "52.42%",
    top: "10%",
  },
  price: {
    alignItems: "flex-end",
    flexDirection: "row",
    overflow: "hidden",
    position: "absolute",
  },
  textfield: {
    borderColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "flex-end",
    paddingLeft: 12,
    paddingTop: 4,
    paddingRight: 4,
    paddingBottom: 4,
    borderRadius: 6,
    alignSelf: "stretch",
  },
  search: {
    width: 410,
    height: 36,
    paddingHorizontal: 12,
    paddingVertical: 0,
    alignItems: "center",
    overflow: "hidden",
    position: "absolute",
    top: 178,
  },
});

export default PlanteGarder;
