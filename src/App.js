import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Article from "./components/article";
import Articles from "./components/articles";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <nav>
          <ul>
            <li>
              <Link to="/articles">Articles</Link>
            </li>
            <li>
              <Link to="/article">Article</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/articles" element={<Articles />} />
          <Route path="/article" element={<Article />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
