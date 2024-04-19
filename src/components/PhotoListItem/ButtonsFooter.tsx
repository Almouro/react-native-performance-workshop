import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Photo} from '../../data/model/photo.quicktype';
import {Button} from '../atoms/Button';

export const ButtonsFooter = ({photo}: {photo: Photo}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonGroup}>
        <Button onPress={() => {}}>
          <View style={styles.row}>
            <Icon name="favorite" size={24} color="red" />
            <Text style={styles.text}>{photo.likes.toString()}</Text>
          </View>
        </Button>
        <View style={{width: 8}} />
        <Button onPress={() => {}}>
          <Icon name="add" size={24} />
        </Button>
      </View>
      <Button onPress={() => {}}>
        <Icon name="share" size={24} />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  buttonGroup: {
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 4,
    fontSize: 14,
    color: '#808080', // Approximate for Colors.grey.shade600
  },
});
