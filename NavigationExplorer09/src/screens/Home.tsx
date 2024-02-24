import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../App';

type Homeprops = NativeStackScreenProps<RootStackParamList, 'Home'>;
const Home = ({navigation}: Homeprops) => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home</Text>
      <Button
        title="Go To Details Page"
        onPress={() =>
          navigation.navigate('Details', {
            productId: '86',
          })
        }></Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    color: '#000',
  },
});
