import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

const BillBoard = () => {
    return (
        <View style={styles.image}>
            <View style={[styles.titleContainer, styles.titleFlexBox]}>
                <Text style={styles.title}>
                    Découvre les plantes autour de chez toi
                </Text>
            </View>
            <View style={[styles.pagination, styles.titleFlexBox]}>
                <View
                    style={[styles.paginationChild, styles.paginationLayout]}
                />
                <View
                    style={[styles.paginationItem, styles.paginationLayout]}
                />
                <View
                    style={[styles.paginationItem, styles.paginationLayout]}
                />
                <View
                    style={[styles.paginationItem, styles.paginationLayout]}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    titleFlexBox: {
        justifyContent: "center",
        alignItems: "center",
    },
    paginationLayout: {
        height: 4,
        borderRadius: 100,
    },
    titleContainer: {
        textAlign: "center",
        display: "flex",
        alignContent: "center",
        flex: 1,
        //backgroundColor: "transparant",
    },
    title: {
        fontSize: 16,
        fontWeight: "500",
    },
    paginationChild: {
        backgroundColor: "#fff",
        width: 20,
        marginLeft: 4,
    },
    paginationItem: {
        backgroundColor: "rgba(0, 0, 0, 0.23)",
        width: 4,
        marginLeft: 4,
    },
    pagination: {
        flexDirection: "row",
        //backgroundColor: "transparant",
    },
    image: {
        flex: 1,
        borderRadius: 6,
        backgroundColor: "rgba(0, 226, 50, 0.12)",
        borderStyle: "solid",
        borderColor: "#68ec18",
        borderWidth: 1,
        padding: 8,
        minHeight: 120,
        marginBottom: 15,
    },
});

export default BillBoard;
