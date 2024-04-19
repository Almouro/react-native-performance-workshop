import * as React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {GuineaPigsTab} from './tabs/GuineaPigsTab';
import {PandaTab, RabbitTab, DogTab} from './tabs/OtherTabs';
import {ChatTab} from './tabs/ChatTab';
import {Badge} from '../components/Badge';
import {useNotificationCount} from '../data/useNotificationCount';

const Tab = createMaterialTopTabNavigator();

export const Tabs = () => {
  const {data} = useNotificationCount();

  return (
    <SafeAreaView style={{flex: 1}} edges={['top']}>
      <Tab.Navigator>
        <Tab.Screen name="🐹" component={GuineaPigsTab} />
        <Tab.Screen name="🐼" component={PandaTab} />
        <Tab.Screen name="🐰" component={RabbitTab} />
        <Tab.Screen name="🐶" component={DogTab} />
        <Tab.Screen
          name="💬"
          // No pun intended with Chat meaning Cat in French
          component={ChatTab}
          options={{
            tabBarBadge: () => <Badge count={data?.notificationCount || 0} />,
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};
