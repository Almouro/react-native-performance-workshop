import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

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
        justifyContent: "center",
        alignItems: "center",
      },
      style,
    ]}
    testID={testID}
    onPress={onPress}
  >
    <Text style={{ fontSize: 40, color: "white" }}>{title}</Text>
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
      }}
    >
      <Text style={{ fontSize: 24, marginBottom: 16 }}>
        {"Dummy empty tab here"}
      </Text>
    </View>
  );
};
