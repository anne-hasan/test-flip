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
import {Searchbar} from '../../../../common/components/searchbar';
import {Sort} from '../../../../common/components/sort';

function getListData() {}
function sortListData(field: string, type: string) {}
function filterListData(keyword: string) {}

const renderItem: ListRenderItem<Transaction> = ({item}) => (
  <Item data={item} />
);

function TransactionPage({navigation}): JSX.Element {
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

  const sortOptions = [
    {
      field: 'id',
      label: 'URUTKAN',
      type: 'DESC',
    },
    {
      field: 'name',
      label: 'Nama A-Z',
      type: 'ASC',
    },
    {
      field: 'name',
      label: 'Nama Z-A',
      type: 'DESC',
    },
    {
      field: 'createdAt',
      label: 'Tanggal Terbaru',
      type: 'DESC',
    },
    {
      field: 'createdAt',
      label: 'Tanggal Terlama',
      type: 'ASC',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Searchbar
        placeholder="Cari nama, bank, atau nominal"
        onSearch={q => {
          filterListData(q);
        }}>
        <Sort
          options={sortOptions}
          onSort={(field: string, type: string) => {
            sortListData(field, type);
          }}
        />
      </Searchbar>
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
