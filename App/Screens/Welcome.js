/* eslint-disable prettier/prettier */
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, IMAGES} from '../constants/theme';
import CustomButton from '../Components/CustomButton';
import Loader from './Loader/Loader';

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#22172c'}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
      
        <View style={styles.LogoContainer}>
          <Image style={styles.Logo} source={IMAGES.logo} />
        </View>
        <Text style={styles.TextLg}>Connect friends</Text>
        <Text style={[styles.TextLg, {fontWeight: '700', marginTop: -10}]}>
          easily & quickly
        </Text>
        <Text style={styles.TextSm}>
          Our chat app is the perfect way to stay connected with friends and
          family.
        </Text>
        <View style={styles.Socials}>
          <TouchableOpacity
            style={{
              borderColor: '#919795',
              borderWidth: 0.7,
              borderRadius: 80,
              marginHorizontal: 5,
            }}>
            <Image style={styles.Icons} source={IMAGES.facebook} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderColor: '#919795',
              borderWidth: 0.7,
              borderRadius: 80,
              marginHorizontal: 5,
            }}>
            <Image style={styles.Icons} source={IMAGES.google} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderColor: '#919795',
              borderWidth: 0.7,
              borderRadius: 80,
              marginHorizontal: 5,
            }}>
            <Image style={styles.Icons} source={IMAGES.apple} />
          </TouchableOpacity>
        </View>
        <View style={styles.break}>
          <View style={styles.line} />

          <Text style={{marginHorizontal: 10}}>OR</Text>
          <View style={styles.line} />
        </View>
        <View style={{width: '85%', marginLeft: 25}}>
          <CustomButton
            title="Sign up with phone"
            color="#fff"
            textColor="#000"
            onPress={() => navigation.navigate('Signup')}
          />
        </View>
        <View
          style={{
            marginTop: 45,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#919795'}}>Existing Account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{marginLeft: 5, color: '#fff'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  Logo: {
    width: 170,
    height: 54,
    resizeMode: 'contain',
  },
  LogoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  TextLg: {
    fontSize: 64,
    marginLeft: 10,
    color: '#fff',
  },
  TextSm: {
    maxWidth: 300,
    margin: 10,
    color: '#6A6E6C',
    fontSize: 20,
    lineHeight: 26,
  },
  Socials: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Icons: {
    width: 35,
    height: 35,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  break: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 25,
  },
  line: {
    width: '45%',
    backgroundColor: 'gray',
    height: 1,
    alignItems: 'center',
  },
});
