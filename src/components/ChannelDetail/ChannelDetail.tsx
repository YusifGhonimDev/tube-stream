import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getChannelDetail,
  getChannelVideos,
} from "../../redux/actions/channel";
import { RootState } from "../../redux/store";
import ChannelCard from "../ChannelCard/ChannelCard";
import Videos from "../Videos/Videos";

const ChannelDetail = () => {
  const { id } = useParams();
  const dispatch: any = useDispatch();
  const { channelVideos, channelDetail } = useSelector(
    (state: RootState) => state.channelReducer
  );

  useEffect(() => {
    dispatch(getChannelDetail(id!));
    dispatch(getChannelVideos(id!));
  }, [id, dispatch]);

  return (
    <Box>
      <Box minHeight="95vh">
        <Box
          sx={{
            background:
              "linear-gradient(90deg, rgba(0, 238, 247, 1) 0%, rgba(206, 3, 184, 1) 100%, rgba(0, 212, 255, 1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard marginTop="-110px" channelDetail={channelDetail} />
        <Box display="flex" p={2}>
          <Box sx={{ mr: { sm: "100px" } }} />
          <Videos videos={channelVideos} direction="row" />
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
