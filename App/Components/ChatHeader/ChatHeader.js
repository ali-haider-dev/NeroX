import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation, useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {IconButton} from 'react-native-paper';

const ChatHeader = ({userName, onlineStatus, picture}) => {
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <View style={styles.ProfileOptions}>
        <TouchableOpacity
          style={{justifyContent: 'center'}}
          onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-left"
            color={'#000'}
            size={20}
            style={{marginLeft: 5, width: 25}}
          />
        </TouchableOpacity>
        <IconButton
          style={{width: 50, height: 50, borderRadius: 80 / 2}}
          icon={() => (
            <>
              <Image style={{height: '100%', width: '100%'}} source={picture} />
            </>
          )}
          onPress={() => console.log('presses')}
        />
        <View
          style={{
            backgroundColor: '#1fd655',
            width: 10,
            height: 10,
            position: 'absolute',
            bottom: 10,
            left: 72,
            borderRadius: 50,
          }}></View>
        <View style={styles.nameAndStatus}>
          <Text style={{color: '#000', fontSize: 20, fontWeight: '600'}}>
            {userName}
          </Text>
          <Text style={{color: 'grey'}}>
            {onlineStatus ? 'Active Now' : ''}
          </Text>
        </View>
      </View>
      <View style={styles.CallOptions}>
        <TouchableOpacity style={{justifyContent: 'center'}} onPress={() => {}}>
          <Icon
            name="phone"
            color={'#000'}
            size={25}
            style={{marginRight: 20,}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{justifyContent: 'center'}} onPress={() => {}}>
          <Icon
            name="video"
            color={'#000'}
            size={25}
            style={{marginRight: 5, width: 25}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 30,
    justifyContent:'space-between'
  },
  ProfileOptions: {
    flexDirection: 'row',
  },
  nameAndStatus: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  CallOptions:{
    flexDirection:'row',
    marginRight:20,
  }
});
