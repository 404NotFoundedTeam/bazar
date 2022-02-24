<<<<<<< HEAD
import Header from './pages/Header'
import Home from './pages/Home'
import SalePage from './pages/salepage'
import { createContext, useContext, useMemo, useState } from 'react'
import { ThemeProvider, useTheme } from '@mui/material/styles'
import customTheme from './Theme'
=======
import Header from "./pages/Header";
import Home from "./pages/Home";
import SalePage from "./pages/salepage";
import { createContext, useContext, useMemo, useState } from "react";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import customTheme from "./Theme";
import { Route, Routes } from "react-router-dom";
>>>>>>> 45b987c69324f0359c10221a517d02263b1c9cc5

const ColorModeContext = createContext({ toggleColorMode: () => {} })

export default function App() {
  const [mode, setMode] = useState('light')
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    [],
  )

  const theme = useMemo(() => customTheme(mode), [mode])
  console.log(theme)

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <section style={{ background: theme.palette.background.default }}>
<<<<<<< HEAD
          <Header />
          <Home />
          <SalePage />
        </section>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
=======
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </section>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
>>>>>>> 45b987c69324f0359c10221a517d02263b1c9cc5
}

export { ColorModeContext }
