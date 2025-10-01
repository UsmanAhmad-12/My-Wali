import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import Navbar from "./components/navbar-footer/Navbar.jsx";
import Footer from "./components/navbar-footer/Footer.jsx";
import MyCommunity from "./screens/MyCommunity.jsx";
import Home from "./screens/Home.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/my-community" element={<MyCommunity />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
