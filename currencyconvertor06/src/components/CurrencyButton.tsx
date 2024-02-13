import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';

type CurrecyButtonProps = PropsWithChildren<{
  name: string;
  flag: string;
}>;
const CurrencyButton = ({name, flag}: CurrecyButtonProps): JSX.Element => {
  return (
    <View style={styles.btnContainer}>
      <Text style={styles.flag}>{flag}</Text>
      <Text style={styles.country}>{name}</Text>
    </View>
  );
};

export default CurrencyButton;

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flag: {fontSize: 28, color: '#fff', marginBottom: 4},
  country: {fontSize: 18, color: '#2d3436'},
});
