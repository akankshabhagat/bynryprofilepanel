import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import ProfileList from './components/ProfileList';
import ProfileDetail from './components/ProfileDetail';

function App() {
  const [searchTerm, setSearchTerm] = useState(''); // ✅ Changed from searchText
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Router>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} isLogin={isLogin} setIsLogin={setIsLogin} />
      <Routes>
        <Route path="/" element={<ProfileList searchTerm={searchTerm} />} />
        <Route path="/profile/:id" element={<ProfileDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
