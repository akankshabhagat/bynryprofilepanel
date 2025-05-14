import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import ProfileList from './components/ProfileList';
import ProfileDetail from './components/ProfileDetail';
import initialProfiles from './data/profiles';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [profiles, setProfiles] = useState(initialProfiles);

  return (
    <Router>
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
      />
      <Routes>
        <Route 
          path="/" 
          element={<ProfileList searchTerm={searchTerm} profiles={profiles} setProfiles={setProfiles} />} 
        />
       <Route path="/profile/:id" element={<ProfileDetail profiles={profiles} />} />

      </Routes>
    </Router>
  );
}

export default App;
