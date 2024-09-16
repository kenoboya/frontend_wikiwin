import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Article from './components/article/article';
import Articles from './components/articles/articles';
import Footer from './components/footer';
import Header from './components/header/header';
import UserProfile from './components/profile';
import Login from './components/login';
import Registration from './components/registration';

function Layout() {
  const location = useLocation();
  const hideHeaderFooter =
    location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="App">
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:title" element={<Article />} />
        <Route path="/profile/:username" element={<UserProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
