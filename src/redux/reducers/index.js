import {
  FETCH_USERS_ERROR,
  FETCH_USERS_LOADING,
  FETCH_USERS_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  users: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_LOADING:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload };
    case FETCH_USERS_ERROR:
      return { loading: false, users: [], error: action.payload };
    default:
      return state;
  }
};

export default reducer;
