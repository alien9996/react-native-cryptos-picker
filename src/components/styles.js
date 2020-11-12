import { StyleSheet, Platform } from 'react-native';
import { Styles, ColorDarkMode, ColorLightMode } from "../styles";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const getStyles = (darkTheme = true) => {

    const Colors = darkTheme ? ColorDarkMode : ColorLightMode;

    const marginBottomByPlatform = Platform.OS === "ios" ? 5 : 0;

    const styles = StyleSheet.create({
        container: {
            paddingTop: getStatusBarHeight(),
            backgroundColor: Colors.backgroundModal,
            height: Styles.window.height
        },
        listContainer: {
            backgroundColor: Colors.backgroundModal,
        },
        title: {
            fontSize: 18,
            color: Colors.txtTitleModal,
            fontWeight: "700"
        },
        item: {
            flexDirection: "row",
            paddingVertical: 15,
            alignItems: "center",
            paddingHorizontal: 25
        },
        cryptosName: {
            color: Colors.txtCryptoName,
            fontWeight: "bold",
            textAlign: "left",
            width: 100,
            fontSize: 16,
            marginBottom: marginBottomByPlatform
        },
        commonName: {
            color: Colors.txtCryptoName,
            marginBottom: marginBottomByPlatform,
            marginHorizontal: 20,
            fontSize: 14
        },
        search: {
            ...Styles.justifyCenter,
            height: 40,
            paddingHorizontal: 20,
        },
        textInputContainer: {
            borderRadius: 7,
            backgroundColor: Colors.backgroundInput,
            flex: 1,
            justifyContent: "center",
        },
        textTitleSmallerWhite: {
            fontSize: 16,
            fontWeight: "500",
            color: Colors.txtTitleModal
        },
        textInput: {
            padding: 10,
            flex: 1
        },
        searchClose: {
            alignItems: "flex-end",
            marginLeft: 10
        },
        listNullContainer: {
            ...Styles.center,
            marginTop: 50
        },
        header: {
            ...Styles.justifyContent,
            alignItems: "center",
            marginBottom: 10,
            marginHorizontal: 20
        },
        titleModal: {
            fontSize: 24,
            fontWeight: "600",
            color: Colors.txtTitleModal,
        },
        btnClose: {
            color: Colors.txtTitleModal,
            fontSize: 20,
            fontWeight: "600"
        },
        txtEmpty: {
            color: Colors.txtCryptoCode,
            fontSize: 16,
            fontWeight: "500"
        },
        flag: {
            fontSize: Platform.OS === 'ios' ? 28 : 20,
            lineHeight: 30,
            color: Colors.flagColor
        }
    });

    return styles;
}