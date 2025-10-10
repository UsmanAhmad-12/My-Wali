import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import Navbar from "./components/navbar-footer/Navbar.jsx";
import Footer from "./components/navbar-footer/Footer.jsx";
import MyCommunity from "./screens/MyCommunity.jsx";
import Home from "./screens/Home.jsx";
// import AOS from "aos";
// import "aos/dist/aos.css";
import MyMasjid from "./screens/MyMasjid.jsx";
// import { useAOS } from "./hooks/useAOS.js";
import ContactUs from "./screens/ContactUs.jsx";
import RegisterMasjid from "./screens/RegisterMasjid.jsx";
import MyMasjidGetInTouch from "./screens/MyMasjidGetInTouch.jsx";

function App() {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     once: true,
  //     offset: 50,
  //     delay: 0,
  //     anchorPlacement: 'top-bottom',
  //     easing: 'ease-in-out',
  //   });
  // }, []);
  const Layout = () => {
    // Use custom hook with 100ms delay for route changes
    // useAOS(100); 
    
    return (
      <div>
        <Navbar />
        <Outlet />
        {/* <Footer /> */}
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
            <Route path="/my-masjid" element={<MyMasjid />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/register-masjid" element={<RegisterMasjid />} />
            <Route path="/masjid-get-in-touch" element={<MyMasjidGetInTouch/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
