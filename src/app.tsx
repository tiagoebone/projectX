import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app.css";
import Navbar from "./components/navbar/navbar";
import About from "./containers/about/about";
import Home from "./containers/home/home";
import Search from "./containers/search/search";
import GlobalStatesProvider from "./contexts/globalStates/provider/globalStatesProvider";

export default function App() {
  return (
    <GlobalStatesProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="search" element={<Search />} />
            <Route path="*" element={<div>Not found</div>} />
          </Routes>
        </Router>
      </div>
    </GlobalStatesProvider>
  );
}
