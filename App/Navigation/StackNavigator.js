import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {StatusBar} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Welcome from '../Screens/Welcome';
import SignUp from '../Screens/Auth/Signup';
import Login from '../Screens/Auth/Login';
import Otp from '../Screens/Otp/Otp';
import Home from '../Screens/Home/Home';
import Search from '../Screens/Search/Search';
import Loader from '../Screens/Loader/Loader';
import MessageScreen from '../Screens/MessageScreen/MessageScreen';

const StackComponent = createNativeStackNavigator();
const StackNavigator = () => {
  const theme = useTheme();

  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.card}
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
      />
      <StackComponent.Navigator
        initialRouteName={'Welcome'}
        detachInactiveScreens={true}r
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: 'transparent'},
        }}>
        <StackComponent.Screen name={'Loader'} component={Loader} />
        <StackComponent.Screen name={'Welcome'} component={Welcome} />
        <StackComponent.Screen name={'Home'} component={Home} />
        <StackComponent.Screen name={'Search'} component={Search} />
        <StackComponent.Screen name={'Signup'} component={SignUp} />
        <StackComponent.Screen name={'Login'} component={Login} />
        <StackComponent.Screen name={'Otp'} component={Otp} />
        <StackComponent.Screen
          name={'MessageScreen'}
          component={MessageScreen}
        />
      </StackComponent.Navigator>
    </>
  );
};
export default StackNavigator;
