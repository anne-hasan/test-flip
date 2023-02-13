import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {defaultHeader, Stack} from './app/common/helpers/navigation';

import TransactionPage from './app/features/transaction/presentation/pages';
import DetailTransactionPage from './app/features/transaction/presentation/pages/detail';

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={'#f86940'} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Transaksi"
            component={TransactionPage}
            options={{
              header: () =>
                defaultHeader({
                  title: 'List Transaction',
                  useLeftElement: false,
                }),
            }}
          />
          <Stack.Screen
            name="Detail Transaksi"
            component={DetailTransactionPage}
            options={{
              header: ({navigation}) =>
                defaultHeader({
                  title: 'Notifikasi',
                  useLeftElement: true,
                  leftPressEvent: () => navigation.goBack(),
                }),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
