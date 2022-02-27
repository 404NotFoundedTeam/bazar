import Home from "./pages/Home";
import SalePage from "./pages/salepage";
import { Route, Routes } from "react-router-dom";
import UserDashboard from "./pages/UserDashboard";
import MainThemeProvider from "./Theme/ThemeContext";
import Header from "./pages/Header";

export default function App() {
  return (
    <MainThemeProvider>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/salepage" element={<SalePage />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
      </Routes>
    </MainThemeProvider>
  );
}
