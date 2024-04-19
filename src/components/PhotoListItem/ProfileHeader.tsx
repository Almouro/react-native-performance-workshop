import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {User} from '../../data/model/photo.quicktype';

export const ProfileHeader = ({user}: {user: User}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{uri: user.profileImage.medium}} />
      <View style={{marginLeft: 8}}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>@{user.username}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
  },
  username: {
    fontSize: 12,
    color: '#808080',
  },
});
