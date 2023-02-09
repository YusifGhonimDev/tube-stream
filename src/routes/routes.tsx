import { ChannelDetail, Feed, SearchFeed, VideoDetail } from "../components";
import { CHANNEL_DETAIL, FEED, SEARCH_FEED, VIDEO_DETAIL } from "./strings";

export const routes = [
  {
    element: <Feed />,
    path: FEED,
  },
  {
    element: <VideoDetail />,
    path: VIDEO_DETAIL,
  },
  {
    element: <ChannelDetail />,
    path: CHANNEL_DETAIL,
  },
  {
    element: <SearchFeed />,
    path: SEARCH_FEED,
  },
];
