import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./sceens/homePage/index";
import LoginPage from "./sceens/loginPage/index";
import ProfilePage from "./sceens/profilePage/index";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="App">
      <BrowserRouter>
        <CssBaseline>
          <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/profile/:userId" element={<ProfilePage />} />
            </Routes>
          </ThemeProvider>
        </CssBaseline>
      </BrowserRouter>
    </div>
  );
}

export default App;
