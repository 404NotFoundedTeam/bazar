import Home from "./pages/Home";
import SalePage from "./pages/salepage";
import { Route, Routes } from "react-router-dom";
import UserDashboard from "./pages/UserDashboard";
import MainThemeProvider from "./Theme/ThemeContext";
import Header from "./pages/Header";
import {
  OrderDetails,
  UserAddress,
  UserOrders,
  UserPayment,
  UserProfile,
  UserSupport,
  UserWishlist,
} from "./components/DashboardComponents/UserDashboard";
import AllVendors from "./pages/Vendors/AllVendors";
import VendorOwnPage from "./pages/Vendors/OwnVendorPage";
import { QueryClient, QueryClientProvider } from "react-query";
import VendorDashboard from "./pages/VendorDashboard";
import {
  AddProduct,
  Dashboard,
  VendorOrders,
  VendorProducts,
  VendorSettings,
} from "./components/DashboardComponents/VendorDashboard";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/salepage" element={<SalePage />} />
          <Route path="/user-dashboard" element={<UserDashboard />}>
            <Route path="orders" element={<UserOrders />} />
            <Route path="order-details" element={<OrderDetails />} />
            <Route path="wishlist" element={<UserWishlist />} />
            <Route path="support" element={<UserSupport />} />
            <Route path="profile-info" element={<UserProfile />} />
            <Route path="addresses" element={<UserAddress />} />
            <Route path="payment-methods" element={<UserPayment />} />
          </Route>
          <Route exact path="/vendor-dashboard" element={<VendorDashboard />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<VendorProducts />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="orders" element={<VendorOrders />} />
            <Route path="account-settings" element={<VendorSettings />} />
          </Route>
          <Route path="/vendor" element={<VendorOwnPage />} />
          <Route path="/allVendor" element={<AllVendors />} />
          <Route path="/vendor/:id" element={<VendorOwnPage />} />
        </Routes>
      </MainThemeProvider>
    </QueryClientProvider>
  );
}
