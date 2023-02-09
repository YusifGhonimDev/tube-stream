import { CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Result } from "../../models/result";
import { VIDEO_DETAIL } from "../../routes/strings";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../../utils/constants";

interface Props {
  video: Result;
}

const VideoCard: FC<Props> = ({ video }) => {
  return (
    <Card
      sx={{
        width: {
          xs: "100%",
          sm: 358,
          md: "320px",
          boxShadow: "none",
          borderRadius: 0,
        },
      }}
    >
      <Link
        to={video.id?.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}
      >
        <CardMedia
          component="img"
          image={video.snippet?.thumbnails.high.url}
          alt={video.snippet?.title}
          sx={{ width: { xs: "100%", sm: 358, md: 320 }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link
          to={
            video.id?.videoId
              ? `${VIDEO_DETAIL}${video.id?.videoId}`
              : demoVideoUrl
          }
        >
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {video.snippet?.title.slice(0, 60) ?? demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            video.snippet?.channelId
              ? `/channel/${video.snippet.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="grey">
            {video.snippet?.channelTitle.slice(0, 30) ??
              demoChannelTitle.slice(0, 30)}
            <CheckCircle sx={{ fontSize: 12, color: "grey", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
