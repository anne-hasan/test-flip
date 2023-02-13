/**
 * @file Default screen navigation header component
 * @version 0.0.2
 * @author Anne Hasan <lutfiane.fadila@gmail.com>
 */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';

import {Colors} from '../stylesheet/colors';
import {Fonts} from '../stylesheet/fonts';
const WINDOW_WIDTH = Dimensions.get('window').width;

type Props = {
  title: string;
  useLeftElement: boolean;
  onLeftElementPress: () => void;
};

export function Navbar({
  title,
  useLeftElement,
  onLeftElementPress,
}: Props): JSX.Element {
  return (
    <SafeAreaView style={styles.navbar}>
      <View style={styles.navbarContent}>
        <TouchableOpacity
          onPress={() => (onLeftElementPress ? onLeftElementPress() : {})}
          style={styles.navbarLeftBtn}>
          {useLeftElement ? (
            <Image
              source={require('../../../assets/icons/arrow-left.png')}
              style={styles.navbarIcon}
              resizeMode="contain"
            />
          ) : null}
        </TouchableOpacity>
        <View style={styles.navbarTitleContainer}>
          <Text style={styles.navbarTitle}>{title}</Text>
        </View>

        <TouchableOpacity onPress={() => {}} style={styles.navbarRightBtn} />
      </View>
    </SafeAreaView>
  );
}
export default Navbar;

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: Colors.primary,
    height: 60,
    elevation: 5,
    paddingRight: 24,
    paddingLeft: 10,
    paddingVertical: 10,
  },
  navbarContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  navbarLeftBtn: {
    width: WINDOW_WIDTH / 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbarRightBtn: {
    width: WINDOW_WIDTH / 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbarTitleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  navbarTitle: {
    color: Colors.white,
    fontSize: 16,
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: Fonts.bold,
  },
  navbarIcon: {
    tintColor: Colors.white,
    height: 18,
  },
});
