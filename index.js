import { CryptosPicker as CryptosPickerComponent } from "./src/screens"
import React from "react";

const DEFAULT_OPTIONS = {
    onSelectCountry: () => { },
    style: {},
    showFlag: true,
    darkMode: true
}

export default CryptosPicker = (props) => {

    const propsModel = {
        ...DEFAULT_OPTIONS,
        ...props
    }

    return (
        <CryptosPickerComponent {...propsModel} />
    );
}
