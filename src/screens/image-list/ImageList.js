import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ImageItem from '../../components/ImageItem/ImageItem';
import {fetchAllImages} from '../../redux/actions/images.action';
import {stylesApp} from '../../styles/app.styles';
import { styles } from "./styles";
import { pages } from "../../constants/pages";

const ImageList = ({navigation}) => {
  const dispatch = useDispatch();
  const {images, loading} = useSelector(state => state.images);

  useEffect(() => {
    // load data when page startup
    loadData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const loadData = () => dispatch(fetchAllImages());

  const onPressItem = item => {
    navigation.push(pages.IMAGE_DETAIL, {image: item});
  };

  //
  // render
  //
  const emptyItem = () =>
    loading ? null : (
      <View style={stylesApp.viewLoading}>
        <Text style={stylesApp.txtEmptyItem}>No images available</Text>
      </View>
    );

  return (
    <FlatList
      contentContainerStyle={styles.contentList}
      numColumns={2}
      data={images}
      refreshing={loading}
      onRefresh={loadData}
      renderItem={({item}) => <ImageItem image={item} onPress={() => onPressItem(item)} />}
      ListEmptyComponent={emptyItem()}
    />
  );
};

export default ImageList;
