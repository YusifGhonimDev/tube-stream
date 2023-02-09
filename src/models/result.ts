export interface Result {
  items?: string[];
  statistics?: {
    subscriberCount: string;
    viewCount: string;
    likeCount: string;
  };
  id?: {
    videoId: string;
    channelId: string;
  };
  snippet?: {
    channelTitle: string;
    title: string;
    channelId: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
}
