import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    card: {
      backgroundColor: '#2b58bc',
      padding: 16,
      paddingRight: 0,
      borderRadius: 8,
      width: '100%',
      marginTop: 10
    },
    label: {
      fontSize: 14,
      fontWeight: '400',
      marginBottom: 10,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    rowItem: {
      marginRight: 20,
      marginVertical: 3
    },
    rowItemText: {
      fontSize: 16,
      color: 'white',
    },
    separator: {
      height: 1,
      backgroundColor: 'lightgray',
      marginVertical: 12,
      marginLeft:45,
      width: '87%',
      alignItems: 'flex-end'
    },
  });

  export default styles;
  