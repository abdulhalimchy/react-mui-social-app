import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import SearchInput from "./SearchInput.tsx";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Box sx={{ display: "flex" }} alignItems="center">
          <FacebookIcon fontSize="large" />
          <Typography
            variant="h5"
            marginLeft={0.3}
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            Facebook
          </Typography>
        </Box>
        <SearchInput />
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
