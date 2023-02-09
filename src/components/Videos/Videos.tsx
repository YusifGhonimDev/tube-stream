import { Box, Skeleton } from "@mui/material";
import { Stack } from "@mui/system";
import { FC } from "react";
import { useSelector } from "react-redux";
import { ChannelCard, VideoCard } from "..";
import { Result } from "../../models/result";
import { RootState } from "../../redux/store";

interface Props {
  videos: Result[];
  direction: string;
}

const Videos: FC<Props> = ({ videos, direction }) => {
  const { feedLoading } = useSelector((state: RootState) => state.feedReducer);
  const { searchLoading } = useSelector(
    (state: RootState) => state.searchReducer
  );

  return (
    <Stack
      sx={{ flexDirection: direction as string }}
      flexWrap="wrap"
      justifyContent="flex-start"
      gap={2}
    >
      {videos.map((item, index) => {
        return (
          <Box key={index}>
            {feedLoading || searchLoading ? (
              <>
                <Skeleton
                  sx={{ bgcolor: "white" }}
                  variant="rectangular"
                  width="20.5vw"
                  height="31vh"
                />
                <Skeleton sx={{ bgcolor: "white" }} width="100%" />
                <Skeleton sx={{ bgcolor: "white" }} width="50%" />
              </>
            ) : (
              <>
                {item.id?.videoId && <VideoCard video={item} />}
                {item.id?.channelId && <ChannelCard channelDetail={item} />}
              </>
            )}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
