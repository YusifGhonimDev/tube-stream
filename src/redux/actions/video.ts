import { Dispatch } from "redux";
import { fetchFromAPI } from "../../utils/fetchFromAPI";
import {
  GET_VIDEOS,
  GET_VIDEOS_FAILED,
  GET_VIDEOS_LOADING,
  GET_VIDEO_DETAIL,
  GET_VIDEO_DETAIL_FAILED,
  GET_VIDEO_DETAIL_LOADING,
} from "../types";

export const getVideoDetail = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_VIDEO_DETAIL_LOADING, payload: true });
    const response = await fetchFromAPI(
      `videos?part=snippet,statistics&id=${id}`
    );
    dispatch({ type: GET_VIDEO_DETAIL, payload: response.items[0] });
  } catch (error) {
    dispatch({ type: GET_VIDEO_DETAIL_FAILED, payload: error });
  } finally {
    dispatch({ type: GET_VIDEO_DETAIL_LOADING, payload: false });
  }
};

export const getVideos = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_VIDEOS_LOADING, payload: true });
    const response = await fetchFromAPI(
      `search?part=snippet&relatedToVideoId=${id}&type=video`
    );
    dispatch({ type: GET_VIDEOS, payload: response.items });
  } catch (error) {
    dispatch({ type: GET_VIDEOS_FAILED, payload: error });
  } finally {
    dispatch({ type: GET_VIDEOS_LOADING, payload: false });
  }
};
