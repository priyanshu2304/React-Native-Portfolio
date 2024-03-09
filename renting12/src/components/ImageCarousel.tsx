import React from 'react';
import {View, Image, StyleSheet, Dimensions, Text} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const {width: screenWidth} = Dimensions.get('window');

interface Props {
  images: string[]; // Array of image paths
}

const ImageCarousel: React.FC<Props> = () => {
  const images = [
    'https://rukminim1.flixcart.com/image/300/400/k2jbyq80pkrrdj/mobile-refurbished/k/y/d/iphone-11-256-u-mwm82hn-a-apple-0-original-imafkg25mhaztxns.jpeg',
    'https://rukminim1.flixcart.com/image/300/400/k2jbyq80pkrrdj/mobile-refurbished/k/y/d/iphone-11-256-u-mwm82hn-a-apple-0-original-imafkg25mhaztxns.jpeg',
  ];

  const renderItem = ({item}: {item: string}) => (
    <View style={styles.imageContainer}>
      <Image source={{uri: require(item)}} style={styles.image} />
      <Text style={{fontSize: 32}}>Hey</Text>
    </View>
  );

  return (
    <View>
      <Image
        source={require('../../assets/images/one.jpg')}
        style={styles.image}
      />
    </View>
    // <View>
    //   <Image
    //     source={require('../../assets/images/one.jpg')}
    //     style={styles.image}
    //   />
    //   <Carousel
    //     data={images}
    //     renderItem={renderItem}
    //     sliderWidth={100}
    //     itemWidth={100}
    //     layout="default"
    //     loop
    //     autoplay
    //   />
    // </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
  },
  image: {
    width: 200,
    height: 100,
  },
});

export default ImageCarousel;
