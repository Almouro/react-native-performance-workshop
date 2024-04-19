import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Photo} from '../../data/model/photo.quicktype';
import {ProfileHeader} from './ProfileHeader';
import {ButtonsFooter} from './ButtonsFooter';

export const PhotoListItem = ({photo}: {photo: Photo}) => {
  const aspectRatio = photo.width / photo.height;

  return (
    <View style={styles.container}>
      <ProfileHeader user={photo.user} />
      <View style={{width: '100%', height: undefined, aspectRatio}}>
        <Image
          style={styles.image}
          source={{uri: `${photo.urls.raw}`}}
          resizeMode="cover"
        />
      </View>
      <ButtonsFooter photo={photo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
