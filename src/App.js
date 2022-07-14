import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Rentals from "./pages/Rentals";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";
import ScrollToTop from "./helpers/ScrollToTop";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/rentals" element={<Rentals/>} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
