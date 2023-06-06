import "./App.css";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <Box className="App">
        
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
