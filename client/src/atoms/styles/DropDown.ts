import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      height: 50,
      borderRadius: 10,
      shadowColor: 'gray',
      shadowRadius: 200,
      shadowOpacity: 0.3,
      elevation:1,
      width: '100%',
      zIndex: 1,
    },
    buttonText: {
      flex: 1,
      color: 'black',
      alignContent: 'flex-start',
      marginLeft: 20
    },
    dropdown: {
      position: 'absolute',
      backgroundColor: '#fff',
      width: '90%',
      marginHorizontal: '5%',
      shadowColor: '#000000',
      shadowRadius: 4,
      shadowOffset: { height: 4, width: 0 },
      shadowOpacity: 0.5,
    },
    item: {
      color: '#000000',
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderBottomWidth: 1,
    },
    overlay: {
      flex: 1,
    },
  });
  export default styles;