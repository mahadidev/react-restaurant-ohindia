// Import Modules
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

// Import Pages
import HomePage from "./Pages/HomePage";

// Import Components
import Navbar from "./Components/Navbar/Navbar";

// Import Data
import { NavigationData } from "./Data/SiteBasicData";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <ParallaxProvider>
        <Navbar {...NavigationData} />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </ParallaxProvider>
    </BrowserRouter>
  );
}

export default App;
