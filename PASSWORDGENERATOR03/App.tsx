import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be Min of 4 Characters')
    .max(16, 'Should be Max of 16 Character')
    .required('Lenght is Required'),
});
const App = () => {
  const [password, usePassword] = useState('');
  const [isPasswordGenerated, setIsPassGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [number, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);
  const generatePassword = (passwordLength: number) => {
    //
  };
  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };
  const resetPassword = () => {};
  return (
    <View>
      <Text>Apps</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
