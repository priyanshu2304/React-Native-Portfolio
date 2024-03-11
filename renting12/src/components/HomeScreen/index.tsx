import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Category from './Category';
import RecentlyBrowsed from './RecentlyBrowsed';
import Trending from './Trending';
const index = () => {
  return (
    <ScrollView>
      <Category />
      <RecentlyBrowsed />
      <Trending />
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({});
