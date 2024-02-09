import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be Min of 4 Characters')
    .max(16, 'Should be Max of 16 Character')
    .required('Lenght is Required'),
});
const App = () => {
  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
