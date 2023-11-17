import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import {
  Box,
  createTheme,
  PaletteMode,
  Stack,
  ThemeProvider,
} from "@mui/material";
import Navbar from "./components/Navbar.tsx";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("dark" as PaletteMode);

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const onChangeMode = () => setMode(mode === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar onChangeMode={onChangeMode} />
          <Feed />
          <RightBar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
