import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchInput from "./SearchInput.tsx";
import MailIcon from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";
import { useState } from "react";
import Diversity2Icon from "@mui/icons-material/Diversity2";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "14px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "5px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky" color="info">
      <StyledToolbar>
        <Box sx={{ display: "flex" }}>
          <Diversity2Icon fontSize="medium" />
          <Typography
            variant="h5"
            marginLeft={1}
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            Remuidea
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }} alignItems="center">
          <SearchInput />
          <Icons>
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
            <Badge badgeContent={4} color="error">
              <Notifications />
            </Badge>
            <Avatar
              sx={{ width: 30, height: 30 }}
              alt="Salman Chy"
              src="https://mui.com/static/images/avatar/2.jpg"
              onClick={() => setOpen(true)}
            />
          </Icons>
          <UserBox onClick={() => setOpen(true)}>
            <Avatar
              sx={{ width: 30, height: 30 }}
              alt="Salman Chy"
              src="https://mui.com/static/images/avatar/2.jpg"
            />
            <Typography>Salman</Typography>
          </UserBox>
        </Box>
      </StyledToolbar>
      <Menu
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>Change Password</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
