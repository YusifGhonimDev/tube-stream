import {
  SEARCH_VIDEOS,
  SEARCH_VIDEOS_FAILED,
  SEARCH_VIDEOS_LOADING,
} from "../types";

const initialState = {
  searchedVideos: [],
  searchLoading: false,
  error: "",
};

export const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SEARCH_VIDEOS_LOADING:
      return { ...state, searchLoading: action.payload };
    case SEARCH_VIDEOS_FAILED:
      return { ...state, error: action.payload };
    case SEARCH_VIDEOS:
      return { ...state, searchedVideos: action.payload };
    default:
      return state;
  }
};
