import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Modal } from 'react-native';
import { Styles } from '../styles';
import data from "../constants/cryptos.json";
import { DialogCryptos } from '../components';
import { CryptosIcon } from "../components/CryptosIcon";

export const CryptosPicker = (props) => {

    const [currencyName, setCurrencyName] = useState("");
    const [icon, setIcon] = useState("");
    const [symbol, setSymbol] = useState("");
    const [visible, setVisible] = useState(false);

    const {
        onSelectCryptos,
        cryptoSymbol,
        showFlag = true,
        showCryptoName = true,
        darkMode = true,
        renderChildren,
        showCurrencySymbol = true,

        cryptosPickerRef,
        enable = true,
        onOpen,
        onClose,

        containerStyle = {},
        modalStyle = {},

        title,
        searchPlaceholder,
        textEmpty,
        showCloseButton = true,
        showModalTitle = true,
    } = props;

    const { container, flagWidth = 25, cryptoCodeStyle, cryptoNameStyle } = containerStyle;

    useEffect(() => {
        let crypto = undefined;
        cryptosPickerRef && cryptosPickerRef(currencyRef);

        if (cryptoSymbol) {
            crypto = data.filter(item => item.code === cryptoSymbol)[0];
        } else {
            crypto = data.filter(item => item.code === "USDT")[0];
        }

        if (crypto) {
            const { icon, symbol, name } = crypto;
            setCurrencyName(name);
            setIcon(icon);
            setSymbol(symbol)
        }
    }, [props]);

    const currencyRef = {
        open: () => {
            setVisible(true);
            onOpen && onOpen();
        },
        close: () => {
            setVisible(false);
            onClose && onClose();
        }
    }

    const onSelect = (data) => {
        const { icon, symbol, name } = data;
        onSelectCryptos && onSelectCryptos(data);
        setCurrencyName(name);
        setIcon(icon);
        setSymbol(symbol);
    }

    return (
        <View>
            {enable ? <TouchableOpacity
                onPress={() => { setVisible(true); onOpen && onOpen() }}
                style={[Styles.justifyContent, container]}
            >
                {renderChildren ? renderChildren : <View style={{ flexDirection: "row" }}>
                    {showFlag && <CryptosIcon icon={icon} width={flagWidth} />}
                    {showCurrencySymbol && <Text style={[styles.txtCurrencyCode, cryptoCodeStyle]}>{symbol}</Text>}
                    {showCryptoName && <Text style={[styles.txtCountryName, cryptoNameStyle]}>{currencyName}</Text>}
                </View>}
            </TouchableOpacity> : null}
            <Modal
                visible={visible}
            >
                <DialogCryptos
                    onSelectItem={(data) => { onSelect(data) }}
                    setVisible={(value) => { setVisible(value); onClose && onClose(); }}
                    title={title}
                    searchPlaceholder={searchPlaceholder}
                    textEmpty={textEmpty}
                    darkMode={darkMode}
                    modalStyle={modalStyle}
                    showCloseButton={showCloseButton}
                    showModalTitle={showModalTitle}
                />
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    txtCountryName: {
        ...Styles.fontDefault,
        marginLeft: 10
    },
    txtCurrencyCode: {
        ...Styles.fontDefault,
        marginLeft: 10,
        fontWeight: "600"
    }
});
