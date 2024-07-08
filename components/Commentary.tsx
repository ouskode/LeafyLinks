import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const Commentary = () => {
  return (
    <View style={styles.contentBlockSmall}>
      <Image
        style={styles.imageIcon}
        resizeMode="cover"
        source={require('../assets/images/iconuser3x.png')} // Ensure you use the correct path to your image
      />
      <View style={styles.textContainer}>
        <Text style={styles.header}>Commentaire</Text>
        <Text style={styles.timeAgo}>8m ago</Text>
        <Text style={styles.commentText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum pharetra libero at dapibus.
        </Text>
      </View>
      <View style={styles.dividerLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  contentBlockSmall: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 12,
    height: 'auto',
  },
  imageIcon: {
    width: 75,
    height: 75,
    borderRadius: 37.5, // Makes it round
    overflow: 'hidden',
    marginRight: 16,
  },
  textContainer: {
    flex: 1, // Take up the remaining space
  },
  header: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  timeAgo: {
    fontSize: 14,
    color: '#bdbdbd',
    marginTop: 4,
  },
  commentText: {
    fontSize: 14,
    color: '#000',
    marginTop: 8,
  },
  dividerLine: {
    backgroundColor: '#e8e8e8',
    height: 1,
    marginTop: 16,
  },
});

export default Commentary;
