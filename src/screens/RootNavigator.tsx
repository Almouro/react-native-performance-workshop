import * as React from "react";
import { Analytics } from "react-native-analytics";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ExperimentScreen } from "./ExperimentScreen";
import { FlameChartScreen } from "./FlameChartScreen";
import { Tabs } from "./Tabs";
import { AnimationDemo } from "./AnimationDemo";

const MainNavigator = createNativeStackNavigator();

export const RootNavigator = () => {
  React.useEffect(() => {
    Analytics.initialize();
  }, []);

  return (
    <NavigationContainer>
      <MainNavigator.Navigator
        screenOptions={{
          statusBarTranslucent: false,
          statusBarStyle: "dark",
          statusBarColor: "#FFB347",
        }}
        // initialRouteName="FlameChart"
      >
        <MainNavigator.Screen
          name="Tabs"
          component={Tabs}
          options={{
            headerShown: false,
          }}
        />
        <MainNavigator.Screen name="AnimationDemo" component={AnimationDemo} />
        <MainNavigator.Screen name="FlameChart" component={FlameChartScreen} />
        <MainNavigator.Screen name="Profile" component={ExperimentScreen} />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
};
