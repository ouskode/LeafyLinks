import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const Categories = () => {
  return (
    <View style={styles.categories}>
      <View style={[styles.itemCard, styles.itemCardBorder]}>
        <View style={[styles.card, styles.cardPosition]} />
        <Text style={[styles.pasta, styles.textTypo]}>Pasta</Text>
        <Text style={[styles.text, styles.textTypo]}>(43)</Text>
        <Image
          style={[styles.mediaIcon, styles.cardPosition]}
          contentFit="cover"
          source={require("../assets/media.png")}
        />
        <View style={[styles.cardBorder, styles.cardPosition]} />
      </View>
      <View style={[styles.itemCard1, styles.itemCardPosition]}>
        <View style={[styles.card, styles.cardPosition]} />
        <Text style={[styles.pasta, styles.textTypo]}>Drinks</Text>
        <Text style={[styles.text, styles.textTypo]}>(43)</Text>
        <Image
          style={[styles.mediaIcon, styles.cardPosition]}
          contentFit="cover"
          source={require("../assets/media1.png")}
        />
        <View style={[styles.cardBorder, styles.cardPosition]} />
      </View>
      <Text style={styles.title}>Catégories</Text>
      <View style={[styles.itemCard2, styles.itemCardLayout1]}>
        <View style={[styles.card, styles.cardPosition]} />
        <Text style={[styles.vegetables, styles.textTypo]}>
          Plantes d’intérieur
        </Text>
        <Text style={[styles.text, styles.textTypo]}>(43)</Text>
        <Image
          style={[styles.mediaIcon, styles.cardPosition]}
          contentFit="cover"
          source={require("../assets/media2.png")}
        />
        <View style={[styles.cardBorder, styles.cardPosition]} />
      </View>
      <View style={[styles.itemCard3, styles.itemCardLayout]}>
        <View style={[styles.card, styles.cardPosition]} />
        <Text style={[styles.bread, styles.textTypo]}>Plantes Aromatiques</Text>
        <Text style={[styles.text, styles.textTypo]}>(22)</Text>
        <Image
          style={[styles.mediaIcon, styles.cardPosition]}
          contentFit="cover"
          source={require("../assets/media3.png")}
        />
        <View style={[styles.cardBorder, styles.cardPosition]} />
      </View>
      <View style={[styles.itemCard4, styles.itemCardLayout1]}>
        <View style={[styles.card, styles.cardPosition]} />
        <Text style={[styles.vegetables, styles.textTypo]}>
          Plantes d’extérieur
        </Text>
        <Text style={[styles.text, styles.textTypo]}>(32)</Text>
        <Image
          style={[styles.mediaIcon, styles.cardPosition]}
          contentFit="cover"
          source={require("../assets/media4.png")}
        />
        <View style={[styles.cardBorder, styles.cardPosition]} />
      </View>
      <View style={[styles.itemCard5, styles.itemCardLayout]}>
        <View style={[styles.card, styles.cardPosition]} />
        <Text style={[styles.vegetables, styles.textTypo]}>
          Plantes grasses
        </Text>
        <Text style={[styles.text, styles.textTypo]}>(56)</Text>
        <Image
          style={[styles.mediaIcon, styles.cardPosition]}
          contentFit="cover"
          source={require("../assets/media5.png")}
        />
        <View style={[styles.cardBorder, styles.cardPosition]} />
      </View>
      <View style={[styles.bottomNav, styles.topIconPosition]}>
        <View style={styles.tab}>
          <Text style={[styles.icon, styles.iconFlexBox]} numberOfLines={1}>
            🏠
          </Text>
          <Text style={[styles.title1, styles.title1FlexBox]} numberOfLines={1}>
            Accueil
          </Text>
        </View>
        <View style={styles.tab}>
          <Text style={[styles.icon, styles.iconFlexBox]} numberOfLines={1}>
            🌿
          </Text>
          <Text style={[styles.title1, styles.title1FlexBox]} numberOfLines={1}>
            Plantes
          </Text>
        </View>
        <View style={styles.tab}>
          <Image
            style={styles.iconuser}
            contentFit="cover"
            source={require("../assets/iconuser.png")}
          />
          <Text style={[styles.title1, styles.title1FlexBox]} numberOfLines={1}>
            Profile
          </Text>
        </View>
      </View>
      <View style={styles.search}>
        <View style={[styles.textfield, styles.title1FlexBox]}>
          <Text style={[styles.text6, styles.textTypo]}>Recherche</Text>
          <View style={styles.primary}>
            <Image
              style={styles.icSearchIcon}
              contentFit="cover"
              source={require("../assets/icsearch.png")}
            />
          </View>
        </View>
      </View>
      <Image
        style={[styles.topIcon, styles.topIconPosition]}
        contentFit="cover"
        source={require("../assets/top.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemCardBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  cardPosition: {
    left: "0%",
    right: "1.12%",
    top: "0%",
    width: "98.88%",
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.sFProDisplay,
  },
  itemCardPosition: {
    left: "52.17%",
    right: "4.59%",
  },
  itemCardLayout1: {
    bottom: "47.88%",
    top: "28.35%",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    width: "43.24%",
    height: "23.76%",
    position: "absolute",
  },
  itemCardLayout: {
    bottom: "22.1%",
    top: "54.13%",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    width: "43.24%",
    height: "23.76%",
    position: "absolute",
  },
  topIconPosition: {
    width: 414,
    left: 0,
    position: "absolute",
  },
  iconFlexBox: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.sFProDisplay,
    overflow: "hidden",
  },
  title1FlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  card: {
    bottom: "0.91%",
    height: "99.09%",
    left: "0%",
    right: "1.12%",
    top: "0%",
    width: "98.88%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
  },
  pasta: {
    fontSize: FontSize.size_lg,
    color: Color.font,
    left: "8.94%",
    textAlign: "left",
    fontFamily: FontFamily.sFProDisplay,
    position: "absolute",
    fontWeight: "700",
    top: "70.45%",
    width: "81.01%",
    height: "9.39%",
  },
  text: {
    top: "84.54%",
    fontSize: FontSize.size_xs,
    color: Color.font,
    left: "8.94%",
    textAlign: "left",
    fontFamily: FontFamily.sFProDisplay,
    position: "absolute",
  },
  mediaIcon: {
    height: "65.75%",
    bottom: "34.25%",
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_5xs,
    maxWidth: "100%",
    maxHeight: "100%",
    left: "0%",
    right: "1.12%",
    top: "0%",
    width: "98.88%",
    overflow: "hidden",
  },
  cardBorder: {
    borderColor: Color.colorLavenderblush,
    bottom: "0.91%",
    height: "99.09%",
    left: "0%",
    right: "1.12%",
    top: "0%",
    width: "98.88%",
    borderRadius: Border.br_5xs,
    borderWidth: 1,
    borderStyle: "solid",
  },
  itemCard: {
    borderColor: Color.colorBlack,
    borderRadius: Border.br_5xs,
    bottom: "-3.68%",
    top: "79.91%",
    width: "43.24%",
    height: "23.76%",
    position: "absolute",
    borderWidth: 1,
    borderStyle: "solid",
    left: "4.59%",
    right: "52.17%",
  },
  itemCard1: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderRadius: Border.br_5xs,
    bottom: "-3.68%",
    top: "79.91%",
    width: "43.24%",
    height: "23.76%",
    position: "absolute",
  },
  title: {
    bottom: 791,
    left: 20,
    fontSize: 34,
    letterSpacing: 0,
    lineHeight: 41,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  vegetables: {
    fontSize: FontSize.size_mid,
    color: Color.font,
    left: "8.94%",
    textAlign: "left",
    fontFamily: FontFamily.sFProDisplay,
    position: "absolute",
    fontWeight: "700",
    top: "70.45%",
    width: "81.01%",
    height: "9.39%",
  },
  itemCard2: {
    left: "4.59%",
    right: "52.17%",
  },
  bread: {
    fontSize: 15,
    color: Color.font,
    left: "8.94%",
    textAlign: "left",
    fontFamily: FontFamily.sFProDisplay,
    position: "absolute",
    fontWeight: "700",
    top: "70.45%",
    width: "81.01%",
    height: "9.39%",
  },
  itemCard3: {
    left: "4.59%",
    right: "52.17%",
  },
  itemCard4: {
    left: "52.17%",
    right: "4.59%",
  },
  itemCard5: {
    left: "52.17%",
    right: "4.59%",
  },
  icon: {
    fontSize: FontSize.size_xl,
    lineHeight: 28,
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  title1: {
    fontSize: FontSize.size_3xs,
    lineHeight: 14,
    height: 14,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.sFProDisplay,
    overflow: "hidden",
  },
  tab: {
    padding: Padding.p_9xs,
    alignItems: "center",
    flex: 1,
  },
  iconuser: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  bottomNav: {
    top: 879,
    backgroundColor: "rgba(255, 255, 255, 0.79)",
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    height: 50,
    flexDirection: "row",
    overflow: "hidden",
  },
  text6: {
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.5)",
    textAlign: "left",
    fontFamily: FontFamily.sFProDisplay,
    flex: 1,
  },
  icSearchIcon: {
    width: 20,
    height: 20,
  },
  primary: {
    borderRadius: 4,
    backgroundColor: Color.colorBlack,
    paddingHorizontal: 8,
    paddingVertical: Padding.p_9xs,
    marginLeft: 4,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textfield: {
    borderRadius: 6,
    borderColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "flex-end",
    paddingLeft: Padding.p_xs,
    paddingTop: Padding.p_9xs,
    paddingRight: Padding.p_9xs,
    paddingBottom: Padding.p_9xs,
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
  },
  search: {
    top: 178,
    width: 410,
    height: 36,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 0,
    alignItems: "center",
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  topIcon: {
    top: 0,
    height: 24,
  },
  categories: {
    width: "100%",
    height: 929,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default Categories;
