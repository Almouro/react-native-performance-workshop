import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
  runOnUI,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const expensiveCalculation = (timems: number) => {
  const initialTime = new Date().getTime();
  while (new Date().getTime() - initialTime < timems) {}
};

const expensiveUICalculation = () => {
  runOnUI(() => {
    const initialTime = new Date().getTime();
    while (new Date().getTime() - initialTime < 200) {}
  })();
};

const useAnimation = () => {
  const y = useSharedValue(0);

  useEffect(() => {
    y.value = withRepeat(
      withTiming((Dimensions.get("window").height * 2) / 3 - 100, {
        duration: 1000,
        easing: Easing.linear,
      }),
      Infinity,
      true
    );
  }, [y]);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: y.value }],
  }));

  return animatedStyles;
};

const useCalculation = () => {
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateJS = async () => {
    setIsCalculating(true);
    await new Promise((resolve) => setTimeout(resolve, 20));
    expensiveCalculation(4000);
    setIsCalculating(false);
  };

  return { isCalculating, calculate: calculateJS };
};

export const AnimationDemo: React.FC = () => {
  const { isCalculating, calculate } = useCalculation();
  const animatedStyles = useAnimation();
  const [counter, setCounter] = useState(0);

  return (
    <SafeAreaView
      edges={["top"]}
      style={[
        styles.container,
        { backgroundColor: isCalculating ? "#feae00" : "#d41876" },
      ]}
    >
      <View style={styles.logoContainer}>
        <Animated.View style={[styles.logo, animatedStyles]}>
          <Text style={styles.logoText}>🐹</Text>
        </Animated.View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { width: "80%", marginBottom: 10 }]}
          onPress={() => expensiveUICalculation()}
        >
          <Text style={styles.buttonText}>HEAVY UI</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { width: "80%" }]}
          onPress={() => calculate()}
        >
          <Text style={styles.buttonText}>
            {isCalculating ? "CALCULATING..." : "HEAVY JS"}
          </Text>
        </TouchableOpacity>
        <View style={styles.counterContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.counterButton}
            onPress={() => setCounter((prev) => prev + 1)}
          >
            <Text style={[styles.buttonText, { color: "white" }]}>+</Text>
          </TouchableOpacity>
          <Text style={[styles.buttonText, { color: "white" }]}>{counter}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 2,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    fontSize: 50,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#4990ff",
    textAlign: "center",
  },
  counterContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  counterButton: {
    backgroundColor: "#4990ff",
    width: 60,
    height: 60,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
});
