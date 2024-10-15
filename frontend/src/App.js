import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import SignupScreen from "./screens/SigupScreen/SignupScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen/ProductDetailsScreen";
import AddToCartScreen from "./screens/AddToCartScreen/AddToCartScreen";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="main container">
          <Routes>
            <Route path="/" element={<HomeScreen />}></Route>
            <Route path="/signup" element={<SignupScreen />}></Route>
            <Route path="/signin" element={<LoginScreen />}></Route>
            <Route
              path="/product/:id"
              element={<ProductDetailsScreen />}
            ></Route>
            <Route path="/cart/:id?" element={<AddToCartScreen />}></Route>
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
