import React from "react";
import { View } from 'react-native'
import AutoHeightImage from "react-native-auto-height-image";

export const CryptosIcon = (props) => {
    const { icon, flagWidth = 25 } = props;
    if (!icon) return <View style={{ width: 25 }} />;
    return <AutoHeightImage source={{ uri: `data:image/png;base64,${icon}` }} width={flagWidth} />
}