import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {CATEGORY_SUBCATEGORY} from '../../../data/constants';
import Packages from '../../../assets/images/packages.jpg';
import Appliances from '../../../assets/images/appliances.jpg';
import Electronics from '../../../assets/images/electronics.jpg';
import Fitness from '../../../assets/images/fitness.jpg';
import Furniture from '../../../assets/images/fitness.jpg';
import Bikes from '../../../assets/images/bikes.jpg';
import Dummy from '../../../assets/images/one.jpg';

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    CATEGORY_SUBCATEGORY.categories.length > 0
      ? CATEGORY_SUBCATEGORY.categories[0]
      : null,
  );

  const handleCategoryPress = category => {
    setSelectedCategory(category);
  };

  const getImageByCategory = categoryName => {
    switch (categoryName) {
      case 'Packages':
        return Packages;
      case 'Appliances':
        return Appliances;
      case 'Electronics':
        return Electronics;
      case 'Fitness':
        return Fitness;
      case 'Furniture':
        return Furniture;
      case 'Bikes':
        return Bikes;
      default:
        return null;
    }
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={CATEGORY_SUBCATEGORY.categories}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => handleCategoryPress(item)}>
            <View style={{marginRight: 20}}>
              <ImageBackground
                source={getImageByCategory(item.name)}
                style={[
                  styles.container,
                  selectedCategory === item && styles.selectedCategory,
                ]}>
                <Text style={styles.textStyle}>{item.name}</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
        scrollEventThrottle={16}
      />
      {selectedCategory && (
        <View style={styles.subCategoryListContainer}>
          <View style={styles.arrowContainer}>
            <View style={styles.arrow} />
            <View style={styles.arrow1} />
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={selectedCategory.subCategory}
            renderItem={({item}) => (
              <View style={styles.subCategoryContainer}>
                <Image
                  source={Dummy}
                  style={{height: 80, width: 80, borderRadius: 5}}
                />
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={styles.subCategoryText}>
                  {item.filterName}
                </Text>
              </View>
            )}
            keyExtractor={item => item.filterId.toString()}
          />
        </View>
      )}
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 5,
    position: 'relative',
  },
  container: {
    height: 80,
    width: 80,
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
  },
  selectedCategory: {
    borderWidth: 2, // example style for selected category
    borderColor: '#e3a110', // example style for selected category
  },
  textStyle: {
    color: '#f7f7f7',
    fontWeight: '700',
    fontSize: 14,
  },
  subCategoryListContainer: {
    flexDirection: 'row',
    marginTop: 20,
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    borderColor: '#e3a110',
    position: 'relative',
  },
  subCategoryContainer: {
    paddingHorizontal: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  subCategoryText: {
    color: 'black',
    maxWidth: 80,
    fontSize: 14,
    fontWeight: '500',
    overflow: 'hidden',
    paddingTop: 5,
    textAlign: 'center',
  },
  arrowContainer: {
    position: 'absolute',
    left: '50%',
    top: -15,
    transform: [{translateX: -8}],
  },
  arrow: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderLeftWidth: 10,
    borderTopColor: 'red',
    borderRightColor: 'transparent',
    borderBottomColor: '#e3a110',
    borderLeftColor: 'transparent',
    position: 'absolute',
    top: 5,
    left: '50%',
    transform: [{translateX: -5}],
  },
  arrow1: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderLeftWidth: 10,
    borderTopColor: 'red',
    borderRightColor: 'transparent',
    borderBottomColor: '#f4f2f2',
    borderLeftColor: 'transparent',
    position: 'absolute',
    top: 7,
    left: '50%',
    transform: [{translateX: -5}],
  },
});
