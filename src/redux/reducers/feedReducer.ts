import { FEED_FAILED, FEED_LOADING, SHOW_FEED } from "../types";

const initialState = {
  feed: [],
  feedLoading: false,
  error: "",
};

export const feedReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FEED_LOADING:
      return { ...state, feedLoading: action.payload };
    case FEED_FAILED:
      return { ...state, error: action.payload };
    case SHOW_FEED:
      return { ...state, feed: action.payload };
    default:
      return state;
  }
};
