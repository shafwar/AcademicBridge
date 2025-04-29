import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Registrasi from './pages/Registrasi';
import BuatIRS from './pages/BuatIRS';
import IRS from './pages/IRS';
import KHS from './pages/KHS';
import MainLayout from './Layouts/mainlayout'; // Perhatikan path sesuai struktur folder
import './App.css';

// Simpel auth check (dalam aplikasi nyata akan lebih kompleks)
const isAuthenticated = () => {
  return localStorage.getItem('isLoggedIn') === 'true';
};

// Komponen wrapper untuk route yang memerlukan autentikasi
const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman publik */}
        <Route path="/login" element={<Login />} />
        
        {/* Redirect ke dashboard jika sudah login */}
        <Route path="/" element={
          isAuthenticated() ?
            <Navigate to="/mahasiswa/dashboard" replace /> :
            <Navigate to="/login" replace />
        } />
        
        {/* Halaman yang dilindungi dengan MainLayout */}
        <Route path="/mahasiswa" element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="registrasi" element={<Registrasi />} />
          <Route path="akademik/buat-irs" element={<BuatIRS />} />
          <Route path="akademik/irs" element={<IRS />} />
          <Route path="akademik/khs" element={<KHS />} />
        </Route>
        
        {/* Redirect dari /dashboard ke /mahasiswa/dashboard */}
        <Route path="/dashboard" element={<Navigate to="/mahasiswa/dashboard" replace />} />
        
        {/* Rute logout */}
        <Route path="/logout" element={<Logout />} />
        
        {/* Rute not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

// Komponen untuk logout
const Logout = () => {
  React.useEffect(() => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    window.location.href = '/login';
  }, []);
  return <div>Logging out...</div>;
};

// Komponen halaman tidak ditemukan
const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Halaman tidak ditemukan</p>
      <a href="/mahasiswa/dashboard">Kembali ke Beranda</a>
    </div>
  );
};

export default App;