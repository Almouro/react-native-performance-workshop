import React from 'react';
import {Text} from 'react-native';
import Animated, {FadeIn} from 'react-native-reanimated';

export const Badge = ({count}: {count: number}) => {
  return count > 0 ? (
    <Animated.View
      entering={FadeIn}
      style={{
        position: 'absolute',
        // Didn't bother with the design here, I'll admit 😅
        // completely hardcoded positions which might not always look good
        right: 10,
        top: 3,
        backgroundColor: 'red',
        padding: 3,
        borderRadius: 10,
      }}>
      <Text style={{color: 'white', fontSize: 12}}>{count}</Text>
    </Animated.View>
  ) : null;
};
