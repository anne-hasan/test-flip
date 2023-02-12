import React, {PropsWithChildren} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Colors} from '../../../../common/stylesheet/colors';
import {Fonts} from '../../../../common/stylesheet/fonts';

type Props = PropsWithChildren<{
  onSubmit: () => string;
}>;

export function Searchbar({
  onSubmit = (keyword: string) => keyword,
}: Props): JSX.Element {
  // export const Searchbar = ({code}: {code: string}) => {
  return (
    <View style={styles.searchbar}>
      <Image
        source={require('../../../../../assets/icons/search.png')}
        style={styles.icon}
        resizeMode="contain"
      />
      <TextInput
        returnKeyLabel="search"
        onChangeText={q => onSubmit(q)}
        style={styles.content}
        placeholder="Cari nama, bank, atau nominal"
        placeholderTextColor={Colors.grey}
        autoFocus={false}
        // value={this.state.q ? this.state.q : ''}
        // onSubmitEditing={() =>
        //   this.props.onSubmitEditing
        //     ? this.props.onSubmitEditing(this.state.q)
        //     : {}
        // }
      />
      <TouchableWithoutFeedback onPress={() => {}}>
        <View style={styles.sortButton}>
          <Text style={styles.buttonText}>URUTKAN</Text>
          <Image
            source={require('../../../../../assets/icons/chevron-down.png')}
            style={styles.iconSort}
            resizeMode="contain"
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  searchbar: {
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    shadowColor: Colors.black,
    backgroundColor: Colors.white,
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * 1,
    marginBottom: 10,
    borderRadius: 10,
  },
  content: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    flex: 1,
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
  },
  icon: {
    height: 20,
    tintColor: Colors.grey,
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSort: {
    height: 20,
    tintColor: Colors.primary,
  },
  buttonText: {
    fontFamily: Fonts.bold,
    fontSize: 14,
    color: Colors.primary,
  },
});
