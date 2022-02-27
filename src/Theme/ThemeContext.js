import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { createContext, useMemo, useState } from "react";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const customTheme = (mode) => {
  return createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: {
              main: "#1c2865",
            },
            error: {
              main: "#d61f56",
            },
            secondary: {
              main: "#f3f4fa",
            },
            info: {
              main: "#fff",
              dark: "#F6F9FC",
            },
            warning: {
              main: "#f8b800",
            },
          }
        : {
            // palette values for dark mode
            background: {
              default: "black",
            },
          }),
    },
    shadows: {
      header: "rgba(100, 100, 111, 0.1) 0px 7px 20px 0px;",
    },
  });
};

function MainThemeProvider({ children }) {
  const [mode, setMode] = useState("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(() => customTheme(mode), [mode]);
  console.log(theme);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default MainThemeProvider;
