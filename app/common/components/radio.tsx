import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {Colors} from '../stylesheet/colors';
import {Fonts} from '../stylesheet/fonts';

interface Props {
  label: string;
  checked: boolean;
  onChecked: (status: boolean) => void;
}

export function Radio({label, checked, onChecked}: Props): JSX.Element {
  const [isChecked, setIsChecked] = useState(checked ? checked : false);
  const check = () => {
    setIsChecked(previousState => !previousState);
    onChecked(isChecked);
  };

  return (
    <TouchableWithoutFeedback onPress={check}>
      <View style={styles.container}>
        {checked ? (
          <View style={styles.default}>
            <View style={styles.active} />
          </View>
        ) : (
          <View style={styles.default} />
        )}
        <View style={{justifyContent: 'center'}}>
          <Text style={styles.label}>{label}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 12.7,
  },
  label: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.black,
  },
  default: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 50,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    height: 10,
    width: 10,
    borderWidth: 2,
    borderColor: Colors.primary,
    backgroundColor: Colors.primary,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
