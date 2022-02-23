import Header from "./pages/Header";
import Home from "./pages/Home";
import SalePage from "./pages/salepage";
import { createContext, useContext, useMemo, useState } from "react";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import customTheme from "./Theme";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function App() {
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
<<<<<<< HEAD
    <>
      <Header />
      <Home />
      <SalePage />
    </>
  )
=======
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <section style={{ background: theme.palette.background.default }}>
          <Header />
          <Home />
        </section>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
>>>>>>> f80c7dcfb063ee6c4797432182bc3b0cc925230b
}

export { ColorModeContext };
