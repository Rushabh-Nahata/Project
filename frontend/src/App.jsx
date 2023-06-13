import "./App.css";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Footer from "./components/layout/Footer/Footer";
import NavBar from "./components/layout/Navbar/NavBar";

function App() {
  return (
    <Router>
      <Box className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product/:id" element={<ProductDetails />} />
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
