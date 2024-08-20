import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="main container">
          <Routes>
            <Route path="/" element={<HomeScreen />}></Route>
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
