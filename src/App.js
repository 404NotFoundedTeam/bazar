import { createContext } from "react";
import Header from "./pages/Header";
import Home from "./pages/Home";
import SalePage from "./pages/salepage";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
