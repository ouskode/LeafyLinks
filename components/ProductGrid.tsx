import React, { useEffect, useState } from "react";
import { Image, StyleSheet, ScrollView, Text, View } from "react-native";

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
            if (product.image_trefle) return;
            const imageUrl = `https://trefle.io/api/v1/plants/${product.trefle_id}?token=MQwolJ6yPyPqf-UbqV0UvBZbwDXpCecofBAC1LPt7Ac`;
            const response = await fetch(imageUrl);
            if (!response.ok) {
                throw new Error(
                    `Image request failed with status ${response.status}`
                );
            }
            const imageData = await response.json();
            const imageUri = imageData.data.image_url;
            setProduct({ ...product, image_trefle: imageUri });
        } catch (error) {
            console.error("Error fetching image:", error);
        }
    };
    useEffect(() => {
        fetchProductImage(product);
    }, []);

    return (
        <View style={styles.productItem}>
            {product.image_trefle && (
                <Image
                    source={{ uri: product.image_trefle }}
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
    const [products, setProducts] = useState<productstype[]>([]); // Define state for products

    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://leafylinks.maxim-le-cookie.fr/api/plants",
                {
                    headers: {
                        Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
                    },
                }
            );
            if (!response.ok) {
                throw new Error(
                    `API request failed with status ${response.status}`
                );
            }
            const data = await response.json();
            const productsWithDays = data.data.map(
                (product: {
                    garden_end: string | number | Date;
                    garden_start: string | number | Date;
                }) => {
                    // Assurez-vous que garden_end et garden_start ne sont pas null
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
    // Premier useEffect pour charger les données des produits
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
