import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Fonts} from '../../../../common/stylesheet/fonts';
import {Colors} from '../../../../common/stylesheet/colors';
import {formatCurrency, formatDate} from '../../../../common/helpers/general';
import {StackParams} from '../../../../common/helpers/navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Transaction} from '../../data/Transaction';

type Props = NativeStackScreenProps<StackParams, 'DetailTransaction'>;

function DetailTransactionPage({route}: Props): JSX.Element {
  const [data, setData] = useState<Transaction | null>(null);

  useEffect(() => {
    const {params} = route;
    if (params) {
      if (params.data) {
        setData(params.data);
      }
    }
  }, [route]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>ID TRANSAKSI: #{data?.id}</Text>
        <Image
          source={require('../../../../../assets/icons/copy.png')}
          style={styles.iconPaste}
          resizeMode="contain"
        />
      </View>
      <View style={styles.section}>
        <View style={{flex: 1}}>
          <Text style={styles.title}>DETAIL TRANSAKSI</Text>
        </View>
        <Text style={styles.buttonText}>Tutup</Text>
      </View>
      <View style={styles.detailSection}>
        <Text style={styles.detailTitle}>
          {data?.senderBank.toUpperCase()} ➔{' '}
          {data?.beneficiaryBank.toUpperCase()}
        </Text>
        <View style={styles.detailRow}>
          <View style={{flex: 2}}>
            <Text style={styles.title}>
              {data?.beneficiaryName.toUpperCase()}
            </Text>
            <Text style={styles.desc}>{data?.accountNumber}</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.title}>NOMINAL</Text>
            <Text style={styles.desc}>
              Rp {data?.amount ? formatCurrency(data?.amount) : '0'}
            </Text>
          </View>
        </View>
        <View style={styles.detailRow}>
          <View style={{flex: 2}}>
            <Text style={styles.title}>BERITA TRANSFER</Text>
            <Text style={styles.desc}>{data?.remark}</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.title}>KODE UNIK</Text>
            <Text style={styles.desc}>{data?.uniqueCode}</Text>
          </View>
        </View>
        <View style={[styles.detailRow, {marginBottom: 0}]}>
          <View style={{flex: 2}}>
            <Text style={styles.title}>WAKTU DIBUAT</Text>
            <Text style={styles.desc}>
              {data?.createdAt ? formatDate(data?.createdAt) : ''}
            </Text>
          </View>
          <View style={{flex: 1}} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f9f8',
    paddingVertical: 16,
  },
  section: {
    backgroundColor: Colors.white,
    padding: 20,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: Colors.lightGrey,
  },
  iconPaste: {
    height: 20,
    tintColor: Colors.primary,
  },
  title: {
    color: Colors.black,
    fontSize: 16,
    fontFamily: Fonts.bold,
  },
  detailSection: {
    backgroundColor: Colors.white,
    padding: 20,
    borderTopWidth: 1,
    borderColor: Colors.lightGrey2,
  },
  detailTitle: {
    color: Colors.black,
    fontSize: 18,
    fontFamily: Fonts.black,
    marginBottom: 20,
  },
  detailRow: {flexDirection: 'row', marginBottom: 20},
  desc: {
    color: Colors.black,
    fontSize: 16,
    fontFamily: Fonts.regular,
    marginTop: 8,
  },
  buttonText: {
    color: Colors.primary,
    fontSize: 16,
    fontFamily: Fonts.regular,
  },
});

export default DetailTransactionPage;
