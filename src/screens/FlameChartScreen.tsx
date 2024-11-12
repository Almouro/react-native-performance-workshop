import React from "react";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const expensiveCalculation = (timems: number) => {
  const initialTime = new Date().getTime();
  while (new Date().getTime() - initialTime < timems) {}
};

const functionA = () => {
  expensiveCalculation(1000);
};

const functionB = () => {
  functionA();
  functionA();
  functionA();
};

const functionC = () => {
  expensiveCalculation(3000);
};

const rootFunction = () => {
  functionA();
  functionB();
  expensiveCalculation(2000);
  functionC();
};

export const FlameChartScreen = () => {
  const [state, setState] = React.useState(true);
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: state ? "purple" : "cyan" }}
    >
      <Button
        onPress={() => {
          rootFunction();
          setState(!state);
        }}
        title={"RUN FUNCTION"}
      />
    </SafeAreaView>
  );
};
