import React, {useState} from 'react';
import {
  Text,
  View,
  Modal,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  ListRenderItem,
} from 'react-native';
import {Colors} from '../stylesheet/colors';
import {Fonts} from '../stylesheet/fonts';
import {Radio} from './Radio';

interface Props {
  onSort: (field: string, type: string) => void;
  options: any;
}

export function Sort({onSort, options}: Props): JSX.Element {
  const [isShow, showPan] = useState(false);
  const [selectedOption, selectOption] = useState(0);

  const setSort = (optionIndex: number) => {
    showPan(false);
    let sortBy = options[optionIndex];
    selectOption(optionIndex);
    onSort(sortBy.field, sortBy.type);
  };

  const renderItem: ListRenderItem<any> = ({item, index}) => (
    <TouchableOpacity onPress={() => setSort(index)}>
      <Radio
        label={item.label}
        checked={index == selectedOption}
        onChecked={() => {}}
      />
    </TouchableOpacity>
  );

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isShow}
        onRequestClose={() => showPan(false)}>
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => showPan(false)}>
          <TouchableWithoutFeedback>
            <View style={styles.pan}>
              <FlatList
                data={options}
                keyExtractor={(item, index) => String(index)}
                renderItem={renderItem}
              />
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
      <TouchableWithoutFeedback onPress={() => showPan(true)}>
        <View style={styles.sortButton}>
          <Text style={styles.buttonText}>{options[selectedOption].label}</Text>
          <Image
            source={require('../../../../../assets/icons/chevron-down.png')}
            style={styles.iconSort}
            resizeMode="contain"
          />
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
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
  button: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    maxWidth: 135,
    minWidth: 135,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 10,
    fontFamily: Fonts.regular,
    color: '#7D7D7D',
  },
  label: {
    fontSize: 12,
    fontFamily: Fonts.bold,
    color: Colors.black,
    marginRight: 4,
  },
  chevron: {
    color: '#000',
    fontSize: 14,
  },
  modalOverlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  pan: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: '#F6F6F6',
    width: '80%',
    borderRadius: 5,
  },
});
