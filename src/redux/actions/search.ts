import { Dispatch } from "redux";
import { fetchFromAPI } from "../../utils/fetchFromAPI";
import {
  SEARCH_VIDEOS,
  SEARCH_VIDEOS_FAILED,
  SEARCH_VIDEOS_LOADING,
} from "../types";

export const searchVideos =
  (searchTerm: string) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: SEARCH_VIDEOS_LOADING, payload: true });
      const response = await fetchFromAPI(
        `/search?part=snippet&q=${searchTerm}`
      );
      dispatch({ type: SEARCH_VIDEOS, payload: response.items });
    } catch (error) {
      dispatch({ type: SEARCH_VIDEOS_FAILED, payload: error });
    } finally {
      dispatch({ type: SEARCH_VIDEOS_LOADING, payload: false });
    }
  };
