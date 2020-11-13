# react-native-cryptos-picker

**Various cryptos picker** for **iOS** and **Android**

## Demo

![gif](https://github.com/alien9996/ReactNativeImageFilter/blob/master/filter.gif?raw=true)

## Getting started

`$ npm install react-native-cryptos-picker --save`
<br>
OR
<br>
`$ yarn add react-native-cryptos-picker`

## Example

```javascript
import CryptosPicker from "react-native-cryptos-picker";

let cryptosPickerRef = undefined;

// use cryptosPickerRef
cryptosPickerRef.open();
cryptosPickerRef.close();

<CryptosPicker
    cryptosPickerRef={(ref) => {
      cryptosPickerRef = ref;
    }}
    enable={true}
    darkMode={false}
    cryptoSymbol={"USDT"}
    showFlag={true}
    showCryptoName={true}
    showCryptoSymbol={true}
    onSelectCryptos={(data) => {
      console.log("DATA", data);
    }}
    onOpen={() => {
      console.log("Open");
    }}
    onClose={() => {
      console.log("Close");
    }}
    containerStyle={{
      container: {},
      flagWidth: 25,
      cryptoSymbolStyle: {},
      cryptoNameStyle: {}
    }}
    modalStyle={{
      container: {},
      searchStyle: {},
      tileStyle: {},
      itemStyle: {
        itemContainer: {},
        flagWidth: 25,
        cryptoSymbolStyle: {},
        cryptoNameStyle: {}
      },
    }}
    title={"Cryptos"}
    searchPlaceholder={"Search"}
    showCloseButton={true}
    showModalTitle={true}
  />
);
```

## Options

| Props                       | Default   | Options/Info                                                                             |
| --------------------------- | --------- | ---------------------------------------------------------------------------------------- |
| enable (Boolean)            | true      | Show component that choose the cryptos.                                                  |
| cryptosPickerRef (Function) | null      | Get the open() and close() modal methods.                                                |
| darkMode (Boolean)          | true      | Dark mode for cryptos modal.                                                             |
| countryCode (String)        | US        | Country code displayed is selected at start.                                             |
| onSelectCryptos (Function)  | null      | Called when the user chooses a crypto and returns information for the selected crypto. |
| onOpen (Function)           | null      | Called when the open modal.                                                              |
| onClose (Function)          | null      | Called when the close modal.                                                             |
| showFlag (Boolean)          | true      | Show the icon of the crypto.                                                    |
| showCryptoName (Boolean)    | true      | Show the name of the crypto.                                                            |
| showCryptoSymbol (Boolean)  | true      | Show the symbol of the crypto.                                                            |
| title (String)              | "Country" | The title of the modal select cryptos.                                                   |
| showCloseButton (Boolean)   | true      | Show the close button of the modal select cryptos.                                       |
| showModalTitle (Boolean)    | true      | Show the title of the modal select cryptos.                                              |
| containerStyle (Object)     | null      | Style for component that choose the cryptos. <br> **Note**: See more details below.      |
| modalStyle (Object)         | null      | Style for modal select cryptos. <br> **Note**: See more details below.                   |
| renderChildren (Component)  | null      | The child component replaces the component element of the library                        |

## containerStyle

| Props                     | Default | Options/Info                   |
| ------------------------- | ------- | ------------------------------ |
| container (Object)        | style   | Style for component container. |
| flagWidth (number)        | 25      | width for the icon crypto.     |
| cryptoSymbolStyle (Object)| style   | Style for cryptos symbol.      |
| cryptoNameStyle (Object)  | style   | Style for cryptos name.        |

## modalStyle

| Props                | Default | Options/Info                                                         |
| -------------------- | ------- | -------------------------------------------------------------------- |
| container (Object)   | style   | Style for modal container                                            |
| searchStyle (Object) | style   | Style for modal search input                                         |
| tileStyle (Object)   | style   | Style for modal title                                                |
| itemStyle (Object)   | style   | Style for item select cryptos <br> **Note**: See more details below. |

## itemStyle

| Props                     | Default | Options/Info                     |
| ------------------------- | ------- | -------------------------------- |
| itemContainer (Object)    | style   | Style for item crypto container |
| flagWidth (number)        | 25      | width for the icon crypto.       |
| cryptoSymbolStyle (Object)| style   | Style for crypto symbol.         |
| cryptoNameStyle (Object)  | style   | Style for crypto name.          |

### Thank you for your interest!
