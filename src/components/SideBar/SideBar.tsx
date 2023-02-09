import "./styles.css";
import { Stack, Typography } from "@mui/material";
import { Dispatch, FC, SetStateAction } from "react";
import { categories } from "../../utils/constants";

interface Props {
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
}

const SideBar: FC<Props> = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      className="side-bar"
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => {
        return (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            className={selectedCategory === category.name ? "selected" : ""}
          >
            <span>{category.icon}</span>
            <span>{category.name}</span>
          </button>
        );
      })}
      <Typography variant="body2" sx={{ mt: 1.5, color: "white" }}>
        Copyright 2023 TubeStream
      </Typography>
    </Stack>
  );
};

export default SideBar;
