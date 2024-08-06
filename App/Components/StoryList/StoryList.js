import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IMAGES} from '../../constants/theme';

const stories = [
  {id: '1', uri: IMAGES.apple, name: 'Apple'},
  {id: '2', uri: IMAGES.facebook, name: 'Facebook'},
  {id: '3', uri: IMAGES.google, name: 'Google'},
  {id: '4', uri: IMAGES.apple, name: 'Apple'},
  {id: '5', uri: IMAGES.facebook, name: 'Facebook'},
  {id: '6', uri: IMAGES.google, name: 'Google'},
];

const StoryList = () => {
  return (
    <ScrollView
      style={styles.Container}
      showsHorizontalScrollIndicator={false}
      horizontal={true}>
      <View style={styles.StoryContainer}>
        {stories.map(({id, uri, name}) => (
          <TouchableOpacity style={styles.StoryProfile} key={id}>
            <Image style={styles.StoryProfileImage} source={uri} />
            <Text style={styles.text}>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default StoryList;

const styles = StyleSheet.create({
  StoryContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    paddingHorizontal: 8,
  },
  StoryProfile: {
    width: 70,
    height: 70,
    borderRadius: 80 / 2,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',

    marginRight: 5,
  },
  StoryProfileImage: {
    width: '100%',
    height: '100%',
   resizeMode:'cover'
  },
  text: {
    color: '#000',
    textAlign: 'center',
    marginTop: 5,
    fontWeight: '600',
  },
});
