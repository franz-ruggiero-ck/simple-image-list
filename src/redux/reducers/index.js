import { combineReducers } from "redux";
import images from './images.reducer';

const reducer = combineReducers({
  images,
});

export default reducer;
