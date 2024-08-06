import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CustomButton from '../../Components/CustomButton';
// import { ActivityIndicator } from 'react-native-paper';

const Otp = ({navigation, route}) => {
  const number = route.params.number;
  const OTP = '0000';
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const handleClick = () => {
    if (code !== OTP || code == undefined) {
      setError(true);
    } else {
      setError(false);
      setSpinner(true);
      setTimeout(() => {
        setSpinner(false);
        navigation.navigate('Home');
      }, 3000);
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : ''}
        style={{height: '100%', width: '100%', backgroundColor: '#fff'}}>
        <View style={{flex: 1, marginHorizontal: 20}}>
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
          <Text style={{fontSize: 0, marginVertical: 90, color: '#111'}}></Text>
          <View style={styles.TextContainer}>
            <Text style={styles.Text}>Code has been sent to</Text>
            <Text style={[styles.Text, {marginLeft: 5, fontWeight: '700'}]}>
              {number}
            </Text>
          </View>
          <View style={{width: '100%'}}>
            <OTPInputView
              style={{
                width: '100%',
                height: 100,
              }}
              onCodeChanged={code => {
                setCode(code);
              }}
              keyboardType="phone-pad"
              pinCount={4}
              autoFocusOnLoad={false}
              codeInputFieldStyle={{
                width: 50,
                height: 50,
                color: '#000',
                borderWidth: 1,
                borderColor: error ? 'red' : '#eee',
                borderBottomWidth: 1,
                borderRadius: 10,
              }}
              codeInputHighlightStyle={{
                borderColor: '#2ab12f',
              }}
            />
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
                  marginBottom: 30,
                }}>
                <Text
                  style={{
                    color: 'red',
                    alignSelf: 'stretch',
                    maxHeight: 40,
                  }}>
                  Invalid OTP code
                </Text>
              </View>
            )}
          </View>
          <Text style={styles.resend}>Resend code in 56s</Text>
          <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 40}}>
            <CustomButton
              title="Verify"
              color="#01222f"
              onPress={handleClick}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Otp;

const styles = StyleSheet.create({
  TextContainer: {
    flexDirection: 'row',
    marginBottom: 50,
  },
  Text: {
    fontSize: 16,
    marginVertical: 20,
    color: '#000',
  },
  resend: {
    fontSize: 16,
    marginVertical: 20,
    color: '#000',
    textAlign: 'center',
  },
});
