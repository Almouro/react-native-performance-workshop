import * as React from "react";
import { Analytics } from "react-native-analytics";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileScreen } from "./ProfileScreen";
import { FlameChartScreen } from "./FlameChartScreen";
import { Tabs } from "./Tabs";
import { AnimationDemo } from "./AnimationDemo";
import { ReactDevTools } from "./ReactDevTools";

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
        // initialRouteName="AnimationDemo"
      >
        <MainNavigator.Screen
          name="Tabs"
          component={Tabs}
          options={{
            headerShown: false,
          }}
        />
        <MainNavigator.Screen
          name="AnimationDemo"
          component={AnimationDemo}
          options={{
            headerShown: false,
          }}
        />
        <MainNavigator.Screen name="FlameChart" component={FlameChartScreen} />
        <MainNavigator.Screen name="Profile" component={ProfileScreen} />
        <MainNavigator.Screen name="ReactDevTools" component={ReactDevTools} />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
};
