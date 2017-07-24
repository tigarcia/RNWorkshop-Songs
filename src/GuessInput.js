import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';
import CustomButton from './CustomButton';

export default (props) => (
  <View style={props.style}>
    <TextInput
      onChangeText={props.onChangeGuess}
      value={props.guess}
      style={styles.guess}/>
    <CustomButton
      onPress={props.onGuess}
      title="GUESS"/>
  </View>
);

const styles = StyleSheet.create({
  guess: {
    backgroundColor: 'white',
    height: 60,
    width: "80%",
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 50,
    fontSize: 25,
  }
});
