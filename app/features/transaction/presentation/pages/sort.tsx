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
import {Colors} from '../../../../common/stylesheet/colors';
import {Fonts} from '../../../../common/stylesheet/fonts';

interface Props {
  onSort: (field: string, type: string) => void;
}

export function Sort({onSort}: Props): JSX.Element {
  const [isShow, showPan] = useState(false);
  const [sortField, setSortField] = useState('id');
  const [sortType, setSortType] = useState('ASC');

  const setSort = (field: string, type: string) => {
    showPan(false);
    setSortField(field);
    setSortType(type);
    onSort(field, type);
  };

  const renderItem: ListRenderItem<any> = ({item}) => (
    <TouchableOpacity onPress={() => setSort(item.field, item.type)}>
      {item.field == sortField && item.type == sortType ? (
        <Text style={styles.optionSelected}>{item.label}</Text>
      ) : (
        <Text style={styles.option}>{item.label}</Text>
      )}
    </TouchableOpacity>
  );

  const options = [
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
    <>
      <Modal
        animationType="slide"
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
              {/* <Button
                theme="cancel"
                text="BATAL"
                onPress={() => showPan(false)}
                style={{marginTop: 12}}
              /> */}
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
      <TouchableWithoutFeedback onPress={() => showPan(true)}>
        <View style={styles.sortButton}>
          <Text style={styles.buttonText}>URUTKAN</Text>
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
    // flex: 1,
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
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  pan: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: '#F6F6F6',
    width: '100%',
  },
  option: {
    textAlign: 'center',
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: Colors.black,
    marginBottom: 24,
  },
  optionSelected: {
    textAlign: 'center',
    fontFamily: Fonts.bold,
    fontSize: 12,
    color: Colors.black,
    marginBottom: 24,
  },
});
