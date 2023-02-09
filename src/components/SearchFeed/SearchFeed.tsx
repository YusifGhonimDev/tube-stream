import { Box, Typography } from "@mui/material";
import Videos from "../Videos/Videos";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchVideos } from "../../redux/actions/search";
import { RootState } from "../../redux/store";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const dispatch: any = useDispatch();
  const { searchedVideos } = useSelector(
    (state: RootState) => state.searchReducer
  );

  useEffect(() => {
    dispatch(searchVideos(searchTerm!));
  }, [searchTerm, dispatch]);

  return (
    <Box
      p={2}
      sx={{ overflowY: "auto", height: "90vh", flex: 2 }}
      className="search-feed"
    >
      <Typography variant="h4" fontWeight="bold" mb={2} color="white">
        Search Results for: <span className="videos">{searchTerm}</span> videos
      </Typography>
      <Videos videos={searchedVideos} direction="row" />
    </Box>
  );
};

export default SearchFeed;
