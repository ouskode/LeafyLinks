import * as React from "react";
import { Text, StyleSheet, View, Image, Scrollview } from "react-native";


import ItemCard from '../../components/ItemGarderRow';
import { View } from '../../components/Themed';

const PlanteGarder = () => {
  return (
    <View style={styles.planteGarder}>
      <View style={styles.bottomNav}>
        <View style={styles.tab}>
          <Text style={[styles.icon, styles.iconFlexBox]} numberOfLines={1}>
            🏠
          </Text>
          <Text style={[styles.title, styles.iconFlexBox]} numberOfLines={1}>
            Accueil
          </Text>
        </View>
        <View style={styles.tab}>
          <Text style={[styles.icon, styles.iconFlexBox]} numberOfLines={1}>
            🌿
          </Text>
          <Text style={[styles.title, styles.iconFlexBox]} numberOfLines={1}>
            Plantes
          </Text>
        </View>
        <View style={styles.tab}>
          <Image
            style={styles.iconuser}
            resizeMode="cover"
            source={require("./icon/user.png")}
          />
          <Text style={[styles.title, styles.iconFlexBox]} numberOfLines={1}>
            Profile
          </Text>
        </View>
      </View>
      <View style={[styles.itemRowView, styles.itemViewLayout]}>
      </View>
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
