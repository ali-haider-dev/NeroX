import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ChatHeader from '../../Components/ChatHeader/ChatHeader';
import MessageList from '../../Components/MessageList/MessageList';
import ChatInput from '../../Components/ChatHeader/ChatInput';

const MessageScreen = ({navigation, route}) => {
  const {name,onlineStatus,picture} = route.params;
  return (
    <View style={{flex: 1}}>
      <ChatHeader userName={name} onlineStatus={onlineStatus} picture={picture} />
      <MessageList />
      <ChatInput />
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({});
