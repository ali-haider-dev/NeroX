import React, {useState} from 'react';
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
import FeatherIcon from 'react-native-vector-icons/Feather';
import Spinner from 'react-native-loading-spinner-overlay';
import {useTheme} from '@react-navigation/native';

import {useForm, Controller} from 'react-hook-form';
import {Checkbox, TextInput} from 'react-native-paper';

const SignUp = props => {
  const theme = useTheme();
  const {colors} = theme;
  const [phoneNumber, setPhoneNumber] = useState('');

  const [spinner, setSpinner] = useState(false);
  const [isChecked, setisChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const {control, handleSubmit, reset} = useForm();
  const phone_RegEX = /^(\+|0)[1-9][0-9 \-\(\)\.]{7,18}$/;
  const handleClick = async data => {
    console.log('data>>', data);
    setSpinner(true);
    setTimeout(() => {
      setSpinner(false);
      props.navigation.navigate('Otp', {number: data.phone});
      reset({keepErrors: true, keepDirty: true});
    }, 3000);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.card}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            ...GlobalStyleSheet.container,
            flex: 1,
            backgroundColor: colors.card,
          }}>
          <View style={{marginBottom: 30, alignItems: 'center', marginTop: 30}}>
            {spinner && (
              <Modal transparent={true}>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(100, 100, 100, 0.6)',
                  }}>
                  <ActivityIndicator
                    size="2xl"
                    color={'#000'}
                    style={{
                      padding: 25,
                      backgroundColor: '#FFF',
                      borderRadius: 12,
                    }}
                  />
                </View>
              </Modal>
            )}

            <Image
              style={{
                height: 300,
                width: 300,
                resizeMode: 'contain',
                marginBottom: 20,
              }}
              source={IMAGES.logo1}
            />
            <Text
              style={{
                ...FONTS.h2,
                marginBottom: 6,
                color: colors.title,
                fontWeight: '600',
              }}>
              Sign up for free
            </Text>
          </View>

          <View style={GlobalStyleSheet.inputGroup}>
            <Text
              style={[
                GlobalStyleSheet.label,
                {color: '#56616f', fontWeight: '600', fontSize: 16},
              ]}>
              Phone Number
            </Text>
            <Controller
              control={control}
              name="phone"
              rules={{
                required: 'phone number is required',
                pattern: {
                  value: phone_RegEX,
                  message: 'invalid phone number please check again',
                },
              }}
              render={({
                field: {value, onChange, onBlur},
                fieldState: {error},
              }) => (
                <>
                  <View>
                    <TextInput
                      left={<TextInput.Icon icon="phone" />}
                      underlineColor="transparent"
                      style={[
                        (error?.message && {
                          borderColor: 'red',
                          borderWidth: 1,
                          backgroundColor: colors.input,
                          color: colors.title,
                          borderRadius: 10,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        }) || {
                          backgroundColor: colors.input,
                          color: colors.title,
                          borderRadius: 10,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        },
                      ]}
                      placeholder="Phone Number"
                      keyboardType="name-phone-pad"
                      value={value}
                      autoCapitalize="none"
                      onChangeText={onChange}
                      onBlur={onBlur}
                      placeholderTextColor={colors.textLight}
                    />
                  </View>
                  {error && (
                    <View
                      style={{
                        color: 'red',
                        alignSelf: 'stretch',
                        backgroundColor: '#feefef',
                        maxHeight: 100,
                        marginTop: 8,
                        borderRadius: 30,
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                      }}>
                      <Text
                        style={{
                          color: 'red',
                          alignSelf: 'stretch',
                          maxHeight: 40,
                        }}>
                        {error.message || 'Error'}
                      </Text>
                    </View>
                  )}
                </>
              )}
            />
          </View>

          <View
            style={{
              marginBottom: 15,
            }}>
            <Checkbox.Item
              onPress={() => setisChecked(!isChecked)}
              position="leading"
              label="Remember me"
              color={COLORS.primary}
              uncheckedColor={colors.textLight}
              status={isChecked ? 'checked' : 'unchecked'}
              style={{
                paddingHorizontal: 0,
                paddingVertical: 5,
              }}
              labelStyle={{
                ...FONTS.font,
                color: colors.title,
                textAlign: 'left',
              }}
            />
          </View>
          <CustomButton
            onPress={handleSubmit(handleClick)}
            color={COLORS.secondary}
            title="Sign up"
          />
          <View
            style={{
              flexDirection: 'row',
              marginTop: 12,
              justifyContent: 'center',
            }}>
            <Text style={{...FONTS.h6, color: colors.text, marginRight: 5}}>
              Already have an account ?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}
              disabled={loading}>
              <Text style={{...FONTS.h6, color: '#000'}}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
