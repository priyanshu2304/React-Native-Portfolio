import {StyleSheet, Text, View, FlatList, Pressable} from 'react-native';
import React from 'react';
import Furniture from '../../../assets/images/electronics.jpg';
import {PRODUCT} from '../../../data/constants';
import {Image} from '@rneui/themed';

const Trending = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trending</Text>
      <FlatList
        data={PRODUCT}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.cardContainer}>
            <Image source={Furniture} style={styles.imageContainer} />
            <Text style={styles.cardText}>{item.name}</Text>
            <Text style={[styles.price]}>₹{item.price}/mo</Text>
            <Pressable style={styles.addToCart}>
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

export default Trending;

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  title: {
    fontSize: 16,
    color: '#2b2b2b',
    fontWeight: '600',
  },
  cardContainer: {
    marginTop: 8,
    borderWidth: 1,
    padding: 8,
    borderRadius: 16,
    width: 190,
    borderColor: '#d3cbcb',
    marginRight: 12,
    backgroundColor: 'white',
  },
  imageContainer: {
    height: 150,
    width: 170,
    borderRadius: 16,
  },
  cardText: {
    fontSize: 14,
    color: '#2b2b2b',
    fontWeight: '600',
    paddingTop: 10,
  },
  price: {
    fontSize: 14,
    color: '#2b2b2b',
    fontWeight: '600',
    paddingTop: 6,
  },
  addToCart: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 6,
    marginTop: 8,
    borderColor: '#d6d6d6',
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },
  addToCartText: {
    fontSize: 14,
    color: '#2b2b2b',
    fontWeight: '600',
  },
});
