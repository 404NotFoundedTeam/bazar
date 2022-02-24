import Header from './pages/Header'
import Home from './pages/Home'
import SalePage from './pages/salepage'
import { createContext, useContext, useMemo, useState } from 'react'
import { ThemeProvider, useTheme } from '@mui/material/styles'
import customTheme from './Theme'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/cart'

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
          <SalePage />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/salepage" element={<SalePage />} />
          </Routes>
        </section>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export { ColorModeContext }
