import Home from "./pages/Home";
import SalePage from "./pages/salepage";
import { Route, Routes } from "react-router-dom";
import UserDashboard from "./pages/UserDashboard";
import MainThemeProvider from "./Theme/ThemeContext";
import AllVendors from "./pages/Vendors/AllVendors";
import VendorOwnPage from "./pages/Vendors/OwnVendorPage";

export default function App() {
  return (
    <MainThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/salepage" element={<SalePage />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/vendor" element={<VendorOwnPage />} />
      </Routes>
    </MainThemeProvider>
  );
}
