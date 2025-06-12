import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import your components
import Home from "./components/Home";
import About from "./components/About";
import Apply from "./components/Apply";
import NotFound from "./components/NotFound";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Router>
        <ScrollToTop />
        <div className="sticky top-0 z-11 bg-background">
          <Navigation />
        </div>

        <main className="flex-grow mt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/o-nas" element={<About />} />
            <Route path="/aplikuj" element={<Apply />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
       <Footer />
      </Router>
    </div>
  );
};

export default App;
