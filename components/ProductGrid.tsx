import { useEffect, useState } from "react";
import { Image, StyleSheet, ScrollView, Text, View } from "react-native";
import * as SecureStore from 'expo-secure-store';
import React from "react";


type productstype = {
    id: number;
    location_id: number;
    trefle_id: number;
    name: string;
    desc: string;
    garden_needed: number;
    garden_start: string | null;
    garden_end: string | null;
    created_at: string;
    updated_at: string;
    day: number;
    image?: any;
    image_trefle?: any;
};

const Product = ({ data }: { data: productstype }) => {
    const [product, setProduct] = useState<productstype>({ ...data });

    const fetchProductImage = async (product: productstype) => {
        try {
            if (product.image_trefle | product.image) return;
            const imageUrl = `https://trefle.io/api/v1/plants/${product.trefle_id}?token=MQwolJ6yPyPqf-UbqV0UvBZbwDXpCecofBAC1LPt7Ac`;
            const response = await fetch(imageUrl);
            if (!response.ok) {
                throw new Error(
                    `Image request failed of trefle with status ${response.status}`
                );
            }
            const imageData = await response.json();
            const imageUri = imageData.data.image_url;
            setProduct({ ...product, image_trefle: imageUri });
        } catch (error) {
            const image = require("../assets/images/media23x.png");
            setProduct({ ...product, image_trefle: image });
        }
    };
    useEffect(() => {
        fetchProductImage(product);
    }, []);

    return (
        <View style={styles.productItem}>
            {product.image_trefle && (
                <Image
                    source={product.image_trefle}
                    style={styles.productImage}
                />
            )}
            {product.image && (
                <Image
                    source={product.image}
                    style={styles.productImage}
                />
            )}
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}> pour {product.day} </Text>
            <Text style={styles.productIcon}>🌹</Text>
        </View>
    );
};

const ProductGrid: React.FC = () => {
    const [products, setProducts] = useState<productstype[]>([]);

    const fetchData = async () => {
        try {
            const response = await fetch(
                new URL ('plants',process.env.EXPO_PUBLIC_API_URL).href,
                {
                    headers: {
                        Authorization: `Bearer ${SecureStore.getItem}`,
                    },
                }
            );
            if (!response.ok) {
                throw new Error(
                    `API request failed of LL API with status ${response.status}`
                );
            }
            const data = await response.json();
            const productsWithDays = data.data.map(
                (product: {
                    garden_end: string | number | Date;
                    garden_start: string | number | Date;
                }) => {
                    if (product.garden_end && product.garden_start) {
                        const end = new Date(product.garden_end);
                        const start = new Date(product.garden_start);
                        const differenceInTime =
                            end.getTime() - start.getTime();
                        const differenceInDays =
                            differenceInTime / (1000 * 3600 * 24);
                        return { ...product, day: differenceInDays };
                    }
                    return product;
                }
            );
            setProducts(productsWithDays);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.grid}
        >
            {products.map((product, index) => (
                <Product key={index} data={product} />
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
        borderColor: "#ddd",
        borderRadius: 4,
        padding: 5,
        marginBottom: 50,
        minWidth: 230,
    },
    productImage: {
        width: "100%",
        height: 150,
        borderRadius: 4,
    },
    productIcon: {},
    productName: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: "bold",
    },
    productPrice: {
        fontSize: 14,
        color: "#666",
        marginTop: 4,
    },
});

export default ProductGrid;
