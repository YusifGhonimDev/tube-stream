import { Dispatch } from "redux";
import { fetchFromAPI } from "../../utils/fetchFromAPI";
import { FEED_FAILED, FEED_LOADING, SHOW_FEED } from "../types";

export const showFeed = (category: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: FEED_LOADING, payload: true });
    const response = await fetchFromAPI(`/search?part=snippet&q=${category}`);
    dispatch({ type: SHOW_FEED, payload: response.items });
  } catch (error) {
    dispatch({ type: FEED_FAILED, payload: error });
  } finally {
    dispatch({ type: FEED_LOADING, payload: false });
  }
};
