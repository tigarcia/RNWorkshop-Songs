import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

export default props => (
  <TouchableOpacity
    style={styles.buttonContainer}
    onPress={props.onPress}>
    <Text style={styles.buttonText}>
      {props.title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 4,
    backgroundColor: "blue",
    padding:10
  },
  buttonText: {
    color: 'white',
    fontSize: 25
  }
});
