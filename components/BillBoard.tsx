import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions } from 'react-native';

type BillboardItem = {
    id: number;
    type: 'image' | 'text';
    content: any;
};

const BillBoard: React.FC = () => {
    const [billboardItems, setBillboardItems] = useState<BillboardItem[]>([
        { id: 1, type: 'text', content: "🔆Attention des fortes chaleurs aujourd'hui🔆" },
        { id: 2, type: 'text', content: 'Ceci est un texte' },
        { id: 3, type: 'text', content: 'Ceci est un autre texte' },
        //{ id: 4, type: 'image', content: require('../assets/images/iconphoto.png') },
    ]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);

    const renderItem = ({ item }: { item: BillboardItem }) => {
        if (item.type === 'image') {
            return (
                <Image source={item.content} style={styles.imageContent} resizeMode="cover" />
            );
        } else {
            return <Text style={styles.title}>{item.content}</Text>;
        }
    };

    const handleScroll = (event: any) => {
        const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
        const screenWidth = layoutMeasurement.width;
        const scrollPosition = contentOffset.x + (screenWidth / 2);
        const itemWidth = contentSize.width / billboardItems.length;
        const index = Math.floor(scrollPosition / itemWidth);
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % billboardItems.length;
            setCurrentIndex(nextIndex);
            flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
        }, 2500);

        return () => {
            clearInterval(interval);
        };
    }, [currentIndex, billboardItems.length]);

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={billboardItems}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                onScroll={handleScroll}
                contentContainerStyle={styles.flatListContent}
            />
            <View style={[styles.pagination, styles.titleFlexBox]}>
                {billboardItems.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.paginationItem,
                            index === currentIndex ? styles.paginationActiveItem : styles.paginationInactiveItem,
                        ]}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 226, 50, 0.12)', // Fond vert
        padding: 8,
        borderRadius: 6,
        borderStyle: 'solid',
        borderColor: '#68ec18',
        borderWidth: 1,
    },
    titleFlexBox: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'left',
        width: , // Prendre toute la largeur de la vue
        backgroundColor: 'rgba(0, 0, 0, 0)',
        padding: 16,
        borderRadius: 6,
    },
    paginationItem: {
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 4,
    },
    paginationActiveItem: {
        backgroundColor: '#fff',
    },
    paginationInactiveItem: {
        backgroundColor: 'rgba(0, 0, 0, 0.23)',
    },
    pagination: {
        flexDirection: 'row',
        marginTop: 10,
    },
    imageContent: {
        width: Dimensions.get('window').width - 32, // Adjust for padding/margin
        height: 200,
        borderRadius: 6,
        marginHorizontal: 16,
    },
    flatListContent: {
        alignItems: 'flex-start', // Center items in FlatList
    },
});

export default BillBoard;
