import React from "react";
import { Text, StyleSheet, View } from "react-native";

// Exemple de props typés, modifiez selon vos besoins
type SelectionProps = {
  label: string;
};

const Tags: React.FC<SelectionProps> = ({ label }) => {
  return (
    <View style={styles.selection}>
      <View style={styles.labelNormal}>
        <Text style={styles.labelText}>{label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  selection: {
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    alignSelf: "stretch",
    flex: 1,
    width: "100%",
  },
  labelText: {
    fontSize: 12,
    fontFamily: "SF Pro Display",
    color: "#064a09",
    textAlign: "left",
  },
  labelNormal: {
    borderRadius: 2,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 0.5,
    justifyContent: "center",
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
});

export default Tags;
