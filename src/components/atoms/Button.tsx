import React from 'react';
import {TouchableOpacity, StyleSheet, PixelRatio} from 'react-native';

export const Button = ({
  children,
  onPress,
}: {
  children: React.ReactNode;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    padding: 4,
    borderRadius: 8,
    borderColor: 'grey',
    borderStyle: 'solid',
    borderWidth: 1 / PixelRatio.get(),
  },
});
