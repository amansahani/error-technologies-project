import React, {FC, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  FlatList,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles/DropDown';
interface DropdownProps {
  label: string;
  data: {[key: string]: any};
  onSelect: (item: {label: string; value: string}) => void;
}

const Dropdown: FC<DropdownProps> = ({label, data, onSelect}) => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<
    {label: string; value: string} | undefined
  >(undefined);
  const DropdownButton = useRef<TouchableOpacity>(null);
  const [dropdownTop, setDropdownTop] = useState(0);

  const toggleDropdown = (): void => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = (): void => {
    if (DropdownButton.current) {
      DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
        setDropdownTop(py + h);
      });
    }
    setVisible(true);
  };

  const renderDropdown = (): React.ReactElement | null => {
    if (visible) {
      return (
        <Modal visible={visible} transparent animationType="fade">
          <TouchableOpacity
            style={styles.overlay}
            onPress={() => setVisible(false)}>
            <View style={[styles.dropdown, {top: dropdownTop}]}>
              <FlatList
                data={Object.keys(data).map(key => ({label: key, value: key}))}
                renderItem={renderItem}
                keyExtractor={item => item.value}
              />
            </View>
          </TouchableOpacity>
        </Modal>
      );
    }
    return null;
  };

  const renderItem = ({
    item,
  }: {
    item: {label: string; value: string};
  }): React.ReactElement => (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
      <Text style={{color: 'black', textAlign: 'center'}}>{item.label}</Text>
    </TouchableOpacity>
  );

  const onItemPress = (item: {label: string; value: string}): void => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  return (
    <TouchableOpacity
      ref={DropdownButton}
      style={styles.button}
      onPress={toggleDropdown}>
      {renderDropdown()}
      <Text style={styles.buttonText}>
        {(selected && selected.label) || label}
      </Text>
      <MaterialCommunityIcons
        name="chevron-down"
        color="#2b58bc"
        size={20}
        style={{marginRight: 20}}
      />
    </TouchableOpacity>
  );
};

export default Dropdown;
