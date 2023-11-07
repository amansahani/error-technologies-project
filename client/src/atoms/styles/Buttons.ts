import { StyleSheet } from "react-native";

const styles = (textColor : string, bgColor : string) => StyleSheet.create({
    button:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        height: 50,
        backgroundColor: bgColor,
        borderRadius : 34,

    },
    buttonText:{
        color: textColor,
        fontFamily: "Inter",
        fontSize: 17,
        fontWeight: "bold",
        lineHeight: 22,

    },
    buttonAlign:{
        marginTop : 10,
        alignItems: 'center'
      },

 
});

export default styles;