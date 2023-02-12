import React from 'react';
import {StatusBar} from 'react-native';

import TransactionPage from './app/features/transaction/presentation/pages';

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={'#f86940'} />
      <TransactionPage />
    </>
  );
}

export default App;
