/**
 * @file    Loading Animations
 * @version 0.0.2
 * @author  Anne Hasan <lutfiane.fadila@gmail.com>
 */
import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {Colors} from '../stylesheet/colors';

type Props = {
  color?: string;
};

export function Loader({color}: Props): JSX.Element {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color={color ? color : Colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
