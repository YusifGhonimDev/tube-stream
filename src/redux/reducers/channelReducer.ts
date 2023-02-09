import {
  GET_CHANNEL_DETAIL,
  GET_CHANNEL_DETAIL_FAILED,
  GET_CHANNEL_DETAIL_LOADING,
  GET_CHANNEL_VIDEOS,
  GET_CHANNEL_VIDEOS_FAILED,
  GET_CHANNEL_VIDEOS_LOADING,
} from "../types";

const initialState = {
  channelVideos: [],
  channelDetail: {},
  loading: false,
  error: "",
};

export const channelReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_CHANNEL_VIDEOS:
      return { ...state, channelVideos: action.payload };
    case GET_CHANNEL_VIDEOS_LOADING:
      return { ...state, loading: action.payload };
    case GET_CHANNEL_VIDEOS_FAILED:
      return { ...state, error: action.payload };
    case GET_CHANNEL_DETAIL:
      return { ...state, channelDetail: action.payload };
    case GET_CHANNEL_DETAIL_LOADING:
      return { ...state, loading: action.payload };
    case GET_CHANNEL_DETAIL_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
