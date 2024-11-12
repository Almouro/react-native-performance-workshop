import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ChatTab } from "./tabs/ChatTab";
import { useNotificationCount } from "../data/useNotificationCount";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { AnimationDemo } from "./AnimationDemo";
import { HomeTopTabs } from "./Home";
import { SearchTab } from "./tabs/SearchTab";

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  const { data } = useNotificationCount();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#FFB347",
        headerShown: true,
        headerStyle: {
          backgroundColor: "#FFB347",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeTopTabs}
        options={{
          headerTitle: "Cute Animals 🐹",
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="search"
        component={AnimationDemo}
        options={{
          title: "Search",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "search" : "search-outline"}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="chat"
        // No pun intended with Chat meaning Cat in French
        component={ChatTab}
        options={{
          title: "Demo",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "chatbox" : "chatbox-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
