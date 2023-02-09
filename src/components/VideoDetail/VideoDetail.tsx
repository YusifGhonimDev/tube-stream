import "./styles.css";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import Videos from "../Videos/Videos";
import { useDispatch, useSelector } from "react-redux";
import { getVideoDetail, getVideos } from "../../redux/actions/video";
import { RootState } from "../../redux/store";

const VideoDetail = () => {
  const { id } = useParams();
  const mobile = useMediaQuery("(max-width: 600px)");
  const dispatch: any = useDispatch();
  const { videoDetail, videos } = useSelector(
    (state: RootState) => state.videoReducer
  );

  useEffect(() => {
    dispatch(getVideoDetail(id!));
    dispatch(getVideos(id!));
  }, [id, dispatch]);

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              className="video-player"
              url={`https://www.youtube.com/watch?v=${id}`}
            />
            <Typography
              variant="h5"
              fontWeight="bold"
              py={1}
              px={2}
              color="white"
            >
              {videoDetail.snippet?.title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              px={2}
              sx={{ color: "white" }}
            >
              <Link to={`/channel/${videoDetail.snippet?.channelId}`}>
                <Typography color="white" variant={mobile ? "subtitle1" : "h6"}>
                  {videoDetail.snippet?.channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "grey", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetail.statistics?.viewCount).toLocaleString()}{" "}
                  views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(
                    videoDetail.statistics?.likeCount!
                  ).toLocaleString()}{" "}
                  likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
