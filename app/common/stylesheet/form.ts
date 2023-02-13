import {Colors} from './colors';
import {Fonts} from './fonts';

export default Object.freeze({
  radio: {
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
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
      marginRight: 6,
      alignItems: 'center',
      justifyContent: 'center',
    },
    error: {
      height: 20,
      width: 20,
      borderWidth: 2,
      borderColor: Colors.primary,
      borderRadius: 50,
      marginRight: 6,
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
  },
});
