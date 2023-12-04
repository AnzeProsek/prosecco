import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IntroPage from "./views/IntroPage";
import MainView from "./views/MainView";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/main" element={<MainView />} />
        <Route path="/" element={<IntroPage />} />
      </Routes>
    </Router>
  );
};

export default App;
