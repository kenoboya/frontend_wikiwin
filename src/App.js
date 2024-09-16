import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Article from './components/article/article';
import Articles from './components/articles/articles';
import Footer from './components/footer';
import Header from './components/header/header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:title" element={<Article />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
