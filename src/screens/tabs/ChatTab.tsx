import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const Button = ({
  title,
  onPress,
  style,
  testID,
}: {
  title: string;
  onPress: () => void;
  style?: object;
  testID?: string;
}) => (
  <TouchableOpacity
    style={[
      {
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      style,
    ]}
    testID={testID}
    onPress={onPress}>
    <Text style={{fontSize: 40, color: 'white'}}>{title}</Text>
  </TouchableOpacity>
);

const fibo = (n: number): number => {
  if (n <= 1) {
    return n;
  }
  return fibo(n - 1) + fibo(n - 2);
};

export const ChatTab = () => {
  return (
    <View
      style={{
        padding: 16,
      }}>
      <Text style={{fontSize: 24, marginBottom: 16}}>
        {'Actually this is more like an experiment tab'}
      </Text>
      <Button
        title={'KILL JS ☠️'}
        testID="com.example/kill_js"
        onPress={() => fibo(30)}
        style={{marginBottom: 40, backgroundColor: '#1565c0'}}
      />
    </View>
  );
};
