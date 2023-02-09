import "./styles.css";
import { Box, Stack, Typography } from "@mui/material";
import SideBar from "../SideBar/SideBar";
import Videos from "../Videos/Videos";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { showFeed } from "../../redux/actions/feed";
import { RootState } from "../../redux/store";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("New");
  const dispatch: any = useDispatch();
  const { feed } = useSelector((state: RootState) => state.feedReducer);

  useEffect(() => {
    dispatch(showFeed(selectedCategory));
  }, [dispatch, selectedCategory]);

  return (
    <Stack className="feed" sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: "92vh",
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} color="white">
          {selectedCategory} <span className="videos">videos</span>
        </Typography>
        <Videos videos={feed} direction="row" />
      </Box>
    </Stack>
  );
};

export default Feed;
