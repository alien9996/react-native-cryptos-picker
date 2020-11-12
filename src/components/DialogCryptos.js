import React, { useEffect, useState } from "react";
import {
    View,
    TouchableOpacity,
    StatusBar,
    FlatList,
    TextInput,
    Text
} from 'react-native';
import Fuse from 'fuse.js'
import { Colors } from "../styles";
import data from "../constants/CommonCurrency.json"
import { getStyles } from "./styles"
import { CryptosIcon } from "./CryptosIcon";

export const DialogCryptos = (props) => {

    const {
        onSelectItem,
        title = "Cryptos",
        searchPlaceholder = "Search",
        textEmpty = "Empty data",
        setVisible,
        darkMode = true,
        modalStyle,
        showCloseButton = true,
        showModalTitle = true,
    } = props;

    const [search, setSearch] = useState("");
    const [listCryptos, setListCryptos] = useState(data);

    const { itemStyle = {}, container, searchStyle, tileStyle } = modalStyle;

    const { itemContainer, flagWidth = 25, cryptoCodeStyle, cryptoNameStyle } = itemStyle;

    useEffect(() => {
        StatusBar.setHidden(true);
        return () => {
            setSearch("");
        };
    }, []);

    const styles = getStyles(darkMode);

    const options = Object.assign({
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: ['name', 'symbol'],
        id: 'id'
    });

    const fuse = new Fuse(
        data.reduce(
            (acc, item) => [
                ...acc,
                { id: item.symbol, name: item.name, symbol: item.symbol }
            ],
            []
        ),
        options
    );

    const onSelect = (item) => {
        setSearch("");
        handleFilterChange("");
        StatusBar.setHidden(false);
        if (onSelectItem) onSelectItem(item);
        setVisible(false)
    }

    const renderItemTemplate = ({ icon, symbol, name }) => {


        return (
            <View style={[styles.item, itemContainer]}>
                <CryptosIcon icon={icon} width={flagWidth} />
                <Text style={[styles.currencyName, cryptoCodeStyle]}>{symbol}</Text>
                <Text style={[styles.commonName, cryptoNameStyle]}>{name}</Text>
            </View>
        );
    }

    const renderItem = ({ item, index }) => {
        const isLastItem = listCryptos.length - 1 === index;
        return <TouchableOpacity style={{ marginBottom: isLastItem ? 150 : 0 }} onPress={() => onSelect(item)}>
            {renderItemTemplate(item)}
        </TouchableOpacity>
    }

    let _flatList = undefined;

    const handleFilterChange = (value) => {
        setSearch(value);

        let listDataFilter = [];
        if (value === "") {
            listDataFilter = data;
        } else {
            const filteredCryptos = fuse.search(value)
            if (_flatList) _flatList.scrollToOffset({ offset: 0 });
            filteredCryptos.forEach(n => {
                const item = data.filter(i => i.symbol === n.item.symbol.toString());
                if (item.length > 0) listDataFilter.push(item[0])

            })
        }
        setListCryptos(listDataFilter);
    }

    return (
        <View style={[styles.container, container]}>
            <View style={styles.header}>
                {showModalTitle && <Text style={[styles.titleModal, tileStyle]}>{title}</Text>}
                {showCloseButton && <TouchableOpacity
                    onPress={() => {
                        setVisible(false);
                        setSearch("");
                        handleFilterChange("");
                        StatusBar.setHidden(false);
                    }}
                    style={styles.searchClose}>
                    <Text style={styles.btnClose}>X</Text>
                </TouchableOpacity>}
            </View>
            <View style={styles.search}>
                <View style={[styles.textInputContainer, searchStyle]}>
                    <TextInput
                        autoFocus
                        onChangeText={(text) => handleFilterChange(text)}
                        value={search}
                        placeholder={searchPlaceholder}
                        placeholderTextColor={Colors.textFieldColor}
                        style={[styles.textTitleSmallerWhite, styles.textInput]}
                    />
                </View>
            </View>
            <View style={styles.listContainer}>
                <FlatList
                    keyboardShouldPersistTaps={'handled'}
                    ref={(ref) => _flatList = ref}
                    data={listCryptos}
                    renderItem={renderItem}
                    keyExtractor={item => item.code}
                    ListEmptyComponent={() => <View style={styles.listNullContainer}>
                        <Text style={styles.txtEmpty}>{textEmpty}</Text>
                    </View>} />
            </View>
        </View>
    );
}
