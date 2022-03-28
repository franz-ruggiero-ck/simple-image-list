import * as ApiService from '../../services/api.service';
import * as Storage from '../../helpers/storage.helper';
import { SET_IMAGES, SET_LOADING } from "./action-types";
import { KEY_IMAGES } from "./storage-keys";

export const fetchAllImages = () => {
  return dispatch => {
    // fetch images from local storage first
    Storage.load(KEY_IMAGES).then(images =>
      dispatch({type: SET_IMAGES, payload: images}),
    );

    // show loading
    dispatch({type: SET_LOADING, payload: true});
    return ApiService.getImages()
      .then(images => {
        // save to local storage
        Storage.save(KEY_IMAGES, images);

        // set images to reducer
        dispatch({type: SET_IMAGES, payload: images});
      })
      .finally(() => {
        // hide loading
        dispatch({type: SET_LOADING, payload: false});
      });
  };
};
