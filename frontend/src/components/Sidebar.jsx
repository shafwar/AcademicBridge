import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, FileText, BookOpen, LogOut, ChevronDown, User, Award, Menu, X } from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ nama, nim, prodi }) => {
  const location = useLocation();
  const [isAkademikOpen, setIsAkademikOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Track current active path
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Handle akademik dropdown
  const toggleAkademik = () => {
    setIsAkademikOpen(!isAkademikOpen);
  };

  // Handle sidebar collapse
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  // Handle window resize for mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setCollapsed(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        {collapsed ? <Menu size={20} /> : <X size={20} />}
      </div>

      <div className="sidebar-header">
        <img 
          src="https://upload.wikimedia.org/wikipedia/id/2/2d/Undip.png" 
          alt="Logo Undip" 
          className="sidebar-logo" 
        />
        {!collapsed && <span className="sidebar-title">MAHASIGMA</span>}
      </div>

      <div className="user-info">
        {collapsed ? (
          <div className="user-avatar">
            <User size={24} />
          </div>
        ) : (
          <>
            <h3>{nama}</h3>
            <p>{nim}</p>
            <p>{prodi}</p>
          </>
        )}
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li className={`nav-item ${isActive('/mahasiswa/dashboard') ? 'active' : ''}`}>
            <Link to="/mahasiswa/dashboard">
              <Home className="nav-icon" size={18} />
              {!collapsed && <span>Dashboard</span>}
            </Link>
          </li>

          <li className={`nav-item ${isActive('/mahasiswa/registrasi') ? 'active' : ''}`}>
            <Link to="/mahasiswa/registrasi">
              <FileText className="nav-icon" size={18} />
              {!collapsed && <span>Registrasi</span>}
            </Link>
          </li>

          <li className={`nav-item dropdown ${isAkademikOpen ? 'open' : ''}`}>
            <div 
              className={`dropdown-toggle ${location.pathname.includes('/mahasiswa/akademik') ? 'active' : ''}`} 
              onClick={toggleAkademik}
            >
              <BookOpen className="nav-icon" size={18} />
              {!collapsed && (
                <>
                  <span>Akademik</span>
                  <ChevronDown className={`dropdown-icon ${isAkademikOpen ? 'rotated' : ''}`} size={14} />
                </>
              )}
            </div>
            <ul className={`dropdown-menu ${isAkademikOpen ? 'show' : ''}`}>
              <li>
                <Link to="/mahasiswa/akademik/buat-irs" className={isActive('/mahasiswa/akademik/buat-irs') ? 'active' : ''}>
                  <div className="menu-icon">➕</div>
                  {!collapsed && <span>Buat IRS</span>}
                </Link>
              </li>
              <li>
                <Link to="/mahasiswa/akademik/irs" className={isActive('/mahasiswa/akademik/irs') ? 'active' : ''}>
                  <div className="menu-icon">📋</div>
                  {!collapsed && <span>IRS</span>}
                </Link>
              </li>
              <li>
                <Link to="/mahasiswa/akademik/khs" className={isActive('/mahasiswa/akademik/khs') ? 'active' : ''}>
                  <div className="menu-icon">📊</div>
                  {!collapsed && <span>KHS</span>}
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item logout">
            <Link to="/logout">
              <LogOut className="nav-icon" size={18} />
              {!collapsed && <span>Logout</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;