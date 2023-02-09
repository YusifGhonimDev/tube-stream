import {
  GET_VIDEOS,
  GET_VIDEOS_FAILED,
  GET_VIDEOS_LOADING,
  GET_VIDEO_DETAIL,
  GET_VIDEO_DETAIL_FAILED,
  GET_VIDEO_DETAIL_LOADING,
} from "../types";

const initialState = {
  videos: [],
  videoDetail: {},
  loading: false,
  error: "",
};

export const videoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_VIDEOS:
      return { ...state, videos: action.payload };
    case GET_VIDEOS_LOADING:
      return { ...state, loading: action.payload };
    case GET_VIDEOS_FAILED:
      return { ...state, error: action.payload };
    case GET_VIDEO_DETAIL:
      return { ...state, videoDetail: action.payload };
    case GET_VIDEO_DETAIL_LOADING:
      return { ...state, loading: action.payload };
    case GET_VIDEO_DETAIL_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
