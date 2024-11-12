import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { DiscoverTab } from "./tabs/DiscoverTab";
import { FollowingTab } from "./tabs/FollowingTab";

const Tab = createMaterialTopTabNavigator();

export const HomeTopTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Discover" component={DiscoverTab} />
      <Tab.Screen name="Following" component={FollowingTab} />
    </Tab.Navigator>
  );
};
