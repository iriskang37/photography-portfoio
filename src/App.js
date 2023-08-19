import React from "react";
import MainPage from "./MainPage";
import AllPhotosPage from "./AllPhotosPage";
import Myworks from "./Myworks";
import Aboutme from "./Aboutme";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/allphotos" element={<AllPhotosPage />} />
        <Route path="/aboutme" element={<Aboutme/>}/>
        <Route path="/myworks" element={<Myworks/>}/>
      </Routes>
    </Router>
  );
}

export default App;

