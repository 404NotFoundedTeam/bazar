import { createContext } from "react";
import Header from "./pages/Header";
import Home from "./pages/Home";
import SalePage from "./pages/salepage";
import AllVendors from "./pages/Vendors/AllVendors";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}

      <AllVendors />
    </>
  );
}

export default App;
