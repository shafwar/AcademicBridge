// src/layouts/mainlayout.jsx
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import './mainlayout.css';

const MainLayout = () => {
  const location = useLocation();
  
  // Data user untuk sidebar
  const userData = {
    nama: "Naufal Shafi Anwar",
    nim: "24060122140185",
    prodi: "Informatika S1"
  };
  
  return (
    <div className="layout-container">
      {/* Sidebar hanya ditampilkan sekali di sini */}
      <div className="sidebar-container">
        <Sidebar
          nama={userData.nama}
          nim={userData.nim}
          prodi={userData.prodi}
        />
      </div>
      
      {/* Content wrapper menampung Outlet */}
      <div className="content-wrapper">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;