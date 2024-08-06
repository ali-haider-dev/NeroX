import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View,
  Modal,
} from 'react-native';
import CustomButton from '../../Components/CustomButton';
import {GlobalStyleSheet} from '../../constants/StyleSheet';
import {COLORS, FONTS, IMAGES} from '../../constants/theme';
import {useTheme} from '@react-navigation/native';

import {Checkbox, TextInput} from 'react-native-paper';

const Loader = props => {
  const theme = useTheme();
  const {colors} = theme;

  const [spinner, setSpinner] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setSpinner(false);
        props.navigation.navigate('Welcome');
      }, 3000);
    }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#22172c'}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            ...GlobalStyleSheet.container,
            flex: 1,
            backgroundColor: colors.card,
            justifyContent: 'center',
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom:60
            }}>
            <Image
              style={{
                height: 300,
                width: 300,
                resizeMode: 'contain',
                marginBottom: 30,
              }}
              source={IMAGES.logo1}
            />

            {spinner && (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',

                  marginTop: 50,
                  marginBottom: -100,
                }}>
                <ActivityIndicator
                  size="2xl"
                  color={'#000'}
                  style={{
                    padding: 25,
                  }}
                />
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Loader;
