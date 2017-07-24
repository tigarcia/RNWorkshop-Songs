import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[
            styles.containerRow,
            {justifyContent: 'space-around'}
          ]} >
          <View style={styles.boxR} />
          <View style={styles.boxR} />
        </View>
        <View style={styles.boxR} />
        <View style={styles.containerRow} >
          <View style={styles.boxB} />
          <View style={styles.boxR} />
          <View style={styles.boxB} />
          <View style={styles.boxR} />
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
    backgroundColor: '#F5FCFF',
    flexDirection: 'column'
  },
  containerRow: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  boxR: {
    width: 80,
    height: 70,
    backgroundColor: 'red'
  },
  boxB: {
    width: 80,
    height: 70,
    backgroundColor: 'blue'
  },
});
