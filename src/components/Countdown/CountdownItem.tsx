import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const CountdownItem = ({value, text}: {value: string; text: string}) => (
  <View style={styles.container}>
    <Text style={styles.value}>{value}</Text>
    <Text style={styles.text}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {width: 50, alignItems: 'center'},
  value: {color: 'white', fontWeight: 'bold', fontSize: 20},
  text: {color: 'white'},
});
