import { Box } from "@mui/material";

const RightBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "red",
        display: { xs: "none", sm: "block", lg: "none" },
      }}
      flex={2}
      p={2}
    >
      RightBar
    </Box>
  );
};

export default RightBar;
