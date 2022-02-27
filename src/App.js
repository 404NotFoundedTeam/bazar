import Home from "./pages/Home";
import SalePage from "./pages/salepage";
import { Route, Routes } from "react-router-dom";
import UserDashboard from "./pages/UserDashboard";
import MainThemeProvider from "./Theme/ThemeContext";
import Header from "./pages/Header";
import {
  UserAddress,
  UserOrders,
  UserPayment,
  UserProfile,
  UserSupport,
  UserWishlist,
} from "./components/DashboardComponents";
import AllVendors from "./pages/Vendors/AllVendors";
import VendorOwnPage from "./pages/Vendors/OwnVendorPage";

export default function App() {
  return (
    <MainThemeProvider>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/salepage" element={<SalePage />} />
        <Route path="/user-dashboard" element={<UserDashboard />}>
          <Route path="orders" element={<UserOrders />} />
          <Route path="wishlist" element={<UserWishlist />} />
          <Route path="support" element={<UserSupport />} />
          <Route path="profile-info" element={<UserProfile />} />
          <Route path="addresses" element={<UserAddress />} />
          <Route path="payment-methods" element={<UserPayment />} />
        </Route>
        <Route path="/vendor" element={<VendorOwnPage />} />
        <Route path="/allVendor" element={<AllVendors />} />
      </Routes>
    </MainThemeProvider>
  );
}
