import * as actionTypes from "../actions/types";

const initialState = { tags: [] };

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_TAGS:
      return { ...state, tags: action.payload };
    case actionTypes.CREATE_NEW_TAG:
      return { ...state, tags: [...state.tags, action.payload] };
    default:
      return state;
  }
}
