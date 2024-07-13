import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import GlobalStyle from './components/GlobalStyle';
import LoginForm from './components/Login';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<LoginForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
