import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {ListContainer} from '../../components/ListContainer';
import {usePhotos} from '../../data/usePhotos';
import {PhotoList} from '../../components/PhotoList';
import {useCountdown} from '../../components/Countdown/useCountdown';
import {CountdownItem} from '../../components/Countdown/CountdownItem';
import {SafeAreaView} from 'react-native-safe-area-context';

const REACT_NATIVE_BIRTHDAY = '2025-03-26T08:00:00.000Z';

export const GuineaPigsTab = () => {
  const {photos, isLoading} = usePhotos('guinea pig');
  const [days, hours, minutes, seconds] = useCountdown(REACT_NATIVE_BIRTHDAY);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1}}>
        {isLoading ? <ActivityIndicator style={{marginTop: 10}} /> : null}
        {photos ? <PhotoList photos={photos} /> : null}
      </View>
      <SafeAreaView
        edges={['bottom']}
        style={{flexDirection: 'row', backgroundColor: 'rgb(40, 44, 52)'}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            flex: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <CountdownItem value={days} text="Days" />
            <CountdownItem value={hours} text="Hours" />
            <CountdownItem value={minutes} text="Min" />
            <CountdownItem value={seconds} text="Sec" />
          </View>

          <Text
            style={{
              color: 'rgb(97, 218, 251)',
              fontWeight: '600',
              marginTop: 10,
            }}>
            {' '}
            until React Native Birthday 🎂
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};
