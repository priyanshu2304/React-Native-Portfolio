/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Pressable,
} from 'react-native';

import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};
function App(): React.JSX.Element {
  const [dice, setDice] = useState<ImageSourcePropType>(DiceOne);
  const rollTheDice = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setDice(DiceOne);
        break;
      case 2:
        setDice(DiceTwo);
        break;
      case 3:
        setDice(DiceThree);
        break;
      case 4:
        setDice(DiceFour);
        break;
      case 5:
        setDice(DiceFive);
        break;
      case 6:
        setDice(DiceSix);
        break;
      default:
        setDice(DiceOne);
        break;
    }
    ReactNativeHapticFeedback.trigger('impactLight', options);
  };
  return (
    <View style={styles.container}>
      <Dice imageUrl={dice} />
      <Pressable onPress={rollTheDice}>
        <Text style={styles.button}>Roll The Dice</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  diceImage: {
    width: 200,
    height: 200,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#787878',
    padding: 10,
    borderRadius: 4,
    color: '#fff',
    fontWeight: '600',
  },
});

export default App;
