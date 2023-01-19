import axios from "axios";
import { Routes, Route, useParams } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Routes/Home/Home";
import { NewPost } from "./Routes/NewPost/NewPost";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newpost" element={<NewPost />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
