import React from 'react';
import { TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import FastImage from 'react-native-fast-image';
import { stylesApp } from "../../styles/app.styles";

const ImageItem = ({image, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={stylesApp.flex1}
      onPress={onPress}>
      <View style={styles.viewContainer}>
        <FastImage style={styles.imgMain} source={{uri: image.download_url}} />
      </View>
    </TouchableOpacity>
  );
};

export default ImageItem;
