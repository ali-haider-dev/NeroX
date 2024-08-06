import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomButton from '../../Components/CustomButton';
import {GlobalStyleSheet} from '../../constants/StyleSheet';
import {COLORS, FONTS, IMAGES} from '../../constants/theme';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {useTheme} from '@react-navigation/native';

import {useForm, Controller} from 'react-hook-form';
import {Checkbox, TextInput} from 'react-native-paper';

const Login = props => {
  const theme = useTheme();
  const {colors} = theme;

  const [Error, setError] = useState(
    'The Phone Number is not register in the system',
  );
  const [isFocused, setisFocused] = useState(false);
  const [isChecked, setisChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const {control, handleSubmit} = useForm();

  const handleClick = async data => {
    console.log('data>>', data);
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
                ...FONTS.h3,
                marginBottom: 6,
                color: colors.title,
                fontWeight: '600',
              }}>
              Sign in to your account
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
                        (Error && {
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
                  {Error && (
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
                        {Error}
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
            title="Sign In"
          />
          <View
            style={{
              flexDirection: 'row',
              marginTop: 12,
              justifyContent: 'center',
            }}>
            <Text style={{...FONTS.h6, color: colors.text, marginRight: 5}}>
              Don't have an account?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Signup')}
              disabled={loading}>
              <Text style={{...FONTS.h6, color: '#000'}}>Sign up</Text>
            </TouchableOpacity>
          </View>

          {/* <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 30,
              marginBottom: 20,
            }}
          >
            <View
              style={{
                height: 1,
                flex: 1,
                backgroundColor: colors.borderColor,
              }}
            />
            <Text
              style={{
                ...FONTS.font,
                color: colors.text,
                marginHorizontal: 15,
              }}
            >
              Or sign in with
            </Text>
            <View
              style={{
                height: 1,
                flex: 1,
                backgroundColor: colors.borderColor,
              }}
            />
          </View> */}

          {/* <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                height: 48,
                width: 48,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                borderRadius: 48,
                borderColor: colors.borderColor,
                marginHorizontal: 5,
              }}
            >
              <Image
                style={{
                  height: 20,
                  width: 20,
                }}
                source={IMAGES.google}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 48,
                width: 48,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                borderRadius: 48,
                borderColor: colors.borderColor,
                marginHorizontal: 5,
              }}
            >
              <Image
                style={{
                  height: 22,
                  width: 22,
                }}
                source={IMAGES.facebook}
              />
            </TouchableOpacity>
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
