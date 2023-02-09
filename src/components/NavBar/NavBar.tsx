import "./styles.css";
import { Stack } from "@mui/material";
import { FEED } from "../../routes/strings";
import { logo } from "../../utils/constants";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Stack
      className="nav-bar"
      direction="row"
      alignItems="center"
      p={2}
      position="sticky"
      bgcolor="black"
      top={0}
      justifyContent="space-between"
    >
      <Link to={FEED}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar></SearchBar>
    </Stack>
  );
};

export default NavBar;
