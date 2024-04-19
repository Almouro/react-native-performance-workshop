import * as React from 'react';
import {
  NavigationContainer,
  StackActions,
  useNavigation,
} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Tabs} from './src/screens/Tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button} from 'react-native';
import {ExperimentScreen} from './src/screens/ExperimentScreen';

const queryClient = new QueryClient();

const MainNavigator = createNativeStackNavigator();

const FirstPage = () => {
  const navigation = useNavigation();
  return (
    <>
      <Button
        title="Go to Experiment screen"
        onPress={() => navigation.dispatch(StackActions.push('Experiment'))}
      />
      <Button
        title="Go to Tabs"
        onPress={() => navigation.dispatch(StackActions.replace('Tabs'))}
      />
    </>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <MainNavigator.Navigator>
            <MainNavigator.Screen name="Init" component={FirstPage} />
            <MainNavigator.Screen
              name="Experiment"
              component={ExperimentScreen}
            />
            <MainNavigator.Screen
              name="Tabs"
              component={Tabs}
              options={{
                headerShown: false,
              }}
            />
          </MainNavigator.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
