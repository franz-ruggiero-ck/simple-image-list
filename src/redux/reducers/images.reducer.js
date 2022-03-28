import { SET_IMAGES, SET_LOADING } from "../actions/action-types";

const initialState = {
  loading: false,
  images: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMAGES:
      return {...state, images: action.payload};

    case SET_LOADING:
      return {...state, loading: action.payload};

    default: {
      return state;
    }
  }
};

export default reducer;
