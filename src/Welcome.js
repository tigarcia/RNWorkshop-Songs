import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import CustomButton from './CustomButton';

export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Hello React-Native</Text>
        <Button title="SIMPLE BUTTON" onPress={() => null} color="blue"/>
        <View style={styles.inputContainer}>
          <CustomButton title="PRESS ME"/>
          <CustomButton title="NO! PRESS ME"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputContainer: {
    width: 350,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  welcomeText: {
    fontSize: 30
  },
  customButton: {
    borderRadius: 4,
    backgroundColor: "blue",
    padding:10
  },
  buttonText: {
    color: 'white',
    fontSize: 20
  }
});
