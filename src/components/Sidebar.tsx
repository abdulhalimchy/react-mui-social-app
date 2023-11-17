import { Box } from "@mui/material";

const Sidebar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "skyblue",
        display: { xs: "none", sm: "block", lg: "none" },
      }}
      flex={1}
      p={2}
    >
      Sidebar
    </Box>
  );
};

export default Sidebar;
