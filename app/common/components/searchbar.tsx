import React, {PropsWithChildren} from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import {Colors} from '../stylesheet/colors';
import {Fonts} from '../stylesheet/fonts';

type Props = PropsWithChildren<{
  placeholder: string;
  onSearch: (keyword: string) => void;
}>;

export function Searchbar({
  placeholder,
  onSearch,
  children,
}: Props): JSX.Element {
  return (
    <View style={styles.searchbar}>
      <Image
        source={require('../../../assets/icons/search.png')}
        style={styles.icon}
        resizeMode="contain"
      />
      <TextInput
        returnKeyLabel="search"
        onChangeText={q => onSearch(q)}
        style={styles.content}
        placeholder={placeholder}
        placeholderTextColor={Colors.grey}
        autoFocus={false}
      />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  searchbar: {
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    shadowColor: Colors.black,
    backgroundColor: Colors.white,
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * 1,
    marginBottom: 10,
    borderRadius: 10,
  },
  content: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    flex: 1,
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
  },
  icon: {
    height: 20,
    tintColor: Colors.grey,
  },
});
