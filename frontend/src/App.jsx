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
import { useDispatch, useSelector } from "react-redux";
import Profile from "./components/User/Profile/Profile";
import { useEffect } from "react";
// import ProtectedRoute from "./components/Route/ProtectedRoute";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);

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
          {/* {loadin?<Loader}<Route exact path="/account" element={<Profile />} /> */}

          <Route exact path="/account" element={<Profile />} />
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
