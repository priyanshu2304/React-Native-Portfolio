import React, {useState, useRef} from 'react';
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
                style={styles.container}>
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
  textStyle: {
    color: '#f7f7f7',
    fontWeight: '700',
    fontSize: 14,
  },
  subCategoryListContainer: {
    flexDirection: 'row',
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
  },
  subCategoryContainer: {
    padding: 5,
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
  },
});
