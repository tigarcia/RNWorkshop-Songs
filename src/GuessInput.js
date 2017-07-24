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
    backgroundColor: '#ededed',
    height: 50,
    width: 250,
    marginBottom: 15
  }
});
