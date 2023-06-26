import "./App.css";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ProductDetails from "./components/Product/ProductDetails";
import Footer from "./components/layout/Footer/Footer";
import NavBar from "./components/layout/Navbar/NavBar";
import Products from "./components/Product/Products/Products";
import Search from "./components/Product/Search/Search";
import LoginSignUp from "./components/User/LoginSignup/LoginSignup";
import { loadUser } from "./store/users/userActions";
import { useDispatch } from "react-redux";
import Profile from "./components/User/Profile/Profile";
import { useEffect } from "react";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import UpdateProfile from "./components/User/UpdateProfile/UpdateProfile";
import UpdatePassword from "./components/User/UpdatePassword/UpdatePassword";
import ForgotPassword from "./components/User/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/User/ResetPassword/ResetPassword";
import Cart from "./components/Product/Cart/Cart";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    loadUser(dispatch);
  }, [dispatch]);

  return (
    <Router>
      <Box className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product/:id" element={<ProductDetails />} />
          <Route exact path="/products" element={<Products />} />
          <Route path="/products/:keyword" element={<Products />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/login" element={<LoginSignUp />} />
          <Route
            exact
            path="/account"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/me/update"
            element={
              <ProtectedRoute>
                <UpdateProfile />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/password/update"
            element={
              <ProtectedRoute>
                <UpdatePassword />
              </ProtectedRoute>
            }
          />
          <Route exact path="/password/forgot" element={<ForgotPassword />} />
          <Route exact path="/password/reset/:token" element={<ResetPassword />} />
          <Route exact path="/cart" element={<Cart/>} />
        </Routes>

        <Box
          className="home-footer-container"
          sx={{
            width: "100%",
            height: "20vh",
            backgroundColor: "black",
          }}
        >
          <Footer />
        </Box>
      </Box>
    </Router>
  );
}

export default App;
