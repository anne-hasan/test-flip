import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Transaction} from '../../features/transaction/data/Transaction';
import Navbar from '../components/navbar';
export {NavigationContainer};

// Header configurations
export const defaultHeader = (param: any) => {
  return (
    <Navbar
      title={param.title ? param.title : ''}
      useLeftElement={param.useLeftElement ? param.useLeftElement : ''}
      onLeftElementPress={param.leftPressEvent ? param.leftPressEvent : ''}
    />
  );
};

export type StackParams = {
  Transaction: undefined;
  DetailTransaction: {data: Transaction};
};

// React Navigation API functions
export const Stack = createNativeStackNavigator<StackParams>();
