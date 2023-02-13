import React from 'react';
import {StatusBar} from 'react-native';

import TransactionPage from './app/features/transaction/presentation/pages';
import DetailTransactionPage from './app/features/transaction/presentation/pages/detail';

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={'#f86940'} />
      <DetailTransactionPage />
    </>
  );
}

export default App;
