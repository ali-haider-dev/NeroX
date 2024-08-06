import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {IconButton} from 'react-native-paper';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {GlobalStyleSheet} from '../../constants/StyleSheet';
import {COLORS, FONTS, IMAGES} from '../../constants/theme';
import DropShadow from 'react-native-drop-shadow';
import {SafeAreaView} from 'react-native-safe-area-context';
import StoryList from '../../Components/StoryList/StoryList';
const Home = ({navigation}) => {
  const theme = useTheme();
  const {colors} = theme;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.card}}>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.background,
        }}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: colors.background,
            justifyContent: 'space-between',
            height: 58,
            alignItems: 'center',
            margin: 10,
          }}>
          <TouchableOpacity style={{borderWidth: 1, borderRadius: 50}}>
            <IconButton
              icon={props => <FeatherIcon name="search" {...props} />}
              size={25}
              iconColor={colors.title}
              onPress={() => navigation.navigate('Search')}
            />
          </TouchableOpacity>

          <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>
            Home
          </Text>
          <IconButton
            icon={() => (
              <Image
                style={{height: 36, width: 36, borderRadius: 50}}
                source={IMAGES.facebook}
              />
            )}
            onPress={{}}
          />
        </View>
        <StoryList />
        <View
          style={[
            {
              backgroundColor: '#FFF',
              shadowColor: COLORS.secondary,
              flex: 17,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              paddingHorizontal: 10,
              paddingVertical: 20,
            },
            Platform.OS === 'ios' && {
              backgroundColor: colors.card,
            },
          ]}>
          <ScrollView>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}
              onPress={() =>
                navigation.navigate('MessageScreen', {
                  name: 'Ali haider',
                  onlineStatus: 'Online',
                  picture: IMAGES.facebook,
                })
              }>
              <View style={{flexDirection: 'row'}}>
                <IconButton
                  style={{width: 50, height: 50, borderRadius: 80 / 2}}
                  icon={() => (
                    <Image
                      style={{height: '100%', width: '100%'}}
                      source={IMAGES.facebook}
                    />
                  )}
                  onPress={() => console.log('presses')}
                />
                <View
                  style={{
                    backgroundColor: 'green',
                    width: 10,
                    height: 10,
                    position: 'absolute',
                    bottom: 10,
                    right: 123,
                    borderRadius: 50,
                  }}></View>
                <View style={{justifyContent: 'center', marginRight: 5}}>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 20,
                      lineHeight: 20,
                      fontWeight: '500',
                    }}>
                    Ali haider
                  </Text>
                  <Text style={{color: '#6A6A6A'}}> how are you man</Text>
                </View>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  marginRight: 5,
                }}>
                <Text style={{color: '#6A6A6A', marginRight: 5}}>8:29 pm</Text>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: 'red',
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 3,
                  }}>
                  <Text style={{textAlign: 'center'}}>3</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}
              onPress={() =>
                navigation.navigate('MessageScreen', {
                  name: 'Mark zuck',
                  onlineStatus: 'Online',
                  picture: IMAGES.facebook,
                })
              }>
              <View style={{flexDirection: 'row'}}>
                <IconButton
                  style={{width: 50, height: 50, borderRadius: 80 / 2}}
                  icon={() => (
                    <Image
                      style={{height: '100%', width: '100%'}}
                      source={IMAGES.facebook}
                    />
                  )}
                  onPress={() => console.log('presses')}
                />
                <View
                  style={{
                    backgroundColor: 'green',
                    width: 10,
                    height: 10,
                    position: 'absolute',
                    bottom: 10,
                    right: 123,
                    borderRadius: 50,
                  }}></View>

                <View style={{justifyContent: 'center', marginRight: 5}}>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 20,
                      lineHeight: 20,
                      fontWeight: '500',
                    }}>
                    Ali haider
                  </Text>
                  <Text style={{color: '#6A6A6A'}}> how are you man</Text>
                </View>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  marginRight: 5,
                }}>
                <Text style={{color: '#6A6A6A', marginRight: 5}}>8:29 pm</Text>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: 'red',
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 3,
                  }}>
                  <Text style={{textAlign: 'center'}}>3</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}
              onPress={() =>
                navigation.navigate('MessageScreen', {
                  name: 'Ali',
                  onlineStatus: 'Online',
                  picture: IMAGES.facebook,
                })
              }>
              <View style={{flexDirection: 'row'}}>
                <IconButton
                  style={{width: 50, height: 50, borderRadius: 80 / 2}}
                  icon={() => (
                    <Image
                      style={{height: '100%', width: '100%'}}
                      source={IMAGES.facebook}
                    />
                  )}
                  onPress={() => console.log('presses')}
                />
                <View
                  style={{
                    backgroundColor: 'green',
                    width: 10,
                    height: 10,
                    position: 'absolute',
                    bottom: 10,
                    right: 123,
                    borderRadius: 50,
                  }}></View>
                <View style={{justifyContent: 'center', marginRight: 5}}>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 20,
                      lineHeight: 20,
                      fontWeight: '500',
                    }}>
                    Ali haider
                  </Text>
                  <Text style={{color: '#6A6A6A'}}> how are you man</Text>
                </View>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  marginRight: 5,
                }}>
                <Text style={{color: '#6A6A6A', marginRight: 5}}>8:29 pm</Text>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: 'red',
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 3,
                  }}>
                  <Text style={{textAlign: 'center'}}>3</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}
              onPress={() =>
                navigation.navigate('MessageScreen', {
                  name: 'Ali',
                  onlineStatus: 'Online',
                  picture: IMAGES.facebook,
                })
              }>
              <View style={{flexDirection: 'row'}}>
                <IconButton
                  style={{width: 50, height: 50, borderRadius: 80 / 2}}
                  icon={() => (
                    <Image
                      style={{height: '100%', width: '100%'}}
                      source={IMAGES.facebook}
                    />
                  )}
                  onPress={() => console.log('presses')}
                />
                <View
                  style={{
                    backgroundColor: 'green',
                    width: 10,
                    height: 10,
                    position: 'absolute',
                    bottom: 10,
                    right: 123,
                    borderRadius: 50,
                  }}></View>
                <View style={{justifyContent: 'center', marginRight: 5}}>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 20,
                      lineHeight: 20,
                      fontWeight: '500',
                    }}>
                    Ali haider
                  </Text>
                  <Text style={{color: '#6A6A6A'}}> how are you man</Text>
                </View>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  marginRight: 5,
                }}>
                <Text style={{color: '#6A6A6A', marginRight: 5}}>8:29 pm</Text>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: 'red',
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 3,
                  }}>
                  <Text style={{textAlign: 'center'}}>3</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}
              onPress={() =>
                navigation.navigate('MessageScreen', {
                  name: 'Ali',
                  onlineStatus: 'Online',
                  picture: IMAGES.facebook,
                })
              }>
              <View style={{flexDirection: 'row'}}>
                <IconButton
                  style={{width: 50, height: 50, borderRadius: 80 / 2}}
                  icon={() => (
                    <Image
                      style={{height: '100%', width: '100%'}}
                      source={IMAGES.facebook}
                    />
                  )}
                  onPress={() => console.log('presses')}
                />
                <View
                  style={{
                    backgroundColor: 'green',
                    width: 10,
                    height: 10,
                    position: 'absolute',
                    bottom: 10,
                    right: 123,
                    borderRadius: 50,
                  }}></View>
                <View style={{justifyContent: 'center', marginRight: 5}}>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 20,
                      lineHeight: 20,
                      fontWeight: '500',
                    }}>
                    Ali haider
                  </Text>
                  <Text style={{color: '#6A6A6A'}}> how are you man</Text>
                </View>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  marginRight: 5,
                }}>
                <Text style={{color: '#6A6A6A', marginRight: 5}}>8:29 pm</Text>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: 'red',
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 3,
                  }}>
                  <Text style={{textAlign: 'center'}}>3</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}
              onPress={() =>
                navigation.navigate('MessageScreen', {
                  name: 'Ali',
                  onlineStatus: 'Online',
                  picture: IMAGES.facebook,
                })
              }>
              <View style={{flexDirection: 'row'}}>
                <IconButton
                  style={{width: 50, height: 50, borderRadius: 80 / 2}}
                  icon={() => (
                    <Image
                      style={{height: '100%', width: '100%'}}
                      source={IMAGES.facebook}
                    />
                  )}
                  onPress={() => console.log('presses')}
                />
                <View
                  style={{
                    backgroundColor: 'green',
                    width: 10,
                    height: 10,
                    position: 'absolute',
                    bottom: 10,
                    right: 123,
                    borderRadius: 50,
                  }}></View>
                <View style={{justifyContent: 'center', marginRight: 5}}>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 20,
                      lineHeight: 20,
                      fontWeight: '500',
                    }}>
                    Ali haider
                  </Text>
                  <Text style={{color: '#6A6A6A'}}> how are you man</Text>
                </View>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  marginRight: 5,
                }}>
                <Text style={{color: '#6A6A6A', marginRight: 5}}>8:29 pm</Text>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: 'red',
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 3,
                  }}>
                  <Text style={{textAlign: 'center'}}>3</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}
              onPress={() =>
                navigation.navigate('MessageScreen', {
                  name: 'Ali',
                  onlineStatus: 'Online',
                  picture: IMAGES.facebook,
                })
              }>
              <View style={{flexDirection: 'row'}}>
                <IconButton
                  style={{width: 50, height: 50, borderRadius: 80 / 2}}
                  icon={() => (
                    <Image
                      style={{height: '100%', width: '100%'}}
                      source={IMAGES.facebook}
                    />
                  )}
                  onPress={() => console.log('presses')}
                />
                <View
                  style={{
                    backgroundColor: 'green',
                    width: 10,
                    height: 10,
                    position: 'absolute',
                    bottom: 10,
                    right: 123,
                    borderRadius: 50,
                  }}></View>
                <View style={{justifyContent: 'center', marginRight: 5}}>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 20,
                      lineHeight: 20,
                      fontWeight: '500',
                    }}>
                    Ali haider
                  </Text>
                  <Text style={{color: '#6A6A6A'}}> how are you man</Text>
                </View>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  marginRight: 5,
                }}>
                <Text style={{color: '#6A6A6A', marginRight: 5}}>8:29 pm</Text>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: 'red',
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 3,
                  }}>
                  <Text style={{textAlign: 'center'}}>3</Text>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
