import { Text, View } from "react-native";
import { styles } from "./styles";
import { stylesApp } from "../../styles/app.styles";
import FastImage from "react-native-fast-image";
import React from "react";

const ImageDetail = ({route}) => {
  const {image} = route.params;

  return (
    <View style={stylesApp.viewContainer}>
      {/* image */}
      <FastImage style={styles.imgMain} source={{uri: image.download_url}} />

      {/* image info */}
      <View style={styles.viewInfo}>
        <Text style={styles.txtInfo}>Author: {image.author}</Text>
        <Text style={styles.txtInfo}>Size: {image.width} x {image.height}</Text>
        <Text style={styles.txtInfo}>Url: {image.url}</Text>
        <Text style={styles.txtInfo}>Download Url: {image.download_url}</Text>
      </View>
    </View>
  );
};

export default ImageDetail;
