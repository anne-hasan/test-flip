import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ListRenderItem,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {Transaction} from '../../data/Transaction';
import {Item, ListSeparator} from '../components/list_item';
import {Searchbar} from '../../../../common/components/searchbar';
import {Sort} from '../../../../common/components/sort';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParams} from '../../../../common/helpers/navigation';
import {Loader} from '../../../../common/components/loader';

type Props = NativeStackScreenProps<StackParams, 'Transaction'>;
function TransactionPage({navigation}: Props): JSX.Element {
  const [isLoading, setLoading] = useState(false);
  const [listData, setListData] = useState<Transaction[] | null | undefined>(
    null,
  );
  const [originListData, setOriginListData] = useState<Transaction[] | null>(
    null,
  );

  useEffect(() => {
    getListData();
  }, [setListData]);

  function getListData() {
    setLoading(true);
    fetch('https://recruitment-test.flip.id/frontend-test')
      .then(response => response.json())
      .then(data => {
        let list: Transaction[] = [];
        for (var item in data) {
          list.push(
            new Transaction(
              data[item].id,
              data[item].amount,
              data[item].unique_code,
              data[item].status,
              data[item].sender_bank,
              data[item].account_number,
              data[item].beneficiary_name,
              data[item].beneficiary_bank,
              data[item].remark,
              data[item].created_at,
              data[item].completed_at,
              data[item].fee,
            ),
          );
        }
        setListData(list);
        setOriginListData(list);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      });
  }
  function sortListData(field?: string, type?: string) {
    setLoading(true);
    if (field == null && type == null) {
      setListData(originListData);
    } else {
      setListData(prevState => {
        return prevState?.sort((a, b) => {
          if (field == 'beneficiaryName') {
            if (
              a.beneficiaryName.toLowerCase() > b.beneficiaryName.toLowerCase()
            ) {
              return type == 'ASC' ? 1 : -1;
            }
            if (
              a.beneficiaryName.toLowerCase() < b.beneficiaryName.toLowerCase()
            ) {
              return type == 'ASC' ? -1 : 1;
            }
          } else if (field == 'createdAt') {
            if (a.createdAt > b.createdAt) {
              return type == 'ASC' ? 1 : -1;
            }
            if (a.createdAt < b.createdAt) {
              return type == 'ASC' ? -1 : 1;
            }
          }
          return 0;
        });
      });
    }

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }
  function filterListData(keyword: string) {
    let q = keyword.toLowerCase();
    if (q == '') {
      setListData(originListData);
    } else {
      let filteredList: Transaction[] = [];
      originListData?.map(item => {
        if (
          item.beneficiaryName.toLowerCase().indexOf(q) > -1 ||
          item.beneficiaryBank.toLowerCase().indexOf(q) > -1 ||
          item.senderBank.toLowerCase().indexOf(q) > -1 ||
          item.amount.toString().indexOf(q) > -1
        ) {
          filteredList.push(item);
        }
      });
      setListData(filteredList);
    }
  }

  const sortOptions = [
    {
      field: null,
      label: 'URUTKAN',
      type: null,
    },
    {
      field: 'beneficiaryName',
      label: 'Nama A-Z',
      type: 'ASC',
    },
    {
      field: 'beneficiaryName',
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

  const renderItem: ListRenderItem<Transaction> = ({item}) => (
    <Item
      data={item}
      onPress={() =>
        navigation.navigate('DetailTransaction', {
          data: item,
        })
      }
    />
  );

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
      {isLoading ? (
        <Loader />
      ) : (
        <FlatList
          data={listData}
          extraData={listData}
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
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9f8',
    padding: 8,
  },
});

export default TransactionPage;
