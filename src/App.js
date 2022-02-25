import Home from "./pages/Home";
import SalePage from "./pages/salepage";
import { Route, Routes } from "react-router-dom";
import UserDashboard from "./pages/UserDashboard";
import MainThemeProvider from "./Theme/ThemeContext";

export default function App() {
  return (
    <MainThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/salepage" element={<SalePage />} />
      </Routes>
    </MainThemeProvider>
  );
}
