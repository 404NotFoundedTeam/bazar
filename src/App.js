import Home from "./pages/Home";
import SalePage from "./pages/salepage";
import { Navigate, Route, Routes } from "react-router-dom";
import UserDashboard from "./pages/UserDashboard";
import MainThemeProvider from "./Theme/ThemeContext";
import Header from "./pages/Header";
import {
  AddNewPayment,
  EditPayment,
  EditProfile,
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
import SignIn from "./pages/Login/SignIn";
import SignUp from "./pages/Login/SignUp";
import VendorDashboard from "./pages/VendorDashboard";
import {
  AddProduct,
  Dashboard,
  EditProduct,
  ProductForm,
  VendorOrders,
  VendorProducts,
  VendorSettings,
  VendorOrderDetails,
} from "./components/DashboardComponents/VendorDashboard";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Checkout from "./components/stepper/Checkout";
import ProductPage from "./pages/productPage";
import SaleTab from "./components/SaleTabs";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/salepage" element={<SaleTab />} />
          <Route path="/products/:productId" element={<ProductPage />} />
          <Route path="/user-dashboard" element={<UserDashboard />}>
            <Route path="orders" element={<UserOrders />} />
            <Route path="add-method" element={<AddNewPayment />} />
            <Route path="edit-method" element={<EditPayment />} />
            <Route path="edit-profile" element={<EditProfile />} />
            <Route path="order-details" element={<OrderDetails />} />
            <Route path="wishlist" element={<UserWishlist />} />
            <Route path="support" element={<UserSupport />} />
            <Route path="profile-info" element={<UserProfile />} />
            <Route path="addresses" element={<UserAddress />} />
            <Route path="payment-methods" element={<UserPayment />} />
          </Route>
          <Route path="cart" element={<Checkout />} />
          <Route exact path="/vendor-dashboard" element={<VendorDashboard />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<VendorProducts />} />
            <Route path="edit-product" element={<EditProduct />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="orders" element={<VendorOrders />} />
            <Route path="order-info" element={<VendorOrderDetails />} />
            <Route path="account-settings" element={<VendorSettings />} />
          </Route>
          <Route path="/vendor" element={<VendorOwnPage />} />
          <Route path="/allVendor" element={<AllVendors />} />
          <Route path="/vendor/:id" element={<VendorOwnPage />} />
          <Route path="*" element={<p>Hello 404</p>} />
        </Routes>
      </MainThemeProvider>
    </QueryClientProvider>
  );
}
