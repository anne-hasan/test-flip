import React from 'react';
import {
  FlatList,
  ListRenderItem,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {Transaction} from '../../data/Transaction';
import {Item, ListSeparator} from './list_item';
import {Searchbar} from './searchbar';

function getListData() {}

const renderItem: ListRenderItem<Transaction> = ({item}) => (
  <Item data={item} />
);

function TransactionPage(): JSX.Element {
  const listData = [
    {
      id: 'FT57863',
      amount: 1021466,
      uniqueCode: 469,
      status: 'SUCCESS',
      statusDesc: 'Berhasil',
      senderBank: 'bni',
      accountNumber: '9631095936',
      beneficiaryName: 'Sufyan Kramer',
      beneficiaryBank: 'mandiri',
      remark: 'sample remark',
      createdAt: '2023-02-12 13:34:17',
      completedAt: '2023-02-12 13:34:17',
      fee: 0,
    },
    {
      id: 'FT6781',
      amount: 3619162,
      uniqueCode: 564,
      status: 'PENDING',
      statusDesc: 'Pengecekan',
      senderBank: 'bni',
      accountNumber: '4959779175',
      beneficiaryName: 'Jethro Cox',
      beneficiaryBank: 'mandiri',
      remark: 'sample remark',
      createdAt: '2023-02-12 13:32:17',
      completedAt: '2023-02-12 13:34:17',
      fee: 0,
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Searchbar onSubmit={q => console.log(q)} />
      <FlatList
        data={listData}
        keyExtractor={(item, index) => String(index)}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => getListData()}
            title="Pull to refresh"
            colors={['#f86940']}
          />
        }
        ItemSeparatorComponent={() => <ListSeparator />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f9f8',
    padding: 8,
  },
});

export default TransactionPage;
