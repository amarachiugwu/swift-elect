import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return <div className='font-poppins'>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/about" element={<AboutPage />} />

      <Route path="/contact" element={<ContactPage />} />

      <Route path="/register" element={<RegisterPage />} />
        
      <Route path="/login" element={<LoginPage />} />
        
    </Routes>
    
  </BrowserRouter>
  </div>;
  
}

export default App;
