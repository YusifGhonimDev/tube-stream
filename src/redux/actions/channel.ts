import { Dispatch } from "redux";
import { fetchFromAPI } from "../../utils/fetchFromAPI";
import {
  GET_CHANNEL_DETAIL,
  GET_CHANNEL_DETAIL_FAILED,
  GET_CHANNEL_DETAIL_LOADING,
  GET_CHANNEL_VIDEOS,
  GET_CHANNEL_VIDEOS_FAILED,
  GET_CHANNEL_VIDEOS_LOADING,
} from "../types";

export const getChannelDetail = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_CHANNEL_DETAIL_LOADING, payload: true });
    const response = await fetchFromAPI(`channels?part=snippet&id=${id}`);
    dispatch({ type: GET_CHANNEL_DETAIL, payload: response.items[0] });
  } catch (error) {
    dispatch({ type: GET_CHANNEL_DETAIL_FAILED, payload: error });
  } finally {
    dispatch({ type: GET_CHANNEL_DETAIL_LOADING, payload: false });
  }
};

export const getChannelVideos = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_CHANNEL_VIDEOS_LOADING, payload: true });
    const response = await fetchFromAPI(
      `search?channelId=${id}&part=snippet&order=date`
    );
    dispatch({ type: GET_CHANNEL_VIDEOS, payload: response.items });
  } catch (error) {
    dispatch({ type: GET_CHANNEL_VIDEOS_FAILED, payload: error });
  } finally {
    dispatch({ type: GET_CHANNEL_VIDEOS_LOADING, payload: false });
  }
};
