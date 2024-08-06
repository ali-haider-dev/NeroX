import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {IconButton} from 'react-native-paper';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS, FONTS} from '../../constants/theme';
import {useTheme} from '@react-navigation/native';
import themeContext from '../../constants/themeContext';

const filterTabs = ['product', 'BussinessProfile'];

const Search = ({navigation}) => {
  const [search, setSearch] = useState('');
  const {colors} = useTheme();
  const [activeTab, setActiveTab] = useState('product');

  console.log(search);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.card,
      }}>
      <View
        style={{
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderBottomColor: colors.borderColor,
        }}>
        <IconButton
          onPress={() => {}}
          size={24}
          icon={() => (
            <FeatherIcon color={colors.text} name="search" size={22} />
          )}
        />
        <TextInput
          style={{
            ...FONTS.font,
            flex: 1,
            color: colors.title,
          }}
          autoFocus={true}
          placeholder="Search here..."
          placeholderTextColor={colors.textLight}
          onChangeText={text => setSearch(text)}
        />
        {/* Scroll view */}
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingVertical: 10,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Items', {Value: search})}
          key={1}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 15,
            paddingVertical: 12,
          }}
          disabled={!search ? true : false}>
          <MaterialIcons
            size={22}
            color={colors.text}
            style={{
              marginRight: 12,
            }}
           
          />
          <Text
            numberOfLines={2}
            style={{
              ...FONTS.font,
              ...FONTS.fontTitle,
              color: colors.title,
              flex: 1,
              fontWeight:'600'
            }}>
            {search}
          </Text>
          <FeatherIcon
            style={{opacity: 0.6}}
            color={colors.text}
            size={20}
            name="arrow-up-left"
          />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
