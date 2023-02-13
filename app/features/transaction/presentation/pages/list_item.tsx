import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {formatCurrency, formatDate} from '../../../../common/helpers/general';
import {Colors} from '../../../../common/stylesheet/colors';
import {Fonts} from '../../../../common/stylesheet/fonts';
import {Transaction} from '../../data/Transaction';

type Props = {
  data: Transaction;
  onPress: () => void;
};

export const Item = ({data, onPress}: Props) => (
  <TouchableOpacity style={styles.list} onPress={onPress}>
    <Indicator status={data.status} />
    <View style={styles.listBody}>
      <Text style={styles.bankInfo}>
        {data.senderBank.toUpperCase()} ➔ {data.beneficiaryBank.toUpperCase()}
      </Text>
      <Text style={styles.recipient}>{data.beneficiaryName.toUpperCase()}</Text>
      <Text style={styles.transactionInfo}>
        Rp {formatCurrency(data.amount)} • {formatDate(data.createdAt)}
      </Text>
    </View>
    <Label code={data.status} />
  </TouchableOpacity>
);

export const Indicator = ({status}: {status: string}) => {
  let indicatorStyle = [styles.indicator, {backgroundColor: Colors.grey}];
  switch (status) {
    case 'SUCCESS':
      indicatorStyle = [styles.indicator, {backgroundColor: Colors.green}];
      break;
    case 'PENDING':
      indicatorStyle = [styles.indicator, {backgroundColor: Colors.primary}];
      break;
    default:
      break;
  }

  return <View style={indicatorStyle} />;
};

export const Label = ({code}: {code: string}) => {
  let boxStyle = [
    styles.labelBox,
    {borderColor: Colors.grey, backgroundColor: Colors.grey},
  ];
  let textStyle = [styles.labelText, {color: Colors.white}];
  let text = '';
  switch (code) {
    case 'SUCCESS':
      boxStyle = [
        styles.labelBox,
        {borderColor: Colors.green, backgroundColor: Colors.green},
      ];
      textStyle = [styles.labelText, {color: Colors.white}];
      text = 'Berhasil';
      break;
    case 'PENDING':
      boxStyle = [
        styles.labelBox,
        {
          borderColor: Colors.primary,
          backgroundColor: Colors.white,
        },
      ];
      textStyle = [styles.labelText, {color: Colors.black}];
      text = 'Pengecekan';
      break;
    default:
      break;
  }

  return (
    <View style={boxStyle}>
      <Text style={textStyle}>{text}</Text>
    </View>
  );
};

export const ListSeparator = () => {
  return <View style={styles.listSeparator} />;
};

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  indicator: {
    width: 8,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    height: '100%',
  },
  listBody: {
    flexDirection: 'column',
    padding: 16,
    flex: 1,
  },
  bankInfo: {
    color: '#030303',
    fontFamily: Fonts.black,
    fontSize: 18,
    marginBottom: 8,
  },
  recipient: {
    color: '#030303',
    fontFamily: Fonts.bold,
    fontSize: 14,
    marginBottom: 8,
  },
  transactionInfo: {
    color: '#030303',
    fontFamily: Fonts.bold,
    fontSize: 14,
  },
  labelBox: {borderRadius: 5, borderWidth: 2, padding: 5, marginRight: 16},
  labelText: {fontFamily: Fonts.bold, fontSize: 14},
  listSeparator: {
    height: 8,
  },
});
